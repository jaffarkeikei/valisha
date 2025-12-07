import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FLAGS } from '../utils/flags'
import { useEffect, useState, useMemo } from 'react'

// Artistic flowing flags visualization
const FlowingFlags = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Select a diverse set of flags for the visualization
  const selectedFlags = useMemo(() => {
    const flagCodes = ['KE', 'NG', 'GH', 'US', 'JM', 'BR', 'ZA', 'JP', 'FR', 'DE',
                       'IT', 'MX', 'AR', 'IN', 'TZ', 'ET', 'EG', 'MA', 'GB', 'ES',
                       'CA', 'AU', 'KR', 'NL', 'SE', 'CH', 'PT', 'CO', 'PE', 'RW']
    return flagCodes.map(code => ({ code, ...FLAGS[code] })).filter(f => f.rows)
  }, [])

  // Generate flowing path points using bezier-like curves
  const generateFlowPath = (index: number, total: number) => {
    const baseDelay = index * 0.15
    const duration = 25 + Math.random() * 10

    // Create organic flowing motion
    const amplitude = 150 + Math.random() * 100
    const frequency = 0.5 + Math.random() * 0.5
    const phase = (index / total) * Math.PI * 2

    return {
      duration,
      baseDelay,
      amplitude,
      frequency,
      phase,
    }
  }

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main flowing stream of flags */}
      <svg className="absolute inset-0 w-full h-full" style={{ minHeight: '100%' }}>
        <defs>
          {/* Gradient for the connecting line */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(238, 117, 28, 0.1)" />
            <stop offset="50%" stopColor="rgba(238, 117, 28, 0.3)" />
            <stop offset="100%" stopColor="rgba(238, 117, 28, 0.1)" />
          </linearGradient>
        </defs>

        {/* Flowing connection line */}
        <motion.path
          d="M -100,300 Q 200,100 400,350 T 700,250 T 1000,400 T 1300,200 T 1600,350 T 1900,300"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      {/* Flowing flag beads */}
      {selectedFlags.map((flag, index) => {
        const path = generateFlowPath(index, selectedFlags.length)
        const startX = -50 + (index % 5) * 20
        const startY = 150 + (index % 3) * 100

        return (
          <motion.div
            key={flag.code}
            className="absolute"
            initial={{
              x: startX,
              y: startY,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: [
                startX,
                startX + 200 + Math.sin(path.phase) * path.amplitude,
                startX + 450 + Math.cos(path.phase) * path.amplitude * 0.8,
                startX + 700 + Math.sin(path.phase + 1) * path.amplitude,
                startX + 950 + Math.cos(path.phase + 2) * path.amplitude * 0.6,
                startX + 1200 + Math.sin(path.phase) * path.amplitude,
                startX + 1500,
              ],
              y: [
                startY,
                startY + Math.cos(path.phase) * 80,
                startY - Math.sin(path.phase) * 120,
                startY + Math.cos(path.phase + 1) * 100,
                startY - Math.sin(path.phase + 2) * 80,
                startY + Math.cos(path.phase) * 60,
                startY,
              ],
              scale: [0, 1, 1.1, 1, 0.9, 1, 0],
              opacity: [0, 0.9, 1, 1, 1, 0.8, 0],
              rotate: [0, 5, -5, 3, -3, 5, 0],
            }}
            transition={{
              duration: path.duration,
              delay: path.baseDelay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FlagBead colors={flag.rows} size={32 + (index % 3) * 8} />
          </motion.div>
        )
      })}

      {/* Secondary stream - smaller, faster */}
      {selectedFlags.slice(0, 15).map((flag, index) => {
        const path = generateFlowPath(index + 30, 15)
        const startX = -30 + (index % 4) * 15
        const startY = 350 + (index % 4) * 80

        return (
          <motion.div
            key={`secondary-${flag.code}`}
            className="absolute"
            initial={{
              x: startX,
              y: startY,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: [
                startX,
                startX + 300,
                startX + 600,
                startX + 900,
                startX + 1200,
                startX + 1500,
              ],
              y: [
                startY,
                startY - 60 + Math.sin(path.phase) * 40,
                startY + 40 + Math.cos(path.phase) * 50,
                startY - 30 + Math.sin(path.phase) * 30,
                startY + 20,
                startY,
              ],
              scale: [0, 0.8, 1, 0.9, 0.8, 0],
              opacity: [0, 0.6, 0.8, 0.7, 0.5, 0],
            }}
            transition={{
              duration: path.duration * 0.7,
              delay: path.baseDelay + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FlagBead colors={flag.rows} size={20 + (index % 2) * 6} />
          </motion.div>
        )
      })}

      {/* Ambient floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(238, 117, 28, 0.6) 0%, transparent 70%)`,
            left: `${10 + (i * 8)}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Wavy flag parade - connected flags moving right to left with guess feature
const WavyFlagParade = () => {
  // Get all available flag codes and shuffle them
  const allFlagCodes = useMemo(() => {
    return Object.keys(FLAGS).filter(code => FLAGS[code]?.rows?.length > 0)
  }, [])

  // Shuffle function
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const [shuffledFlags, setShuffledFlags] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [countdown, setCountdown] = useState(3)
  const [showName, setShowName] = useState(false)

  // Initialize shuffled flags on mount
  useEffect(() => {
    setShuffledFlags(shuffleArray(allFlagCodes))
  }, [allFlagCodes])

  const currentCode = shuffledFlags[currentIndex] || 'KE'

  const currentFlag = FLAGS[currentCode]

  useEffect(() => {
    if (shuffledFlags.length === 0) return

    // Countdown timer - 3 seconds before showing name
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setShowName(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Move to next flag after 5 seconds total (3s countdown + 2s showing name)
    const flagInterval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1
        // Reshuffle when we've gone through all flags
        if (next >= shuffledFlags.length) {
          setShuffledFlags(shuffleArray(allFlagCodes))
          return 0
        }
        return next
      })
      setCountdown(3)
      setShowName(false)
    }, 5000)

    return () => {
      clearInterval(countdownInterval)
      clearInterval(flagInterval)
    }
  }, [shuffledFlags.length, allFlagCodes])

  const beadSize = 12
  const beadsPerRow = 20
  const waveAmplitude = 8
  const waveFrequency = 0.3

  return (
    <div className="relative w-full" style={{ height: 280 }}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-valisha-500/10 via-transparent to-green-600/10 blur-2xl" />

      {/* Main flag display area */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Guess prompt / Country name */}
        <motion.div
          className="mb-4 h-10 flex items-center justify-center"
          key={`label-${currentIndex}-${showName}`}
        >
          {!showName ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass px-6 py-2 rounded-full"
            >
              <span className="text-gray-400 text-sm">Guess the flag... </span>
              <span className="text-valisha-400 font-bold text-lg">{countdown}</span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass px-6 py-2 rounded-full flex items-center gap-3"
            >
              <span className="text-2xl">{currentFlag.emoji}</span>
              <span className="text-white font-medium text-lg">{currentFlag.name}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Wavy flag - stationary but animated */}
        <motion.div
          key={`${currentCode}-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <WavyBeadFlag
            colors={currentFlag?.rows || []}
            beadSize={beadSize}
            beadsPerRow={beadsPerRow}
            waveAmplitude={waveAmplitude}
            waveFrequency={waveFrequency}
          />
        </motion.div>
      </div>
    </div>
  )
}

// Wavy bead flag component
const WavyBeadFlag = ({
  colors,
  beadSize = 12,
  beadsPerRow = 20,
  waveAmplitude = 8,
  waveFrequency = 0.3,
}: {
  colors: string[]
  beadSize?: number
  beadsPerRow?: number
  waveAmplitude?: number
  waveFrequency?: number
}) => {
  const rows = colors.length
  const verticalSpacing = beadSize * 0.85
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: beadsPerRow * beadSize,
        height: rows * verticalSpacing + waveAmplitude * 2,
        paddingTop: waveAmplitude,
      }}
    >
      {colors.map((color, rowIndex) => (
        <div
          key={rowIndex}
          className="absolute flex"
          style={{
            top: rowIndex * verticalSpacing + waveAmplitude,
            left: rowIndex % 2 === 1 ? beadSize * 0.5 : 0,
          }}
        >
          {Array(beadsPerRow).fill(0).map((_, colIndex) => {
            // Calculate wave offset for each bead
            const waveOffset = Math.sin((colIndex * waveFrequency) + time) * waveAmplitude

            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
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
                  marginRight: -1,
                  transform: `translateY(${waveOffset}px)`,
                }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

// Individual flag bead component - shows mini flag pattern
const FlagBead = ({ colors, size = 32 }: { colors: string[], size?: number }) => {
  const displayRows = colors.slice(0, 5)
  const rowHeight = size / displayRows.length

  return (
    <div
      className="rounded-full overflow-hidden shadow-lg"
      style={{
        width: size,
        height: size,
        boxShadow: `
          0 4px 15px rgba(0,0,0,0.3),
          inset 2px 2px 4px rgba(255,255,255,0.2),
          inset -2px -2px 4px rgba(0,0,0,0.2)
        `,
      }}
    >
      <div className="w-full h-full flex flex-col">
        {displayRows.map((color, i) => (
          <div
            key={i}
            style={{
              backgroundColor: color,
              height: rowHeight,
              width: '100%',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="min-h-screen relative pt-28 pb-16 px-6 overflow-hidden flex items-center">
      {/* Artistic flowing flags background */}
      <FlowingFlags />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth-950 via-transparent to-earth-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-earth-950/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="text-valisha-400 text-sm tracking-[0.3em] uppercase font-light">
                Wearable Art
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95] mb-6"
            >
              <span className="text-white">Wear</span>
              <br />
              <span className="text-gradient italic">Your Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0 mb-8"
            >
              Your flag. Your name. Your colors.
              <br />
              Custom beaded wristbands crafted as art.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#designer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-valisha-500 via-valisha-400 to-kente-gold rounded-full text-lg font-medium text-earth-950 shadow-2xl shadow-valisha-500/30 flex items-center gap-3"
              >
                Create Yours
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Country count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <div className="glass px-5 py-2.5 rounded-full">
                <span className="text-valisha-400 font-semibold">195</span>
                <span className="text-gray-400 ml-2">countries available</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Wavy Moving Flag Parade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex justify-center items-center overflow-hidden"
            style={{ minHeight: 300 }}
          >
            <WavyFlagParade />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 text-sm"
        >
          scroll
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
