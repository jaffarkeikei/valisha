import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex gap-0.5">
              {['#228B22', '#FFD700', '#ee751c', '#DC143C'].map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-xl font-serif italic text-white group-hover:text-valisha-400 transition-colors">
              Valisha
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#designer" className="text-sm text-gray-400 hover:text-white transition-colors">
              Design
            </a>
            <a href="#gallery" className="text-sm text-gray-400 hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
              FAQ
            </a>
            <motion.a
              href="#designer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-valisha-500 rounded-full text-sm font-medium text-white"
            >
              Order
            </motion.a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass rounded-2xl mt-2 p-4"
          >
            <div className="flex flex-col gap-3">
              <a href="#designer" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Design</a>
              <a href="#gallery" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Gallery</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a
                href="#designer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 bg-valisha-500 rounded-full text-sm font-medium text-white text-center"
              >
                Order
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
