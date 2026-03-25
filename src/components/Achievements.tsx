import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Zap } from 'lucide-react'

interface AchievementsProps {
  isDark: boolean
}

export default function Achievements({ isDark }: AchievementsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const achievements = [
    {
      icon: Trophy,
      title: 'HackSmart Hackathon',
      description: 'Battery Smart × AWS Competition',
    },
    {
      icon: Award,
      title: '100+ LeetCode Problems',
      description: 'Solved on leetcode.com/u/Gundasai05/',
      url: 'https://leetcode.com/u/Gundasai05/',
    },
    {
      icon: Zap,
      title: 'HackerRank Python',
      description: 'Python Programming Badge',
    },
  ]

  return (
    <section id="achievements" ref={ref} className={`px-6 md:px-8 py-20 ${
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
            Success Stories
          </span>

          <h2 className={`text-4xl md:text-5xl font-heading italic font-bold tracking-tight leading-[0.9] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Achievements & Recognition
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`glass-card text-center ${isDark ? 'bg-white/5' : 'bg-slate-50'}`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    isDark
                      ? 'bg-accent/20'
                      : 'bg-blue-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isDark ? 'text-accent' : 'text-blue-600'
                    }`} />
                  </div>
                </div>
                <h3 className={`font-heading italic font-bold text-sm mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs ${
                  isDark ? 'text-white/60' : 'text-slate-600'
                }`}>
                  {achievement.description}
                </p>
                {achievement.url && (
                  <motion.a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block mt-4 text-xs font-medium ${
                      isDark ? 'text-accent hover:text-accent/80' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    View Profile →
                  </motion.a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
