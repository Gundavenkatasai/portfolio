import { motion } from 'framer-motion';
import { Trophy, Code2, Award } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: 'HackSmart Hackathon',
      description: 'Battery Smart × AWS',
    },
    {
      icon: Code2,
      title: '100+ LeetCode Problems',
      description: 'Strong problem-solving skills',
    },
    {
      icon: Award,
      title: 'HackerRank Python Badge',
      description: 'Python proficiency certification',
    },
  ];

  return (
    <section id="achievements" className="w-full py-32 px-8 bg-secondary/30">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <achievement.icon className="text-primary" size={36} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="font-paragraph text-foreground/70">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
