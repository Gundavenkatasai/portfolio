import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface EducationProps {
  isDark: boolean
}

export default function Education({ isDark }: EducationProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      school: 'Lovely Professional University (LPU)',
      cgpa: 'CGPA: 7.06',
    },
    {
      degree: 'Intermediate (12th Grade)',
      school: 'State Board',
      cgpa: 'Percentage: 94.8%',
    },
    {
      degree: 'SSC (10th Grade)',
      school: 'State Board',
      cgpa: 'GPA: 10.0',
    },
  ]

  return (
    <section id="education" ref={ref} className={`px-6 md:px-8 py-20 ${
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
            Education
          </span>

          <h2 className={`text-4xl md:text-5xl font-heading italic font-bold tracking-tight leading-[0.9] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Academic Background
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              {/* Timeline Marker */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${
                  isDark ? 'bg-accent' : 'bg-blue-600'
                }`} />
                {idx !== education.length - 1 && (
                  <div className={`w-0.5 h-20 ${
                    isDark ? 'bg-white/10' : 'bg-slate-300'
                  }`} />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 8 }}
                className={`glass-card flex-1 ${isDark ? 'bg-white/5' : 'bg-white'}`}
              >
                <h3 className={`font-heading italic font-bold text-sm mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {edu.degree}
                </h3>
                <p className={`text-xs mb-2 ${
                  isDark ? 'text-white/60' : 'text-slate-600'
                }`}>
                  {edu.school}
                </p>
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded ${
                  isDark
                    ? 'bg-accent/20 text-accent'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {edu.cgpa}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
