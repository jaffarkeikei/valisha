import { motion } from 'framer-motion'
import { FLAGS, getRowColor } from '../utils/flags'
import { generateTextGrid } from '../utils/pixelFont'
import BeadPattern from './BeadPattern'

const Gallery = () => {
  // Show a nice mix of popular flags
  const featured = ['KE', 'NG', 'GH', 'JM', 'TT', 'US', 'BR', 'GB', 'SN', 'ZA', 'ET', 'CA']

  // Generate AMINA preview
  const aminaGrid = generateTextGrid('AMINA', '#ee751c', '#000000', 11, 1)

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-3">
            Popular <span className="italic text-gradient">Designs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {featured.map((code, index) => {
            const flag = FLAGS[code]
            if (!flag) return null
            
            return (
              <motion.a
                key={code}
                href="#designer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-3 cursor-pointer group text-center"
              >
                <div className="text-2xl mb-2">{flag.emoji}</div>
                
                {/* Mini bead preview */}
                <div className="flex flex-col items-center gap-px mb-2">
                  {flag.rows.slice(0, 4).map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex gap-px"
                      style={{ marginLeft: rowIndex % 2 === 1 ? 2 : 0 }}
                    >
                      {Array(4).fill(0).map((_, colIndex) => (
                        <div
                          key={colIndex}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: getRowColor(row) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-white text-[10px] font-medium group-hover:text-valisha-400 transition-colors truncate">
                  {flag.name}
                </h3>
              </motion.a>
            )
          })}
        </div>

        {/* Custom name example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <p className="text-gray-400 mb-4 text-center">Or wear your name</p>
          
          <div className="flex justify-center overflow-x-auto py-2">
            <BeadPattern 
              grid={aminaGrid.grid}
              beadSize={6}
              animate={true}
            />
          </div>
          
          <div className="text-center mt-4">
            <a 
              href="#designer" 
              className="inline-block text-sm text-valisha-400 hover:text-valisha-300"
            >
              Create yours →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
