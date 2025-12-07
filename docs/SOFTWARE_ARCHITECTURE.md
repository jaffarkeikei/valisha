# Software Architecture - Valisha Bead Printer

This document describes the software system architecture for the Valisha project.

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           VALISHA SYSTEM                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐                              ┌──────────────┐         │
│  │   Web App    │                              │   Printer    │         │
│  │  (React/TS)  │ ◄─────── WiFi/USB ─────────► │  (ESP32)     │         │
│  └──────────────┘                              └──────────────┘         │
│         │                                             │                  │
│         ▼                                             ▼                  │
│  ┌──────────────┐                              ┌──────────────┐         │
│  │   Pattern    │                              │   Motion     │         │
│  │   Designer   │                              │   Control    │         │
│  └──────────────┘                              └──────────────┘         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Web Application

**Purpose:** Customer ordering interface + pattern designer

**Tech Stack:**
- Framework: React 18 with TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion
- Build Tool: Vite

### Key Components

```
webapp/src/
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── Designer.tsx       # Pattern creation tool
│   ├── BeadPattern.tsx    # Bead grid renderer
│   ├── Gallery.tsx        # Sample designs
│   ├── FAQ.tsx            # Common questions
│   ├── Navbar.tsx         # Navigation
│   └── Footer.tsx         # Footer
├── utils/
│   ├── flags.ts           # Flag definitions (50+ countries)
│   └── pixelFont.ts       # Letter rendering for names
└── App.tsx                # Main app
```

### Pattern System

**Flags:**
- Each flag defined with exact row colors
- Minimum 9 rows for proper size
- Supports emblems and symbols

**Names:**
- 5x7 pixel font for letters
- 11 rows total (7 letter + 4 padding)
- Customizable text and background colors

---

## Firmware (ESP32)

**Purpose:** Control the physical printer

**Tech Stack:**
- Framework: PlatformIO with Arduino
- Language: C++
- RTOS: FreeRTOS

### Module Structure

```
firmware/src/
├── main.cpp               # Entry point, state machine
├── config.h               # Pin definitions, constants
├── motion/                # Motor control
├── sensors/               # Sensor reading
├── bead/                  # Bead handling
├── communication/         # WiFi, Serial
├── ui/                    # Display, LEDs
└── print/                 # Print execution
```

### State Machine

```
         ┌─────────────┐
         │    IDLE     │
         └──────┬──────┘
                │ START
                ▼
         ┌─────────────┐
         │  MEASURING  │ ← Wrist size
         └──────┬──────┘
                │ SIZE_OK
                ▼
         ┌─────────────┐
         │  PREPARING  │ ← Load beads
         └──────┬──────┘
                │ READY
                ▼
         ┌─────────────┐
         │  PRINTING   │ ← Main work
         └──────┬──────┘
                │ COMPLETE
                ▼
         ┌─────────────┐
         │  FINISHED   │
         └─────────────┘
```

---

## Communication Protocol

### Web App → Printer (WiFi/USB)

```json
{
  "cmd": "PRINT",
  "data": {
    "wristSize": 170,
    "pattern": [
      ["#000000", "#000000", ...],
      ["#FFFFFF", ...],
      ...
    ]
  }
}
```

### Printer → Web App (Status Updates)

```json
{
  "event": "PROGRESS",
  "data": {
    "progress": 45,
    "currentBead": 54,
    "totalBeads": 120
  }
}
```

---

## Data Structures

### Flag Definition

```typescript
interface FlagDefinition {
  name: string      // "Kenya"
  emoji: string     // Country flag emoji
  rows: string[]    // Array of hex colors, top to bottom
}
```

### Bead Grid

```typescript
// 2D array: grid[row][column] = color hex
type BeadGrid = string[][]
```

### Print Job

```typescript
interface PrintJob {
  patternType: 'flag' | 'name' | 'custom'
  wristSize: number      // mm
  beadSize: number       // mm
  grid: BeadGrid
}
```

---

## Development Setup

### Web App

```bash
cd webapp
npm install
npm run dev
# Opens at http://localhost:5173
```

### Firmware

```bash
cd firmware
# Open in PlatformIO
# Build and upload to ESP32
```

---

## Future Enhancements

1. **Order Management** - Track and queue customer orders
2. **Pattern Marketplace** - Share/download community designs
3. **Mobile App** - Native iOS/Android apps
4. **Analytics** - Track popular patterns, bead usage

---

*Last Updated: December 2025*
