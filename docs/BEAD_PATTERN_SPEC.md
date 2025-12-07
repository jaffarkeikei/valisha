# Bead Pattern Specification

This document describes how bead patterns work in Valisha.

## Pattern Structure

### Brick Stitch Pattern

Beads are arranged in a **brick stitch** pattern:
- Odd rows (1, 3, 5...) align at base position
- Even rows (2, 4, 6...) offset by half a bead
- Creates honeycomb/brick-like structure

```
Row 1:  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   (aligned)
Row 2:   ○ ○ ○ ○ ○ ○ ○ ○ ○    (offset)
Row 3:  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   (aligned)
Row 4:   ○ ○ ○ ○ ○ ○ ○ ○ ○    (offset)
...
```

### Bead Orientation

- **Odd rows**: Bead holes vertical
- **Even rows**: Bead holes horizontal
- Natural result of serpentine threading

---

## Threading Pattern

The string follows a serpentine (zigzag) path:

```
Start: Row 1, Bead 1
       ↓
       Row 2, Bead 1
       ↓
       ...
       ↓
       Row 11, Bead 1
       ↓
       Row 11, Bead 2
       ↓
       Row 10, Bead 2
       ↓
       ...
       ↓
       Row 1, Bead 2
       ↓
       Row 1, Bead 3
       ...and so on
```

---

## Flag Patterns

### Rules

1. **Minimum 9 rows** - Proper size and recognition
2. **Symmetry required** - Odd totals work best
3. **Proportions matter** - Thick bands = 3+ rows, thin stripes = 1 row

### Kenya Flag Example (11 rows)

```
Row 1:  ●●●●●●●●●●●●●●●●●●●●  BLACK
Row 2:   ●●●●●●●●●●●●●●●●●●●   BLACK
Row 3:  ●●●●●●●●●●●●●●●●●●●●  BLACK
Row 4:   ○○○○○○○○○○○○○○○○○○○   WHITE
Row 5:  ●●●●●●●●●●●●●●●●●●●●  RED
Row 6:   ●●●●●●●●●●●●●●●●●●●   RED
Row 7:  ●●●●●●●●●●●●●●●●●●●●  RED
Row 8:   ○○○○○○○○○○○○○○○○○○○   WHITE
Row 9:  ●●●●●●●●●●●●●●●●●●●●  GREEN
Row 10:  ●●●●●●●●●●●●●●●●●●●   GREEN
Row 11: ●●●●●●●●●●●●●●●●●●●●  GREEN
```

**Breakdown:**
- 3 rows black (thick band)
- 1 row white (thin stripe)
- 3 rows red (thick band)
- 1 row white (thin stripe)
- 3 rows green (thick band)

### Common Patterns

| Pattern | Rows | Structure |
|---------|------|-----------|
| 3 equal stripes | 9 | 3-3-3 |
| 3 stripes + dividers | 11 | 3-1-3-1-3 |
| 2:1 ratio | 9 | 4-1-4 or 5-2-2 |
| Cross/center | 9 | 4-1-4 |

---

## Name Patterns

### Pixel Font

Each letter is 5 columns × 7 rows:

```
  A         M         I         N         A
░█░█░     █░░░█     █████     █░░░█     ░█░█░
███░█     ██░██     ░░█░░     ██░░█     ███░█
█░░░█     █░█░█     ░░█░░     █░█░█     █░░░█
█████     █░░░█     ░░█░░     █░░██     █████
█░░░█     █░░░█     ░░█░░     █░░░█     █░░░█
█░░░█     █░░░█     ░░█░░     █░░░█     █░░░█
█░░░█     █░░░█     █████     █░░░█     █░░░█
```

### 11-Row Layout

- 2 rows top padding
- 7 rows for letters
- 2 rows bottom padding
- = 11 total rows (matches flags)

### Color Options

**Text colors:** Orange, Red, Gold, Green, Blue, White, Black, Pink, Purple

**Background colors:** Black, Navy, Dark Green, Dark Red, White, Blue

---

## Sizing

### Beads per Row

Based on wrist circumference and bead size:

| Wrist (cm) | Beads (6mm) |
|------------|-------------|
| 14 | ~18 |
| 15 | ~19 |
| 16 | ~20 |
| 17 | ~22 |
| 18 | ~23 |
| 19 | ~24 |
| 20 | ~26 |

**Formula:** `beads = ceil(wrist_mm / bead_diameter_mm)`

---

## Data Format

### Flag Definition (TypeScript)

```typescript
interface FlagDefinition {
  name: string      // "Kenya"
  emoji: string     // Country flag emoji
  rows: string[]    // Hex colors, top to bottom
}

const kenya: FlagDefinition = {
  name: 'Kenya',
  emoji: 'KE',
  rows: [
    '#000000', '#000000', '#000000',  // 3 black
    '#FFFFFF',                         // 1 white
    '#BB1600', '#BB1600', '#BB1600',  // 3 red
    '#FFFFFF',                         // 1 white
    '#006600', '#006600', '#006600',  // 3 green
  ]
}
```

### Bead Grid

```typescript
// 2D array: grid[row][column] = color
type BeadGrid = string[][]
```

---

## Currently Supported

- **50+ flags** - East Africa, West Africa, Caribbean, World Cup contenders
- **A-Z letters** - Full alphabet for names
- **Numbers 0-1** - Basic digits
- **Heart symbol**

---

*This specification guides how patterns are rendered in both the web preview and the physical printer.*
