import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FLAGS } from '../utils/flags'
import { BeadWristband } from './BeadPattern'

const Hero = () => {
  const kenyaFlag = FLAGS['KE']
  
  return (
    <section className="min-h-screen relative pt-28 pb-16 px-6 overflow-hidden flex items-center">
      {/* Subtle background beads */}
      {[
        { color: '#006600', x: '8%', y: '20%' },
        { color: '#FFD700', x: '92%', y: '15%' },
        { color: '#BB1600', x: '88%', y: '78%' },
        { color: '#006600', x: '5%', y: '75%' },
      ].map((bead, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 rounded-full opacity-20 blur-sm"
          style={{ backgroundColor: bead.color, left: bead.x, top: bead.y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
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
              Custom beaded wristbands made for you.
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

            {/* Flags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-1">
                {['🇰🇪', '🇳🇬', '🇬🇭', '🇺🇸', '🇯🇲', '🇧🇷', '🇿🇦'].map((flag, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="w-8 h-8 rounded-full bg-earth-800/80 flex items-center justify-center text-sm border border-earth-700"
                  >
                    {flag}
                  </motion.div>
                ))}
                <div className="w-8 h-8 rounded-full bg-earth-800/80 flex items-center justify-center text-xs text-gray-400 border border-earth-700">
                  +188
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Wristband Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-valisha-500/15 via-transparent to-green-600/15 blur-3xl" />
            
            {/* Wristband on wrist */}
            <div className="relative">
              {/* Wrist silhouette */}
              <div className="w-28 h-44 bg-gradient-to-b from-amber-700/50 to-amber-900/50 rounded-full" />
              
              {/* Accurate bead wristband */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <BeadWristband 
                  colors={kenyaFlag.rows}
                  beadCount={28}
                  radius={75}
                  beadSize={12}
                  animate={true}
                />
              </motion.div>

              {/* Flag label */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-16 top-1/2 -translate-y-1/2"
              >
                <div className="glass px-4 py-2 rounded-full text-sm">
                  🇰🇪 Kenya
                </div>
              </motion.div>
            </div>
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
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
