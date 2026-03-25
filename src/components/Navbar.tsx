import { motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  onResumeClick: () => void
  isDark: boolean
}

export default function Navbar({ onResumeClick, isDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`text-2xl font-heading italic font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          VS
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: isDark ? '#00D9FF' : '#0066FF' }}
              className={`text-sm font-medium transition-colors ${
                isDark ? 'text-white/80 hover:text-accent' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onResumeClick}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              isDark
                ? 'bg-white text-black hover:bg-accent hover:text-black'
                : 'bg-slate-900 text-white hover:bg-blue-600'
            }`}
          >
            Resume
          </motion.button>
          <motion.a
            href="https://github.com/Gundavenkatasai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full liquid-glass ${
              isDark ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gunda-venkatasai/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full liquid-glass ${
              isDark ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full liquid-glass"
        >
          {isOpen ? (
            <X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`absolute top-full left-0 right-0 mt-4 mx-4 rounded-2xl liquid-glass p-6 md:hidden space-y-4 ${
            isDark ? 'bg-black/80' : 'bg-white/80'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block text-sm font-medium ${
                isDark ? 'text-white hover:text-accent' : 'text-slate-700 hover:text-blue-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              onResumeClick()
              setIsOpen(false)
            }}
            className={`w-full px-5 py-2 rounded-full font-medium text-sm ${
              isDark
                ? 'bg-white text-black hover:bg-accent'
                : 'bg-slate-900 text-white hover:bg-blue-600'
            }`}
          >
            Resume
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
