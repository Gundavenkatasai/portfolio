import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CertificationsProps {
  isDark: boolean
  onCertificateClick: (cert: { title: string; subtitle: string; url: string }) => void
}

export default function Certifications({ isDark, onCertificateClick }: CertificationsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure',
      subtitle: 'Generative AI Certification',
      url: 'https://drive.google.com/file/d/1hFyZHGYylkpALisv_PX8u6dfpnbJHz9N/view?usp=drive_link',
      icon: '🤖',
      image: '/images/oracel.png',
    },
    {
      title: 'C++ Programming',
      subtitle: 'OOPs and Data Structures',
      url: 'https://drive.google.com/file/d/1TrNR4qsG8oG2g8ZxVnlnAU10Ea4kvMEA/view?usp=drive_link',
      icon: '⚙️',
      image: '/images/c++programming.png',
    },
    {
      title: 'SQL & Database',
      subtitle: 'Advanced SQL + MongoDB',
      url: 'https://drive.google.com/file/d/1x1lwCdTSJBzejOx67H5VBxuZLnrdHh0G/view?usp=sharing',
      icon: '🗄️',
      image: '/images/sql&database.png',
    },
    {
      title: 'Advanced Computer Networks',
      subtitle: 'NPTEL Certification',
      url: 'https://drive.google.com/file/d/1XzaAoScjAWCYydXe9s0mKzRkzB9qWfDL/view?usp=drive_link',
      icon: '🌐',
      image: '/images/advanced computer networls.png',
    },
  ]

  return (
    <section id="certifications" ref={ref} className={`px-6 md:px-8 py-20 ${
      isDark ? 'bg-black/50' : 'bg-slate-50'
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
            Certifications
          </span>

          <h2 className={`text-4xl md:text-5xl font-heading italic font-bold tracking-tight leading-[0.9] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Credentials & Achievements
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => {
            // Extract file ID from Google Drive URL
            const fileId = cert.url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
            const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : cert.url;
            
            return (
            <motion.div
              key={idx}
              onClick={() => onCertificateClick({
                title: cert.title,
                subtitle: cert.subtitle,
                url: embedUrl
              })}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: isDark
                  ? '0 0 20px rgba(0, 217, 255, 0.2)'
                  : '0 0 20px rgba(59, 130, 246, 0.1)',
              }}
              className={`glass-card group cursor-pointer transition-all ${
                isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-blue-50'
              }`}
            >
              <div className="flex flex-col gap-3">
                {/* Certificate Image */}
                {cert.image && (
                  <div className="w-full h-40 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className={`font-heading italic font-bold text-sm leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cert.title}
                    </h3>
                    <p className={`text-xs mt-1 ${
                      isDark ? 'text-white/60' : 'text-slate-600'
                    }`}>
                      {cert.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-accent group-hover:translate-x-1 transition-transform">
                      <span className="text-xs font-medium">View Certificate</span>
                      <span className="w-3 h-3">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
