import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

interface HeroProps {
  onResumeClick: () => void
  isDark: boolean
}

export default function Hero({ onResumeClick, isDark }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 md:py-32 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10' 
          : 'bg-gradient-to-br from-purple-100/20 via-transparent to-blue-100/20'
      }`} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-10">
            <span className="section-badge">
              👋 Welcome to my world
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className={`heading-xl mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-heading)' }}>
              Hi, I'm <span className="text-gradient-primary">Gunda VenkataSai</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p variants={itemVariants} className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-tight ${
            isDark ? 'text-purple-300' : 'text-purple-600'
          }`}>
            Full Stack Developer × AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className={`text-lg md:text-xl mb-10 max-w-2xl leading-relaxed ${
            isDark ? 'text-white/75' : 'text-slate-700'
          }`}>
            I build AI-powered, real-time systems that solve real-world problems. Specializing in full-stack development with a passion for elegant solutions and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onResumeClick}
              className="btn-primary text-base md:text-lg px-8 py-4"
            >
              View My Resume
            </motion.button>

            <motion.a
              href="https://github.com/Gundavenkatasai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              <Github className="w-4 h-4 inline mr-2" />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gunda-venkatasai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              <Linkedin className="w-4 h-4 inline mr-2" />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Contact Icons */}
          <motion.div variants={itemVariants} className="mt-12 flex gap-6">
            <motion.a
              href="mailto:venkatasaigunda82@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              className="glass-card p-4 text-center hover:border-purple-500"
            >
              <Mail className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <p className="text-xs">Email</p>
            </motion.a>

            <motion.a
              href="https://github.com/Gundavenkatasai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              className="glass-card p-4 text-center hover:border-purple-500"
            >
              <Github className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <p className="text-xs">GitHub</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gunda-venkatasai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              className="glass-card p-4 text-center hover:border-purple-500"
            >
              <Linkedin className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <p className="text-xs">LinkedIn</p>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className={`image-container animate-float`}>
            {/* Placeholder for user image */}
            <div className={`w-full h-full rounded-3xl flex items-center justify-center text-center p-8 ${
              isDark ? 'bg-gradient-to-br from-purple-900/40 to-blue-900/40' : 'bg-gradient-to-br from-purple-100 to-blue-100'
            }`}>
              <div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`text-6xl mb-4 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}
                >
                  🧑‍💻
                </motion.div>
                <p className={`text-sm font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                  Upload Your Image Here
                </p>
                <p className={`text-xs mt-2 ${isDark ? 'text-white/50' : 'text-slate-600'}`}>
                  Place your photo to make this section yours
                </p>
              </div>
            </div>

            {/* Decorative blur effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`absolute -top-8 right-0 w-20 h-20 rounded-2xl glass-card hidden lg:flex items-center justify-center text-3xl`}
          >
            💡
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className={`absolute -bottom-8 left-0 w-20 h-20 rounded-2xl glass-card hidden lg:flex items-center justify-center text-3xl`}
          >
            ⚡
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center p-2 ${
          isDark ? 'border-white/30' : 'border-slate-400'
        }`}>
          <div className={`w-1 h-2 rounded-full ${
            isDark ? 'bg-white/30' : 'bg-slate-400'
          }`} />
        </div>
      </motion.div>
    </section>
  )
}
