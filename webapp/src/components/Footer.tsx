const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {['#228B22', '#FFD700', '#ee751c', '#DC143C'].map((color, i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
            <span className="font-serif italic text-white">Valisha</span>
            <span className="text-gray-600 text-sm ml-2">Wear Your Story</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#designer" className="hover:text-white transition-colors">Order</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:hello@valisha.art" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          <p>© 2025 Valisha</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
