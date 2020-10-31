# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.1-alpha.6](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.5...v0.1.1-alpha.6) (2020-10-31)

### [0.1.1-alpha.5](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.4...v0.1.1-alpha.5) (2020-10-31)

### [0.1.1-alpha.4](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.3...v0.1.1-alpha.4) (2020-10-31)

### [0.1.1-alpha.3](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.2...v0.1.1-alpha.3) (2020-10-31)

### [0.1.1-alpha.2](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.1...v0.1.1-alpha.2) (2020-10-31)

### [0.1.1-alpha.1](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v0.1.1-alpha.0...v0.1.1-alpha.1) (2020-10-31)

### [0.1.1-alpha.0](https://github.com/ScottMacWatters/homebridge-hatch-baby-rest-volume/compare/v2.0.5...v0.1.1-alpha.0) (2020-10-31)

### [2.0.5](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v2.0.4...v2.0.5) (2020-09-13)

### [2.0.4](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v2.0.3...v2.0.4) (2020-06-05)

### [2.0.3](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v2.0.2...v2.0.3) (2020-06-02)


### Bug Fixes

* create new mqtt client when auth expires ([65d0f33](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/65d0f33ae62ef434daa9160451ede8b53102e226)), closes [#8](https://github.com/dgreif/homebridge-hatch-baby-rest/issues/8)

### [2.0.2](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v2.0.1...v2.0.2) (2020-05-12)

### [2.0.1](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v2.0.0...v2.0.1) (2020-04-08)


### Bug Fixes

* prevent noble from loading if not used ([71deda8](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/71deda858423185f24d04e8434811214cb16105e)), closes [#12](https://github.com/dgreif/homebridge-hatch-baby-rest/issues/12)

## [2.0.0](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.3.1...v2.0.0) (2020-04-05)


### ⚠ BREAKING CHANGES

* Node 10+ now required

### Features

* add `showAsSwitch` option to hbr accessory ([0f83328](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/0f833281ae06f50f031343dcae135bc4c53fd720)), closes [#11](https://github.com/dgreif/homebridge-hatch-baby-rest/issues/11)


* update minimum node version to 10 ([ea1837e](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/ea1837e031f2324bc82b6e92fc47aafe70441351))

### [1.3.1](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.3.0...v1.3.1) (2020-02-29)


### Bug Fixes

* allow rest+ lights to be removed with `removeAll` ([ed0b01e](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/ed0b01ebf94e41fb49f816a14a237f0474fc1d55))

## [1.3.0](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.2.0...v1.3.0) (2020-02-27)


### Features

* color picker for hbr+ ([4855330](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/48553302174b77c8a6152d69f7eca07ee60156a8))

## [1.2.0](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.8...v1.2.0) (2020-01-06)


### Features

* hatch baby rest+ support ([bc808b3](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/bc808b3f3943e6644b0c401944ae017a7f891ff0)), closes [#1](https://github.com/dgreif/homebridge-hatch-baby-rest/issues/1)

### [1.1.8](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.7...v1.1.8) (2019-12-18)


### Bug Fixes

* **osx:** assume correct device if address is unknown ([1c892c5](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/1c892c5bcce13332dc215ed855a210ff23505b14)), closes [#4](https://github.com/dgreif/homebridge-hatch-baby-rest/issues/4)

### [1.1.7](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.6...v1.1.7) (2019-10-05)


### Bug Fixes

* remove initial connect call ([412f028](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/412f028))

### [1.1.6](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.5...v1.1.6) (2019-10-05)


### Bug Fixes

* revert reconnect logic ([27c3c10](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/27c3c10))
* throw error when service or characteristic is not found ([b50148d](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/b50148d))

### [1.1.5](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.4...v1.1.5) (2019-09-29)


### Bug Fixes

* add back reconnect logic ([a8a2e23](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/a8a2e23))

### [1.1.4](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.3...v1.1.4) (2019-09-26)


### Bug Fixes

* only connect while interacting ([7d06388](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/7d06388))

### [1.1.3](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.2...v1.1.3) (2019-09-26)


### Bug Fixes

* strip mac address and service ids for cross platform compatibility ([7eefc38](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/7eefc38))

### [1.1.2](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.1...v1.1.2) (2019-09-26)

### [1.1.1](https://github.com/dgreif/homebridge-hatch-baby-rest/compare/v1.1.0...v1.1.1) (2019-09-25)

## 1.1.0 (2019-09-25)


### Features

* hatch baby rest homebridge plugin ([956c56f](https://github.com/dgreif/homebridge-hatch-baby-rest/commit/956c56f))
