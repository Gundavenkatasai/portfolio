import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import CertificateModal from './components/CertificateModal'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [showCertificateModal, setShowCertificateModal] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string
    subtitle: string
    url: string
  } | null>(null)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-black' : 'bg-white'}`}>
      {/* Theme Toggle */}
      <motion.button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full liquid-glass hover:bg-white/10 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700" />
        )}
      </motion.button>

      {/* Navbar */}
      <Navbar onResumeClick={() => setShowResumeModal(true)} isDark={isDark} />

      {/* Resume Modal */}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={showCertificateModal} 
        onClose={() => {
          setShowCertificateModal(false)
          setSelectedCertificate(null)
        }} 
        certificate={selectedCertificate}
      />

      {/* Main Content */}
      <main className="overflow-hidden w-full">
        {/* Full Width Content */}
        <Hero onResumeClick={() => setShowResumeModal(true)} isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Certifications 
          isDark={isDark}
          onCertificateClick={(cert: { title: string; subtitle: string; url: string }) => {
            setSelectedCertificate(cert)
            setShowCertificateModal(true)
          }}
        />
        <Achievements isDark={isDark} />
        <Education isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
      </main>
    </div>
  )
}

export default App
