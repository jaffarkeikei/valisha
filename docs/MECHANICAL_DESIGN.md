# Mechanical Design - Valisha Bead Printer

This document outlines the mechanical systems and physical construction of the printer I'm building.

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    TOP VIEW - VALISHA PRINTER                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│    ┌──────────────────────────────────────────────┐             │
│    │           BEAD HOPPER CAROUSEL               │             │
│    │  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐       │             │
│    │  │ R │ │ O │ │ Y │ │ G │ │ B │ │ P │       │             │
│    │  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘       │             │
│    │  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐       │             │
│    │  │ W │ │ K │ │ Br│ │ Pk│ │ Gy│ │ Cy│       │             │
│    │  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘       │             │
│    └──────────────────────────────────────────────┘             │
│                           │                                      │
│                           │ Picker Arm                           │
│                           ▼                                      │
│              ┌─────────────────────────┐                        │
│              │    THREADING STATION    │                        │
│              └─────────────────────────┘                        │
│                           │                                      │
│                           ▼                                      │
│    ┌──────────────────────────────────────────────┐             │
│    │              WRIST MEASUREMENT               │             │
│    │                   ╭───╮                      │             │
│    │        Sensor ──► │   │ ◄── Sensor          │             │
│    │                   ╰───╯                      │             │
│    │              (Wrist opening)                 │             │
│    └──────────────────────────────────────────────┘             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Frame Design

### Dimensions
- **Width**: 350mm
- **Depth**: 300mm
- **Height**: 400mm
- **Weight**: ~5kg (assembled)

### Frame Material
- **Primary**: 2020 V-Slot Aluminum Extrusion
- **Why**: Strong, lightweight, easy to modify

### Frame Assembly

```
            ┌─────────── 350mm ───────────┐
            │                             │
    ┌───────┼─────────────────────────────┼───────┐
    │       │                             │       │
    │   ┌───┴───┐                     ┌───┴───┐   │  ▲
    │   │       │                     │       │   │  │
    │   │       │     WORK AREA       │       │   │ 400mm
    │   │       │                     │       │   │  │
    │   └───────┘                     └───────┘   │  ▼
    │                                             │
    └─────────────────────────────────────────────┘

   4x Vertical posts (2020 extrusion, 400mm)
   4x Horizontal base (2020 extrusion)
   4x Horizontal top (2020 extrusion)
```

---

## Bead Hopper System

### 12-Hopper Carousel

```
         12-HOPPER CAROUSEL (TOP VIEW)

              ┌───┐
         ┌───┐│ 1 │┌───┐
         │12 │└───┘│ 2 │
         └───┘     └───┘
     ┌───┐           ┌───┐
     │11 │           │ 3 │
     └───┘     ⊕     └───┘    ⊕ = Center axis
     ┌───┐  (Motor)  ┌───┐
     │10 │           │ 4 │
     └───┘           └───┘
         ┌───┐     ┌───┐
         │ 9 │┌───┐│ 5 │
         └───┘│ 8 │└───┘
              └───┘
         ┌───┐     ┌───┐
         │ 7 │     │ 6 │
         └───┘     └───┘
```

- Stepper motor rotates carousel
- Aligns desired color with pickup position
- Each hopper holds ~500 beads

---

## Bead Pickup Mechanism

### Vacuum Pickup

```
    VACUUM PICKUP ARM

         Vacuum Line
             ║
         ┌───╨───┐
         │Servo 1│  ← Rotation
         └───┬───┘
             │
         ┌───┴───┐
         │Linear │  ← Up/Down
         │ Rail  │
         └───┬───┘
             │
             ▼
         ┌─────┐
         │Nozzle│  ← Picks up bead
         └──○──┘
```

### Pickup Sequence

1. Carousel rotates to align color
2. Arm moves to pickup position
3. Vacuum activates
4. Arm lowers, bead adheres
5. Arm raises with bead
6. Moves to threading station
7. Vacuum releases

---

## Threading Mechanism

### String Path

```
    String Spool → Feed Roller → Thread Needle → Beads → Tension Sensor
```

### Threading Process

1. String pre-tensioned
2. Bead placed over needle
3. Bead slides onto string
4. Next bead positioned
5. Repeat until complete

---

## Wrist Measurement

### Sensor Configuration

```
    WRIST MEASUREMENT (TOP VIEW)

         ┌──────────────────────────┐
         │                          │
         │  [Sensor 1]    [Sensor 2]│
         │       ↘          ↙       │
         │         ╭──────╮         │
         │         │ WRIST│         │
         │         ╰──────╯         │
         │       ↗          ↖       │
         │  [Sensor 3]    [Sensor 4]│
         │                          │
         └──────────────────────────┘

    4x VL53L0X Time-of-Flight sensors
```

### Size Calculation

1. User inserts wrist
2. 4 sensors measure distance
3. Calculate diameter from each pair
4. Average and compute circumference
5. Determine bead count needed

---

## 3D Printed Parts

Parts I'll print:

| Part | Material | Qty | Print Time |
|------|----------|-----|------------|
| Bead Hopper | PETG (Clear) | 12 | 2h each |
| Pickup Nozzle | TPU | 5 | 30min each |
| Carousel Base | PLA | 1 | 8h |
| Motor Mounts | PLA | 4 | 1h each |
| Sensor Brackets | PLA | 6 | 45min each |
| String Guides | PLA | 4 | 30min each |
| Display Mount | PLA | 1 | 2h |

**Total Print Time**: ~40 hours

---

## Safety Features

1. **Emergency Stop** - Red button, cuts all power
2. **Finger Guard** - Covers moving parts
3. **Auto-Stop** - Sensors detect jams
4. **Low-Voltage** - 12V DC, safe to touch

---

*This design will evolve as I build and test the prototype.*
