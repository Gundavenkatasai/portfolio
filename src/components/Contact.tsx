import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface ContactProps {
  isDark: boolean
}

export default function Contact({ isDark }: ContactProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatasaigunda82@gmail.com',
      link: 'mailto:venkatasaigunda82@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9963039884',
      link: 'tel:+919963039884',
    },
  ]

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" ref={ref} className={`px-6 md:px-8 py-20 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-xs font-medium liquid-glass mb-6 ${
            isDark ? 'text-accent' : 'text-blue-600'
          }`}>
            Get In Touch
          </span>

          <h2 className={`text-4xl md:text-5xl font-heading italic font-bold tracking-tight leading-[0.9] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Connect
          </h2>

          <p className={`mt-6 text-base font-light font-body mx-auto ${
            isDark ? 'text-white/60' : 'text-slate-600'
          }`}>
            Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities, exciting ideas, or anything else tech-related.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon
            const isEmailCopied = copied === contact.label
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`glass-card flex items-center justify-between group ${
                  isDark ? 'bg-white/5' : 'bg-slate-50'
                }`}
              >
                <a
                  href={contact.link}
                  className="flex items-center gap-4 flex-1"
                >
                  <div className={`p-3 rounded-full ${
                    isDark ? 'bg-accent/20' : 'bg-blue-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      isDark ? 'text-accent' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${
                      isDark ? 'text-white/60' : 'text-slate-600'
                    }`}>
                      {contact.label}
                    </p>
                    <p className={`font-medium text-sm ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {contact.value}
                    </p>
                  </div>
                </a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCopy(contact.value, contact.label)}
                  className={`p-2 rounded-full transition-all ${
                    isDark
                      ? 'hover:bg-white/10'
                      : 'hover:bg-slate-200'
                  }`}
                >
                  {isEmailCopied ? (
                    <Check className={`w-4 h-4 ${isDark ? 'text-accent' : 'text-green-600'}`} />
                  ) : (
                    <Copy className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-slate-600'}`} />
                  )}
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 max-w-2xl mx-auto"
        >
          <motion.a
            href="mailto:venkatasaigunda82@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 px-6 py-3 rounded-full font-medium text-center transition-all ${
              isDark
                ? 'bg-accent text-black hover:bg-accent/90'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Send Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gunda-venkatasai/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 px-6 py-3 rounded-full font-medium text-center liquid-glass-strong transition-all ${
              isDark
                ? 'text-white hover:bg-white/10'
                : 'text-slate-900 hover:bg-slate-200'
            }`}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
