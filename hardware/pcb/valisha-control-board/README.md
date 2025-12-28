# Valisha Control Board PCB

## Overview

This folder contains the KiCad project files for the Valisha bead weaving machine control board.

**Board Specifications:**
- Size: 100mm x 100mm
- Layers: 2 (Top + Bottom)
- Thickness: 1.6mm
- Copper: 2oz (70μm) for power traces

## Files

- `valisha-control-board.kicad_pro` - KiCad project file
- `valisha-control-board.kicad_sch` - Schematic (component template)
- `valisha-control-board.kicad_pcb` - PCB layout (board outline + mounting holes)

## Status

**IMPORTANT:** These files are **templates** that define the component list and board structure. To complete the design:

1. Open in KiCad 7.0+
2. Update symbol library references to match your KiCad installation
3. Add wiring connections between components
4. Place footprints on PCB
5. Route traces
6. Run DRC
7. Generate Gerbers

## Component List

### Power Section
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J1 | DC Barrel Jack | 5.5x2.1mm | Barrel_Jack_Horizontal |
| D1 | Schottky Diode | SS34 | D_SMA |
| F1 | Blade Fuse | 10A | Fuse_Blade_ATO |
| C1 | Electrolytic Cap | 1000uF/25V | CP_Radial_D10.0mm |
| D2 | LED | Power Indicator | LED_0805 |
| R1 | Resistor | 1K | R_0805 |
| J23 | Terminal Block | 5V Input | TerminalBlock_2P |
| J24 | Terminal Block | 3.3V Input | TerminalBlock_2P |

### ESP32
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| U1 | ESP32 Module | ESP32-WROOM-32D | ESP32-WROOM-32 |
| C2 | Ceramic Cap | 10uF | C_0805 |
| C3 | Ceramic Cap | 100nF | C_0805 |
| R2 | Resistor | 10K (EN pullup) | R_0805 |
| SW1 | Tactile Switch | BOOT | SW_SPST_TL3342 |
| SW2 | Tactile Switch | RESET | SW_SPST_TL3342 |

### TMC2209 Driver Sockets (x4)
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J2 | Pin Socket | TMC2209_1 (Carousel) | PinSocket_2x08 |
| J3 | JST Connector | Motor 1 | JST_XH_B4B |
| C4 | Electrolytic Cap | 100uF/25V | CP_Radial_D6.3mm |
| J4 | Pin Socket | TMC2209_2 (X Axis) | PinSocket_2x08 |
| J5 | JST Connector | Motor 2 | JST_XH_B4B |
| C5 | Electrolytic Cap | 100uF/25V | CP_Radial_D6.3mm |
| J6 | Pin Socket | TMC2209_3 (Z Axis) | PinSocket_2x08 |
| J7 | JST Connector | Motor 3 | JST_XH_B4B |
| C6 | Electrolytic Cap | 100uF/25V | CP_Radial_D6.3mm |
| J8 | Pin Socket | TMC2209_4 (Spare) | PinSocket_2x08 |
| J9 | JST Connector | Motor 4 | JST_XH_B4B |
| C7 | Electrolytic Cap | 100uF/25V | CP_Radial_D6.3mm |

### Servo Connectors
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J10 | Pin Header | Servo 1 (Picker) | PinHeader_1x03 |
| J11 | Pin Header | Servo 2 (Gripper) | PinHeader_1x03 |
| J12 | Pin Header | Servo 3 | PinHeader_1x03 |
| J13 | Pin Header | Servo 4 | PinHeader_1x03 |

### I2C & Sensors
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J14 | JST Connector | I2C (Qwiic) | JST_SH_4P |
| R3 | Resistor | 4.7K (SDA pullup) | R_0805 |
| R4 | Resistor | 4.7K (SCL pullup) | R_0805 |

### Limit Switches
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J15-J20 | JST Connector | Limit Switches (x6) | JST_XH_B2B |
| RN1 | Resistor Array | 10K x4 | R_Array_Convex_4x0603 |
| RN2 | Resistor Array | 10K x2 | R_Array_Convex_2x0603 |

### Peripherals
| Ref | Component | Value | Footprint |
|-----|-----------|-------|-----------|
| J21 | JST Connector | LED Strip | JST_XH_B3B |
| R5 | Resistor | 330R | R_0805 |
| Q1 | MOSFET | IRLZ44N | TO-220-3 |
| R6 | Resistor | 1K (Gate) | R_0805 |
| R7 | Resistor | 10K (Pulldown) | R_0805 |
| D3 | Diode | 1N4007 (Flyback) | D_SMA |
| J22 | Terminal Block | Vacuum Pump | TerminalBlock_2P |

### Mechanical
| Ref | Component | Footprint |
|-----|-----------|-----------|
| H1-H4 | Mounting Holes | MountingHole_3.2mm_M3 |

## ESP32 Pin Assignments

| GPIO | Function | Direction |
|------|----------|-----------|
| GPIO32 | STEP_CAROUSEL | Output |
| GPIO33 | DIR_CAROUSEL | Output |
| GPIO25 | STEP_X | Output |
| GPIO26 | DIR_X | Output |
| GPIO27 | STEP_Z | Output |
| GPIO14 | DIR_Z | Output |
| GPIO12 | STEP_4 | Output |
| GPIO13 | DIR_4 | Output |
| GPIO16 | SERVO1 (Picker) | Output (PWM) |
| GPIO17 | SERVO2 (Gripper) | Output (PWM) |
| GPIO18 | SERVO3 | Output (PWM) |
| GPIO19 | SERVO4 | Output (PWM) |
| GPIO21 | SDA (I2C) | Bidirectional |
| GPIO22 | SCL (I2C) | Bidirectional |
| GPIO15 | LED_DATA (WS2812) | Output |
| GPIO4 | VACUUM_CTRL | Output |
| GPIO34 | LIMIT_X_MIN | Input |
| GPIO35 | LIMIT_X_MAX | Input |
| GPIO36 | LIMIT_Z_MIN | Input |
| GPIO39 | LIMIT_Z_MAX | Input |
| GPIO23 | LIMIT_CAROUSEL | Input |
| GPIO5 | E_STOP | Input |
| EN | ENABLE (pulled high) | - |
| GPIO0 | BOOT button | Input |

## TMC2209 Socket Pinout

```
Pin Socket Layout (2x8, 2.54mm pitch):

Left side (1-8):          Right side (9-16):
1  GND                    9  EN
2  VM (12V)               10 MS1 (→3V3)
3  VM (12V)               11 MS2 (→3V3)
4  2B (Motor)             12 PDN/UART
5  2A (Motor)             13 CLK
6  1A (Motor)             14 STEP
7  1B (Motor)             15 DIR
8  GND                    16 VIO (3V3)
```

## Board Layout

```
┌────────────────────────────────────────────────────────┐
│ H1                    VALISHA v1.0                  H2 │
│                                                        │
│ [DC 12V] [FUSE] [5V IN] [3V3 IN]                      │
│                                                        │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   ┌─────────────┐│
│ │TMC   │ │TMC   │ │TMC   │ │TMC   │   │  SERVO 1-4  ││
│ │2209  │ │2209  │ │2209  │ │2209  │   │  ○ ○ ○ ○    ││
│ │  1   │ │  2   │ │  3   │ │  4   │   │             ││
│ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘   │  I2C        ││
│   [M1]     [M2]     [M3]     [M4]     │  ○○○○       ││
│                                        │             ││
│           ┌─────────────────────┐      │  LIMITS    ││
│           │                     │      │  ○○○○○○    ││
│           │   ESP32-WROOM-32D   │      └─────────────┘│
│           │                     │                      │
│           └─────────────────────┘                      │
│                                                        │
│  [BOOT] [RESET]                     [PWR LED]         │
│                                                        │
│  [LED STRIP]    [VACUUM PUMP]    [E-STOP]             │
│                                                        │
│ H3                 github.com/valisha               H4 │
└────────────────────────────────────────────────────────┘
```

## Next Steps

1. **Download KiCad** from https://www.kicad.org/
2. **Open the project** file in KiCad
3. **Update library references** to match standard KiCad libraries
4. **Complete the schematic** by wiring all connections
5. **Transfer to PCB** and place components
6. **Route traces** (power first, then signals)
7. **Add ground plane** on bottom layer
8. **Run DRC** and fix errors
9. **Generate Gerbers** for PCBWay

## Alternative: EasyEDA

If you prefer EasyEDA:
1. Create a new project at https://easyeda.com
2. Use this README as a reference for components
3. Follow the EasyEDA guide in `docs/.private/12_EASYEDA_PCB_GUIDE.md`
