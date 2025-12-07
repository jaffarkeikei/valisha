import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { ChevronRight, Search } from 'lucide-react'
import { FLAGS, FLAG_LIST, generateFlagGrid } from '../utils/flags'
import { generateTextGrid, TEXT_COLORS, BG_COLORS } from '../utils/pixelFont'
import BeadPattern from './BeadPattern'

const Designer = () => {
  const [designType, setDesignType] = useState<'flag' | 'name' | 'custom'>('flag')
  const [selectedFlag, setSelectedFlag] = useState('KE')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Name customization
  const [customName, setCustomName] = useState('')
  const [textColor, setTextColor] = useState('#ee751c')
  const [bgColor, setBgColor] = useState('#000000')
  
  const [wristSize, setWristSize] = useState('')

  // Filter flags by search
  const filteredFlags = useMemo(() => {
    if (!searchQuery) return FLAG_LIST
    const query = searchQuery.toLowerCase()
    return FLAG_LIST.filter(f => 
      f.name.toLowerCase().includes(query) || 
      f.code.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Generate the bead grid
  const beadGrid = useMemo(() => {
    if (designType === 'flag') {
      return generateFlagGrid(selectedFlag, 20)
    } else if (designType === 'name' && customName) {
      const result = generateTextGrid(customName, textColor, bgColor, 11, 1)
      return { grid: result.grid, rows: result.rows }
    }
    return { grid: [], rows: 0 }
  }, [designType, selectedFlag, customName, textColor, bgColor])

  const selectedFlagData = FLAGS[selectedFlag]

  return (
    <section id="designer" className="py-20 px-6 relative">
      <div className="kente-border w-full absolute top-0" />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-3">
            Create <span className="italic text-gradient">Yours</span>
          </h2>
          <p className="text-gray-400">Choose your design and we'll make it for you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          {/* Design Type */}
          <div className="flex gap-2 mb-6 justify-center flex-wrap">
            {[
              { id: 'flag', label: '🏳️ Flag' },
              { id: 'name', label: '✨ Name' },
              { id: 'custom', label: '🎨 Custom' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setDesignType(type.id as 'flag' | 'name' | 'custom')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  designType === type.id
                    ? 'bg-valisha-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Selection */}
            <div>
              {designType === 'flag' && (
                <div>
                  {/* Search */}
                  <div className="relative mb-4">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search countries..."
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-valisha-500"
                    />
                  </div>

                  {/* Flags grid */}
                  <div className="grid grid-cols-5 gap-2 max-h-56 overflow-y-auto pr-1">
                    {filteredFlags.map((flag) => (
                      <button
                        key={flag.code}
                        onClick={() => setSelectedFlag(flag.code)}
                        className={`p-2 rounded-lg text-lg transition-all flex flex-col items-center gap-0.5 ${
                          selectedFlag === flag.code
                            ? 'bg-valisha-500/20 ring-2 ring-valisha-500'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        title={flag.name}
                      >
                        <span>{flag.emoji}</span>
                        <span className="text-[8px] text-gray-500 truncate w-full text-center leading-tight">{flag.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Selected flag info */}
                  {selectedFlagData && (
                    <div className="mt-4 p-3 bg-white/5 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{selectedFlagData.emoji}</span>
                        <span className="text-white font-medium">{selectedFlagData.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{selectedFlagData.rows.length} rows</span>
                    </div>
                  )}
                </div>
              )}

              {designType === 'name' && (
                <div>
                  {/* Name input */}
                  <label className="text-sm text-gray-500 mb-2 block">Your name or text</label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value.toUpperCase().slice(0, 8))}
                    placeholder="AMINA"
                    maxLength={8}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xl uppercase tracking-widest placeholder:text-gray-600 focus:outline-none focus:border-valisha-500"
                  />
                  <p className="text-xs text-gray-600 mt-1.5">Up to 8 letters • 11 rows</p>
                  
                  {/* Text Color */}
                  <div className="mt-5">
                    <label className="text-sm text-gray-500 mb-2 block">Text Color</label>
                    <div className="flex gap-2 flex-wrap">
                      {TEXT_COLORS.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setTextColor(color.value)}
                          title={color.name}
                          className={`w-8 h-8 rounded-full transition-all hover:scale-110 ${
                            textColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-earth-950' : ''
                          }`}
                          style={{ 
                            backgroundColor: color.value,
                            border: color.value === '#FFFFFF' ? '1px solid #333' : 'none'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Background Color */}
                  <div className="mt-5">
                    <label className="text-sm text-gray-500 mb-2 block">Background Color</label>
                    <div className="flex gap-2 flex-wrap">
                      {BG_COLORS.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setBgColor(color.value)}
                          title={color.name}
                          className={`w-8 h-8 rounded-full transition-all hover:scale-110 ${
                            bgColor === color.value ? 'ring-2 ring-valisha-500 ring-offset-2 ring-offset-earth-950' : ''
                          }`}
                          style={{ 
                            backgroundColor: color.value,
                            border: color.value === '#FFFFFF' || color.value === '#000000' ? '1px solid #444' : 'none'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {designType === 'custom' && (
                <div>
                  <label className="text-sm text-gray-500 mb-3 block">Describe what you want</label>
                  <textarea
                    placeholder="Rainbow colors, heart pattern, team colors..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-valisha-500 resize-none"
                  />
                  <p className="text-xs text-gray-600 mt-2">We'll work with you on the design</p>
                </div>
              )}

              {/* Wrist Size */}
              <div className="mt-6">
                <label className="text-sm text-gray-500 mb-2 block">Wrist size (cm)</label>
                <input
                  type="text"
                  value={wristSize}
                  onChange={(e) => setWristSize(e.target.value)}
                  placeholder="17"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-valisha-500"
                />
                <p className="text-xs text-gray-600 mt-2">Wrap a string around your wrist and measure</p>
              </div>
            </div>

            {/* Right - Preview */}
            <div className="bg-earth-950/60 rounded-2xl p-6 flex flex-col">
              {/* Bead Preview */}
              <div className="flex-1 flex items-center justify-center min-h-[200px] overflow-auto py-4">
                {designType === 'flag' && beadGrid.grid.length > 0 && (
                  <BeadPattern 
                    grid={beadGrid.grid} 
                    beadSize={9}
                    animate={true}
                  />
                )}
                
                {designType === 'name' && (
                  customName ? (
                    <BeadPattern 
                      grid={beadGrid.grid}
                      beadSize={8}
                      animate={true}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-500 text-sm mb-2">Type a name above</div>
                      <div className="text-gray-600 text-xs">Example: AMINA, LOVE, MAMA</div>
                    </div>
                  )
                )}
                
                {designType === 'custom' && (
                  <div className="text-center text-gray-500">
                    <div className="text-3xl mb-2">🎨</div>
                    <p className="text-sm">We'll design this together</p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Order Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 py-4 bg-gradient-to-r from-valisha-500 via-valisha-400 to-kente-gold rounded-xl text-lg font-medium text-earth-950 flex items-center justify-center gap-2"
          >
            Order Soon
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Designer
