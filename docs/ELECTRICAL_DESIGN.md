# Electrical Design - Valisha Bead Printer

This document details the electrical systems, circuits, and wiring for the printer I'm building.

---

## Power System

### Power Architecture

```
    AC 110-240V → 12V 10A DC Power Supply
                          │
                          │ 12V DC
                          ▼
                   MAIN POWER BUS
                    │         │
          ┌─────────┴───┐ ┌───┴─────────┐
          ▼             ▼ ▼             ▼
    ┌──────────┐  ┌────────────┐  ┌────────────┐
    │ Stepper  │  │ LM2596 5V  │  │LM2596 3.3V │
    │ Drivers  │  │ Buck Conv  │  │ Buck Conv  │
    │  (12V)   │  └─────┬──────┘  └─────┬──────┘
    └──────────┘        │               │
                        ▼               ▼
                  ┌──────────┐    ┌──────────┐
                  │  Servos  │    │  ESP32   │
                  │   (5V)   │    │  (3.3V)  │
                  └──────────┘    └──────────┘
```

### Power Budget

| Component | Voltage | Current (Max) | Power |
|-----------|---------|---------------|-------|
| ESP32 | 3.3V | 500mA | 1.65W |
| Stepper x4 | 12V | 1.5A each | 19.2W |
| Servo x4 | 5V | 1A each | 4W |
| Display | 5V | 250mA | 1.25W |
| Sensors | 3.3V | 100mA | 0.33W |
| LEDs | 5V | 900mA | 4.5W |
| Vacuum Pump | 12V | 1A | 12W |
| **TOTAL** | - | ~8A | ~46W |

**Power Supply**: 12V 10A (120W) - plenty of headroom

---

## Main Controller

### ESP32 Pin Assignments

| Function | GPIO | Notes |
|----------|------|-------|
| **Steppers** | | |
| Carousel Step | 32 | |
| Carousel Dir | 33 | |
| Linear X Step | 25 | |
| Linear X Dir | 26 | |
| Linear Z Step | 27 | |
| Linear Z Dir | 14 | |
| **Servos** | | |
| Picker | 16 | |
| Gripper | 17 | |
| **I2C** | | |
| SDA | 21 | Sensors |
| SCL | 22 | Sensors |
| **Display SPI** | | |
| MOSI | 23 | |
| SCK | 18 | |
| CS | 5 | |
| DC | 17 | |
| **Other** | | |
| LED Strip | 15 | WS2812B |
| E-Stop | 36 | Input |

---

## Motor Drivers

### TMC2209 Configuration

```
    TMC2209 WIRING

    VM ─────────── 12V
    GND ────────── GND
    EN ──────────── ESP32 (Enable)
    STEP ─────────── ESP32 (Step pin)
    DIR ──────────── ESP32 (Dir pin)
    MS1/MS2 ──────── 3.3V (1/16 microstepping)
    1A/1B/2A/2B ──── Motor coils
```

| Setting | Value |
|---------|-------|
| Microstepping | 1/16 |
| Run Current | 800mA |
| Hold Current | 400mA |
| Stealthchop | On (silent) |

---

## Sensors

### I2C Bus (400kHz)

| Device | Address | Purpose |
|--------|---------|---------|
| VL53L0X #1 | 0x29 | Wrist sensor 1 |
| VL53L0X #2 | 0x2A | Wrist sensor 2 |
| VL53L0X #3 | 0x2B | Wrist sensor 3 |
| VL53L0X #4 | 0x2C | Wrist sensor 4 |
| TCS34725 | 0x29 | Color sensor |

### Limit Switches

```
    LIMIT SWITCH (Normally Closed)

         3.3V
          │
          ├──[10kΩ]──┬── GPIO (pulled high)
          │          │
          │       ┌──┴──┐
          │       │ N.C.│ ← Switch
          │       └──┬──┘
          │          │
         GND ────────┘

    Triggered = GPIO LOW
    Normal = GPIO HIGH
```

---

## Display

### ILI9488 3.5" TFT (SPI)

| Pin | ESP32 |
|-----|-------|
| VCC | 3.3V |
| GND | GND |
| CS | GPIO5 |
| DC | GPIO17 |
| MOSI | GPIO23 |
| SCK | GPIO18 |
| LED | 3.3V |

---

## LED Strip

### WS2812B (30 LEDs)

```
    5V ──────────────┬────────────────┐
                     │                │
    GPIO15 ──[330Ω]──┴─○─┬──○─┬──○─┬──┘
                         │    │    │
    GND ─────────────────┴────┴────┘

    Add 1000µF capacitor for stability
```

---

## Block Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                         MAIN CONTROL BOARD                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────┐     ┌──────────────────────────────────────────┐         │
│  │  12V DC  │────►│              POWER SECTION               │         │
│  │  Input   │     │  Fuse → 5V Buck → 3.3V Buck              │         │
│  └──────────┘     └──────────────────────────────────────────┘         │
│                              │         │                                │
│                             12V       5V/3.3V                           │
│                              │         │                                │
│  ┌───────────────────────────┴─────────┴───────────────────────────┐   │
│  │                       ESP32 MODULE                              │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│         │         │         │         │         │         │            │
│         ▼         ▼         ▼         ▼         ▼         ▼            │
│   ┌─────────┐┌─────────┐┌─────────┐┌─────────┐┌─────────┐┌─────────┐   │
│   │TMC2209 ││TMC2209 ││TMC2209 ││TMC2209 ││ SERVOS ││ SENSORS │   │
│   │  x4    ││        ││        ││        ││  x4    ││  I2C   │   │
│   └────┬────┘└────────┘└────────┘└────────┘└────────┘└─────────┘   │
│        │                                                            │
│        ▼                                                            │
│   NEMA17 Motors                                                     │
│                                                                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Safety

1. **10A main fuse**
2. **Polyfuses on motor circuits**
3. **TMC2209 thermal shutdown**
4. **Emergency stop button**

---

*Wiring details will be updated as I build.*
