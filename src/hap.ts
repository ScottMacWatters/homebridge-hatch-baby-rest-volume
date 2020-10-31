import { HAP } from 'homebridge'

export let hap: HAP
export function setHap(hapInstance: HAP) {
  hap = hapInstance
}

export const pluginName = 'homebridge-hatch-baby-rest-volume'
export const platformName = 'HatchBabyRestVolume'
