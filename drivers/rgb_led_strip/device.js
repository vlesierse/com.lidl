'use strict';

//const TuyaZigBeeLightDevice = require('../../lib/TuyaZigBeeLightDevice');

//class rgb_led_strip extends TuyaZigBeeLightDevice {}

//module.exports = rgb_led_strip;

const { ZigBeeLightDevice } = require("homey-zigbeedriver");

class RGBLedStrip extends ZigBeeLightDevice { }

module.exports = RGBLedStrip;