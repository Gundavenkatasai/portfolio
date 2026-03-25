import { motion } from 'framer-motion'

interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className={`border-t ${
      isDark ? 'border-white/10 bg-black/50' : 'border-slate-200 bg-slate-50'
    } px-6 md:px-8 py-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`text-xs font-light ${
              isDark ? 'text-white/40' : 'text-slate-500'
            }`}
          >
            © {currentYear} venkatasai. All rights reserved.
          </motion.p>

          {/* Links */}
          <div className="flex gap-6">
            {links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ color: isDark ? '#00D9FF' : '#3B82F6' }}
                className={`text-xs font-light transition-colors ${
                  isDark ? 'text-white/40 hover:text-accent' : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Made with */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xs font-light ${
              isDark ? 'text-white/40' : 'text-slate-500'
            }`}
          >
            Made with <span className="text-accent">♥</span> &amp; React
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
