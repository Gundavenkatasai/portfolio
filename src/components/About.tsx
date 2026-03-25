import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutProps {
  isDark: boolean
}

export default function About({ isDark }: AboutProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { number: '100+', label: 'LeetCode Problems' },
    { number: '4+', label: 'Production Projects' },
    { number: '5+', label: 'Technology Stacks' },
  ]

  return (
    <section id="about" ref={ref} className={`px-6 md:px-8 lg:px-12 py-24 md:py-32 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-badge">
            ✨ About Me
          </span>

          <h2 className={`heading-lg mt-6 mb-8 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`} style={{ fontFamily: 'var(--font-heading)' }}>
            Crafting Digital Experiences
          </h2>

          <div className={`space-y-6 text-lg md:text-xl font-light ${
            isDark ? 'text-white/75' : 'text-slate-700'
          }`}>
            <p>
              Full-stack developer focused on building <span className={isDark ? 'text-accent' : 'text-blue-600'}>scalable systems</span> and intuitive user experiences.
            </p>
            <p>
              Experienced in AI integration, real-time applications, and backend architecture. I combine strong problem-solving skills with practical engineering expertise.
            </p>
            <p>
              Currently exploring advanced AI integration patterns and optimizing for performance at scale.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ translateY: -8 }}
              className={`glass-card text-center group`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text`}>
                {stat.number}
              </div>
              <p className={`text-base md:text-lg font-semibold ${
                isDark ? 'text-white/70' : 'text-slate-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
