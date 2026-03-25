import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Database, Zap, Wrench, Brain } from 'lucide-react'

interface SkillsProps {
  isDark: boolean
}

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-6 h-6" />,
  Frontend: <Palette className="w-6 h-6" />,
  Backend: <Zap className="w-6 h-6" />,
  Databases: <Database className="w-6 h-6" />,
  'Tools & Platforms': <Wrench className="w-6 h-6" />,
  'AI & APIs': <Brain className="w-6 h-6" />,
}

export default function Skills({ isDark }: SkillsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
      color: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Firebase'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'VS Code', 'Vercel'],
      color: 'from-red-600 to-rose-600',
    },
    {
      title: 'AI & APIs',
      skills: ['Groq AI', 'Deepgram', 'OpenAI', 'REST Integration'],
      color: 'from-indigo-600 to-purple-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" ref={ref} className={`px-6 md:px-8 py-20 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Animated BG */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-b from-purple-600/5 via-transparent to-blue-600/5' 
          : 'bg-gradient-to-b from-purple-100/20 via-transparent to-blue-100/20'
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-badge">
            ⚙️ My Arsenal
          </span>

          <h2 className={`heading-lg mt-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`} style={{ fontFamily: 'var(--font-heading)' }}>
            Expertise & Tools
          </h2>

          <p className={`mt-4 max-w-3xl ${
            isDark ? 'text-white/70' : 'text-slate-700'
          }`}>
            A comprehensive toolkit of technologies, frameworks, and platforms that I use to build scalable, efficient, and innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid - Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              whileHover={{ translateY: -8 }}
              className={`glass-card group relative overflow-hidden h-full`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.title}
                  </h3>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {categoryIcons[category.title]}
                  </div>
                </div>

                {/* Count Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${
                  isDark
                    ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300'
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                }`}>
                  {category.skills.length} Skills
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        isDark
                          ? 'bg-white/8 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
                          : 'bg-slate-200/50 text-slate-700 hover:bg-slate-300 border border-slate-300/50'
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 pointer-events-none`} style={{
                borderImage: `linear-gradient(135deg, var(--from-color), var(--to-color)) 1`,
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`glass-card p-8 md:p-10 text-center`}
        >
          <h3 className={`text-lg md:text-xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Quick Stats
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text mb-2`}>
                6
              </div>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                Tech Categories
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text mb-2`}>
                25+
              </div>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                Technologies
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text mb-2`}>
                4+
              </div>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                Years Experience
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 -webkit-background-clip: text -webkit-text-fill-color: transparent bg-clip-text mb-2`}>
                ✓
              </div>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                Always Learning
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
