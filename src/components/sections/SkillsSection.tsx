import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'Tailwind'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="w-full py-32 px-8 bg-secondary/30">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-foreground font-paragraph font-medium text-sm hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
