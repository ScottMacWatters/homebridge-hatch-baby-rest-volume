import { HatchBabyRestPlus } from '../hatch-baby-rest-plus'
import { hap } from '../hap'
import { distinctUntilChanged, map, take } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import {
  Characteristic as CharacteristicClass,
  CharacteristicEventTypes,
  CharacteristicSetCallback,
  CharacteristicValue,
  Logging,
  PlatformAccessory,
  Service as ServiceClass,
  WithUUID,
} from 'homebridge'
import { AudioTrack } from '../hatch-baby-types'

export class HatchBabyRestPlusVolumeAccessory {
  constructor(
    private light: HatchBabyRestPlus,
    private accessory: PlatformAccessory,
    public log: Logging,
    private audioTrack?: AudioTrack
  ) {
    const { Service, Characteristic } = hap,
      lightService = this.getService(Service.Lightbulb),
      batteryService = this.getService(Service.BatteryService),
      accessoryInfoService = this.getService(Service.AccessoryInformation)

    this.registerCharacteristic(
      lightService.getCharacteristic(Characteristic.On),
      light.onAudioOn,
      (on) => {
        log.info('ON: ' + on)
        light.setAudioTrack(
          on ? audioTrack ?? AudioTrack.PinkNoise : AudioTrack.None
        )
      }
    )

    this.registerCharacteristic(
      lightService.getCharacteristic(Characteristic.Brightness),
      light.onVolume,
      (volume) => {
        log.info('VOLUME: ' + volume)
        light.setVolume(volume)
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
