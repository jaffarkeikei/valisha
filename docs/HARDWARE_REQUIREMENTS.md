# Hardware Requirements - Valisha Bead Printer

This document outlines all hardware components I need to build the Valisha automated bead wristband printer.

## Bill of Materials (BOM)

### Control System

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Microcontroller | ESP32-WROOM-32D | 1 | $8 | Main controller with WiFi/BT |
| Motor Driver | TMC2209 Stepper Driver | 4 | $20 | Silent stepper control |
| Power Supply | 12V 10A DC | 1 | $15 | Main power |
| Buck Converter | LM2596 DC-DC | 2 | $4 | 5V/3.3V regulation |
| Logic Level Shifter | 4-Channel Bi-directional | 1 | $2 | Signal conversion |

**Subtotal: ~$49**

---

### Motion System

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Stepper Motor | NEMA 17 (1.8°/step) | 3 | $36 | Bead carousel, pick arm |
| Servo Motor | MG996R (180°) | 2 | $16 | Bead picker, gripper |
| Micro Servo | SG90 (9g) | 2 | $6 | Fine positioning |
| Linear Rail | MGN12H 200mm | 2 | $24 | Smooth linear motion |
| Lead Screw | T8 300mm + Nut | 1 | $12 | Vertical movement |
| Timing Belt | GT2 6mm (2m) | 1 | $5 | Belt drive system |
| Pulleys | GT2 20T (5mm bore) | 4 | $8 | Belt tensioning |
| Bearings | 608ZZ (8x22x7mm) | 10 | $6 | Rotational support |
| Shaft Couplers | 5mm to 8mm | 3 | $6 | Motor to lead screw |

**Subtotal: ~$119**

---

### Sensing System

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Distance Sensor | VL53L0X ToF Laser | 2 | $12 | Wrist size measurement |
| Color Sensor | TCS34725 RGB | 1 | $8 | Bead color verification |
| Limit Switches | Micro Switch 3-Pin | 6 | $3 | End-stop detection |
| Optical Sensor | TCRT5000 IR | 4 | $4 | Bead presence detection |
| Load Cell | HX711 + 1kg Cell | 1 | $6 | String tension sensing |
| Encoder | Rotary Encoder (600PPR) | 2 | $10 | Position feedback |

**Subtotal: ~$43**

---

### Bead Handling System

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Bead Hoppers | Custom 3D Print + Acrylic | 12 | $30 | Color storage (12 colors) |
| Vibratory Feeder | Mini Vibration Motor | 12 | $18 | Bead agitation |
| Needle/Threading | Stainless Steel 0.5mm | 10 | $5 | String threading |
| Vacuum Pump | Mini 12V Vacuum | 1 | $12 | Bead pickup system |
| Silicone Tubing | 3mm ID (5m) | 1 | $8 | Vacuum lines |
| Pickup Nozzle | Custom 3D Print | 5 | $5 | Vacuum bead pickup |

**Subtotal: ~$78**

---

### User Interface

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Display | 3.5" TFT LCD Touch (ILI9488) | 1 | $18 | Main user interface |
| Rotary Encoder | KY-040 with button | 1 | $2 | Menu navigation |
| Buzzer | Active Piezo 5V | 1 | $1 | Audio feedback |
| LED Strip | WS2812B (30 LEDs) | 1 | $6 | Status indication |
| Buttons | Tactile Push (12mm) | 4 | $2 | Physical controls |

**Subtotal: ~$29**

---

### Frame & Structure

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Aluminum Extrusion | 2020 V-Slot (1m) | 4 | $24 | Main frame |
| Corner Brackets | 2020 L-Bracket | 16 | $12 | Frame assembly |
| Acrylic Sheets | 3mm Clear (A4 size) | 4 | $16 | Enclosure panels |
| 3D Printed Parts | PLA/PETG (~500g) | - | $15 | Custom brackets, mounts |
| T-Nuts | M5 T-Slot Nut | 50 | $8 | Frame fastening |
| Screws Kit | M3/M4/M5 Assorted | 1 | $12 | General assembly |
| Rubber Feet | Anti-vibration | 4 | $4 | Base stability |

**Subtotal: ~$91**

---

### Electrical & Wiring

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| PCB (Custom) | 2-layer, 100x100mm | 1 | $15 | Main control board |
| Wiring | 22AWG Silicone (5 colors) | 1 set | $10 | Connections |
| Connectors | JST-XH Kit | 1 | $8 | Modular connections |
| Terminal Blocks | 2-pin Screw Terminal | 10 | $4 | Power distribution |
| Fuse Holder | 5x20mm + 5A Fuse | 2 | $3 | Circuit protection |
| Power Switch | Rocker 250V 10A | 1 | $2 | Main power control |
| DC Jack | 5.5x2.1mm Panel Mount | 1 | $2 | Power input |

**Subtotal: ~$44**

---

### Consumables (Starter Kit)

| Component | Model/Specification | Qty | Est. Price (USD) | Purpose |
|-----------|---------------------|-----|------------------|---------|
| Beads Assortment | 6mm Acrylic (12 colors) | 5000 | $25 | Raw material |
| Elastic String | 0.8mm Stretch Cord (50m) | 1 | $8 | Wristband string |
| Clasps | Barrel Clasps (100pcs) | 1 | $6 | Band fastening |
| Crimp Beads | 2mm Silver (200pcs) | 1 | $4 | String securing |

**Subtotal: ~$43**

---

## Total Estimated Cost

| Category | Cost (USD) |
|----------|------------|
| Control System | $49 |
| Motion System | $119 |
| Sensing System | $43 |
| Bead Handling | $78 |
| User Interface | $29 |
| Frame & Structure | $91 |
| Electrical | $44 |
| Consumables | $43 |
| **TOTAL** | **~$496** |

> **Note**: Prices are estimates from AliExpress/Amazon. Bulk ordering or local sourcing may reduce costs.

---

## Where I'm Buying

### Electronics
- **AliExpress** - Budget components, longer shipping
- **Amazon** - Faster shipping, slightly higher prices

### Mechanical
- **Amazon** - 2020 extrusion, linear rails
- **Local hardware store** - Screws, brackets

### 3D Printing
- **My own printer** - Custom parts in PLA/PETG

### Beads & Crafts
- **Alibaba** - Bulk bead orders
- **Local craft stores** - Initial testing

---

## Tools I'm Using

| Tool | Purpose |
|------|---------|
| Soldering Iron (60W) | Electronics assembly |
| 3D Printer | Custom parts |
| Multimeter | Testing/debugging |
| Hex Key Set (1.5-6mm) | Frame assembly |
| Wire Strippers | Wiring |
| Caliper | Precision measurement |

---

## Build Order

1. **Frame Construction** - Build 2020 aluminum frame
2. **Motion System** - Install rails, lead screws, motors
3. **Electronics** - Mount controller, wire motors
4. **Bead System** - Install hoppers, vacuum system
5. **Sensors** - Mount and calibrate sensors
6. **UI Components** - Install display, buttons
7. **Testing** - Calibration and verification

---

*Last Updated: December 2025*
