import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Designer from './components/Designer'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen gradient-bg relative"
    >
      <div className="pattern-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Designer />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App
