# Lidl Smart Home
Adds support for Lidl Smart Home Devices

## Supported devices:
- Smart Plug, without metering
    _TZ3000_kdi2o9m6 / TS011F (Lidl)
- 3 Socket Power Strip
    _TZ3000_1obwwnmq / TS011F (Lidl)
    _TZ3000_vzopcetz / TS011F (Lidl)
- RGB Bulb E14
    _TZ3000_odygigth / TS0505A (Lidl)
- RGB Bulb E27
    _TZ3000_dbou1ap4 / TS0505A (Lidl)
- RGB LED Strip
    _TZ3000_riwp3k79 / TS0505A (Lidl)
- RGB Spot GU10
    _TZ3000_kdpxju99 / TS0505A (Lidl)
- Tunable Bulb E14
    _TZ3000_oborybow / TS0502A (Lidl)
- Tunable Bulb E27
    _TZ3000_49qchf10 / TS0502A (Lidl)
- Tunable Spot GU10
    _TZ3000_el5kt5im / TS0502A (Lidl)


## X-Mas Lights

### Pairing
Go into Homey and add the device. During pairing hold the F button for 5 seconds and let go. Light should start pulsing 
slowly and pairing should complete, the lights should then stop pulsing.

### Controlling the lights

#### Modes
The X-Mas Lights support 3 modes: `white`, `color` and `effect`. You can switch between these modes in the App. 
You will mainly use this to switch back to `white` mode though:

* The best way to switch to `color` mode is to simply select a color which then automatically switches to `color` mode.
* Manually selecting `color` mode may not switch back to last selected color.
* Switching to `effect` mode always starts a default effect, not the latest selected effect. To start a specific effect,
use a flow (see below).

#### Brightness
Brightness control is only available in `white` and `color` mode, brightness of effects _cannot_ be controlled (this is
a limitation of the hardware, _not_ the App). 

Changing brightness while an effect is active, switches back to `white` mode. 

#### Effects
To start a specific effect, create a flow with `Start effect` action for your device. Select an effect type, 
set the speed and configure one or more colors.

Note: not all effects use all colors, some effect may only use one, two or three colors. At maximum 9 colors appear
to be used by the device, so only 9 options are shown.

##### Attributions
* Support for and information regarding Christmas Lights by Martijn Aben (escabe.org)
* Christmas tree icon by Stanislav Levin from the Noun Project