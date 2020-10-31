import { HatchBabyRestPlus } from '../hatch-baby-rest-plus'
import { hap } from '../hap'
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs/operators'
import { combineLatest, Observable, of, Subject } from 'rxjs'
import {
  PlatformAccessory,
  WithUUID,
  Service as ServiceClass,
  Characteristic as CharacteristicClass,
  CharacteristicEventTypes,
  CharacteristicSetCallback,
  CharacteristicValue,
} from 'homebridge'
import { AudioTrack } from '../hatch-baby-types'

export class HatchBabyRestPlusVolumeAccessory {
  constructor(
    private light: HatchBabyRestPlus,
    private accessory: PlatformAccessory,
    private audioTrack?: AudioTrack
  ) {
    const { Service, Characteristic } = hap,
      lightService = this.getService(Service.Lightbulb),
      batteryService = this.getService(Service.BatteryService),
      accessoryInfoService = this.getService(Service.AccessoryInformation),
      onSetHue = new Subject<number>(),
      onSetSaturation = new Subject<number>()

    combineLatest([onSetHue, onSetSaturation])
      .pipe(debounceTime(100))
      .subscribe(([hue, saturation]) => {
        light.setColorFromHueAndSaturation(hue, saturation)
      })

    this.registerCharacteristic(
      lightService.getCharacteristic(Characteristic.On),
      light.onIsPowered,
      (on) => light.setVolume(on ? 25 : 0)
    )

    this.registerCharacteristic(
      lightService.getCharacteristic(Characteristic.Brightness),
      light.onBrightness,
      (brightness) => {
        if (audioTrack) light.setAudioTrack(audioTrack)
        light.setVolume(brightness)
      }
    )

    this.registerCharacteristic(
      batteryService.getCharacteristic(Characteristic.BatteryLevel),
      light.onBatteryLevel
    )

    accessoryInfoService
      .getCharacteristic(Characteristic.Manufacturer)
      .updateValue('Hatch Baby')
    accessoryInfoService
      .getCharacteristic(Characteristic.Model)
      .updateValue('Rest+')
    accessoryInfoService
      .getCharacteristic(Characteristic.SerialNumber)
      .updateValue('Unknown')

    this.registerCharacteristic(
      accessoryInfoService.getCharacteristic(Characteristic.FirmwareRevision),
      light.onState.pipe(map((state) => state.deviceInfo.f))
    )
    this.registerCharacteristic(
      accessoryInfoService.getCharacteristic(Characteristic.Name),
      of(light.name)
    )
  }

  getService(serviceType: WithUUID<typeof ServiceClass>) {
    const existingService = this.accessory.getService(serviceType)
    return existingService || this.accessory.addService(serviceType)
  }

  registerCharacteristic(
    characteristic: CharacteristicClass,
    onValue: Observable<any>,
    setValue?: (value: any) => any
  ) {
    const getValue = () => onValue.pipe(take(1)).toPromise()

    if (setValue) {
      characteristic.on(
        CharacteristicEventTypes.SET,
        async (
          value: CharacteristicValue,
          callback: CharacteristicSetCallback
        ) => {
          callback()

          const currentValue = await getValue()
          if (value !== currentValue) {
            setValue(value)
          }
        }
      )
    }

    onValue.pipe(distinctUntilChanged()).subscribe((value) => {
      characteristic.updateValue(value)
    })
  }
}
