import { motion } from 'framer-motion'

interface BeadPatternProps {
  grid: string[][]  // 2D array of colors [row][col]
  beadSize?: number // Size of each bead in pixels
  animate?: boolean
  className?: string
}

/**
 * Renders a brick-stitch bead pattern
 * 
 * Key features:
 * - Even rows are offset horizontally (brick pattern)
 * - Beads nestle into gaps of adjacent rows
 * - Shows threading path (serpentine up/down pattern)
 */
export default function BeadPattern({ 
  grid, 
  beadSize = 12,
  animate = true,
  className = ''
}: BeadPatternProps) {
  if (!grid || grid.length === 0) return null

  const rows = grid.length
  const cols = grid[0]?.length || 0
  
  // Calculate offset for brick pattern
  // Even rows (0, 2, 4...) are at base position
  // Odd rows (1, 3, 5...) are offset by half a bead
  const getOffset = (rowIndex: number) => {
    return rowIndex % 2 === 1 ? beadSize * 0.5 : 0
  }

  // Vertical spacing - beads nestle together
  const verticalSpacing = beadSize * 0.85

  // Calculate total dimensions
  const totalWidth = cols * beadSize + beadSize * 0.5 // Extra for offset
  const totalHeight = rows * verticalSpacing + beadSize * 0.15

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: totalWidth,
        height: totalHeight,
      }}
    >
      {grid.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          className="absolute flex"
          style={{
            top: rowIndex * verticalSpacing,
            left: getOffset(rowIndex),
          }}
        >
          {row.map((color, colIndex) => {
            // Calculate animation delay based on threading pattern
            // Threading goes: col 0 all rows down, then col 1 all rows up, etc.
            const isEvenColumn = colIndex % 2 === 0
            const threadPosition = isEvenColumn 
              ? colIndex * rows + rowIndex  // Going down
              : colIndex * rows + (rows - 1 - rowIndex)  // Going up
            
            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                initial={animate ? { scale: 0, opacity: 0 } : false}
                animate={{ scale: 1, opacity: 1 }}
                transition={animate ? {
                  delay: threadPosition * 0.008,
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                } : undefined}
                className="rounded-full flex-shrink-0"
                style={{
                  width: beadSize,
                  height: beadSize,
                  backgroundColor: color,
                  boxShadow: `
                    inset 2px 2px 4px rgba(255,255,255,0.3),
                    inset -1px -1px 3px rgba(0,0,0,0.2),
                    0 1px 2px rgba(0,0,0,0.3)
                  `,
                  marginRight: -1, // Slight overlap for tighter look
                }}
              />
            )
          })}
        </div>
      ))}
      
      {/* Optional: Show string path */}
      <svg 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ width: totalWidth, height: totalHeight }}
      >
        {/* String threading visualization could go here */}
      </svg>
    </div>
  )
}

/**
 * Simplified bead row for gallery thumbnails
 */
export function BeadRow({ 
  colors, 
  beadSize = 8,
  count = 6,
}: { 
  colors: string[]
  beadSize?: number
  count?: number
}) {
  return (
    <div className="flex flex-col" style={{ gap: beadSize * 0.1 }}>
      {colors.slice(0, 4).map((color, rowIndex) => (
        <div 
          key={rowIndex} 
          className="flex"
          style={{ 
            marginLeft: rowIndex % 2 === 1 ? beadSize * 0.4 : 0,
            gap: 1,
          }}
        >
          {Array(count).fill(0).map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: beadSize,
                height: beadSize,
                backgroundColor: color,
                boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * Circular wristband visualization
 */
export function BeadWristband({
  colors,
  beadCount = 24,
  radius = 70,
  beadSize = 14,
  animate = true,
}: {
  colors: string[]
  beadCount?: number
  radius?: number
  beadSize?: number
  animate?: boolean
}) {
  // Create multiple rings for multi-row pattern
  const rowCount = Math.min(colors.length, 5)
  
  return (
    <div className="relative" style={{ width: radius * 2 + beadSize, height: radius * 2 + beadSize }}>
      {Array(rowCount).fill(0).map((_, ringIndex) => {
        const ringRadius = radius - ringIndex * (beadSize * 0.9)
        const beadsInRing = Math.floor(beadCount * (ringRadius / radius))
        const color = colors[ringIndex % colors.length]
        
        return Array(beadsInRing).fill(0).map((_, beadIndex) => {
          const angle = (beadIndex / beadsInRing) * 2 * Math.PI - Math.PI / 2
          // Offset alternate rings
          const angleOffset = ringIndex % 2 === 1 ? Math.PI / beadsInRing : 0
          const x = Math.cos(angle + angleOffset) * ringRadius
          const y = Math.sin(angle + angleOffset) * ringRadius
          
          const delay = animate ? (ringIndex * beadsInRing + beadIndex) * 0.02 : 0
          
          return (
            <motion.div
              key={`${ringIndex}-${beadIndex}`}
              initial={animate ? { scale: 0 } : false}
              animate={{ scale: 1 }}
              transition={{ delay, type: 'spring', stiffness: 300 }}
              className="absolute rounded-full"
              style={{
                width: beadSize,
                height: beadSize,
                backgroundColor: color,
                left: `calc(50% + ${x}px - ${beadSize / 2}px)`,
                top: `calc(50% + ${y}px - ${beadSize / 2}px)`,
                boxShadow: `
                  inset 2px 2px 3px rgba(255,255,255,0.3),
                  0 1px 3px rgba(0,0,0,0.3)
                `,
              }}
            />
          )
        })
      })}
    </div>
  )
}

