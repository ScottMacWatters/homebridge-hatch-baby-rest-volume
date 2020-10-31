# homebridge-hatch-baby-rest-volume

This homebridge plugin allows you to add the Hatch Baby Rest+ night light volume to HomeKit. This repo is built on the amazing work by Dusty Greif and meant to be used along side that plugin for additional functionality

## Installation

`npm i -g homebridge-hatch-baby-rest-volume`

## Configuration For Hatch Baby Rest+ (wifi night light)

The Rest+ night light uses wifi to directly interact with Hatch Baby's api.  This allows you to access all of your Rest+ lights by simply providing your Hatch Baby email/password.

 ```json
{
  "platforms": [
    {
      "platform": "HatchBabyRestVolume",
      "email": "someone@gmail.com",
      "password": "secret password",
      "audioTrack": 3
    }
  ]
}
```

With this configuration in place, you should now be able to control all of your Rest+ lights volumes from HomeKit.  Controls volume as a light.  You can also view the current battery level and firmware version of your lights.

### Audio Configuration

The audioTrack number in the platform configuration refers to this mapping.

Track Name | Track Number
--- | ---
None | 0
Stream | 2
PinkNoise | 3
Dryer | 4
Ocean | 5
Wind | 6
Rain | 7
Bird | 9
Crickets | 10
Brahms | 11
Twinkle | 13
RockABye | 14
