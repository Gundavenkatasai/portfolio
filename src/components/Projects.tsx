import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Award } from 'lucide-react'

interface ProjectsProps {
  isDark: boolean
}

export default function Projects({ isDark }: ProjectsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const projects = [
    {
      title: 'Medicare - AI Healthcare Platform',
      description: 'Full-stack healthcare platform with AI-powered medical assistance and emergency routing.',
      features: ['Image-based medicine detection', 'Real-time hospital tracking', 'JWT authentication'],
      tech: ['React', 'Node.js', 'MongoDB', 'Groq AI', 'Leaflet'],
      live: 'https://medical-emergency-tan.vercel.app/',
      github: 'https://github.com/Gundavenkatasai/Medical_emergency-main-',
      badge: 'Featured Project',
      featured: true,
      image: '/images/medicare (1).png',
    },
    {
      title: 'Smart-Audit AI',
      description: 'AI-driven QA system analyzing real call center conversations with sentiment analysis.',
      features: ['Speech-to-text conversion', 'Sentiment analysis', 'Compliance tracking'],
      tech: ['React', 'Tailwind CSS', 'Deepgram API'],
      live: 'https://hacksmart-zeta.vercel.app/',
      github: 'https://github.com/Gundavenkatasai/hacksmart',
      image: '/images/medicare (3).png',
    },
    {
      title: 'LPU Live - Real-time Chat',
      description: 'Real-time chat system built with WebSockets for instant communication and presence tracking.',
      features: ['WebSocket integration', 'JWT authentication', 'Multi-device sessions'],
      tech: ['React', 'Node.js', 'Socket.IO'],
      live: 'https://lpulivetimepass.vercel.app/',
      github: 'https://github.com/Gundavenkatasai/lpulive',
      image: '/images/lpulive.png',
    },
    {
      title: 'PizzaCraft - Order Management',
      description: 'Full-stack pizza ordering system with real-time tracking and payment integration.',
      features: ['Razorpay integration', 'Admin panel', 'Real-time order tracking'],
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Gundavenkatasai/pizza',
      image: '/images/medicare (1).png',
    },
  ]

  return (
    <section id="projects" ref={ref} className={`px-6 md:px-8 py-24 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-badge">
            💼 Recent Work
          </span>

          <h2 className={`heading-lg mt-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`} style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Projects
          </h2>
          
          <p className={`mt-4 max-w-2xl body-text ${
            isDark ? 'text-white/70' : 'text-slate-600'
          }`}>
            A curated selection of my recent work showcasing full-stack development, AI integration, and real-time systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="project-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ translateY: -8 }}
              className="glass-card group h-full"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-4 right-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    <Award className="w-4 h-4" />
                    {project.badge}
                  </span>
                </div>
              )}

              <div className="h-full flex flex-col justify-between space-y-4">
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Header */}
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`} style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features.length > 0 && (
                  <div className="space-y-2">
                    <p className={`text-xs uppercase font-bold tracking-wider ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((feature, fidx) => (
                        <li key={fidx} className={`text-xs flex items-start gap-2 ${
                          isDark ? 'text-white/60' : 'text-slate-600'
                        }`}>
                          <span className={`mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex-1 text-center"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-outline flex-1 text-center ${project.live ? '' : 'col-span-2'}`}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
