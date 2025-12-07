# Valisha - Custom Beaded Wristbands

> **Valisha** (Swahili: "to wear") - Custom beaded wristbands, crafted with precision.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Started](https://img.shields.io/badge/Started-December%202025-green)

## What is Valisha?

Valisha is a custom beaded wristband service. Customers choose their design (country flags, names, custom patterns), and I create beautiful beaded wristbands using an automated bead printer that I'm building.

**This is an open-source project** - I'm documenting the entire build process so others can learn from it or build their own.

## Features

- **195+ Country Flags** - Accurate patterns with proper proportions
- **Custom Names** - Your name spelled out in beads (A-Z supported)
- **Custom Designs** - Any pattern you can imagine
- **Perfect Sizing** - Measured to fit your wrist

## Project Structure

```
valisha/
├── README.md              # This file
├── images/                # Sample product photos
├── docs/                  # Technical documentation
│   ├── HARDWARE_REQUIREMENTS.md  # Parts list for the printer
│   ├── SOFTWARE_ARCHITECTURE.md  # System design
│   ├── MECHANICAL_DESIGN.md      # Physical construction
│   ├── ELECTRICAL_DESIGN.md      # Circuits and wiring
│   ├── BEAD_PATTERN_SPEC.md      # How patterns work
│   └── USER_MANUAL.md            # Operating guide
├── firmware/              # ESP32 printer firmware
├── hardware/              # Schematics, PCB, 3D models
│   ├── schematics/
│   ├── pcb/
│   └── 3d-models/
└── webapp/                # Customer ordering website
```

## Current Progress

- [x] Project documentation
- [x] Customer ordering website (React/TypeScript)
- [x] Pattern system (flags + text rendering)
- [ ] Build prototype printer
- [ ] Firmware development
- [ ] Testing & calibration
- [ ] Launch service

## The Printer

I'm building an automated bead wristband printer from scratch. Key components:

| Component | Purpose |
|-----------|---------|
| ESP32 | Main controller |
| Stepper Motors | Bead carousel, positioning |
| ToF Sensors | Wrist measurement |
| 12 Hoppers | Color storage (500 beads each) |

**Estimated build cost:** ~$500

Full parts list: [`docs/HARDWARE_REQUIREMENTS.md`](docs/HARDWARE_REQUIREMENTS.md)

## Web Application

The customer-facing website lets users:
1. Choose a flag or enter their name
2. See a live bead pattern preview
3. Enter wrist size
4. Place an order

**Tech stack:** React, TypeScript, Tailwind CSS, Framer Motion

```bash
cd webapp
npm install
npm run dev
```

## Documentation

| Document | Description |
|----------|-------------|
| [Hardware Requirements](docs/HARDWARE_REQUIREMENTS.md) | Complete parts list |
| [Software Architecture](docs/SOFTWARE_ARCHITECTURE.md) | System design |
| [Mechanical Design](docs/MECHANICAL_DESIGN.md) | Frame & mechanisms |
| [Electrical Design](docs/ELECTRICAL_DESIGN.md) | Circuits & wiring |
| [Bead Pattern Spec](docs/BEAD_PATTERN_SPEC.md) | How patterns are structured |

## Contributing

This is a personal project I'm building in public. Feel free to:
- Open issues with questions or suggestions
- Submit PRs for improvements
- Fork and build your own version

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Valisha</strong> - Wear Your Story
</p>
