import { motion } from 'framer-motion';
import { Cloud, Code } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Cloud,
      title: 'Google Cloud Program',
      description: 'Worked with cloud architecture, deployment, and IAM',
    },
    {
      icon: Code,
      title: 'DSA Training',
      description: 'Strong foundation in algorithms and problem solving',
    },
  ];

  return (
    <section id="experience" className="w-full py-32 px-8 bg-secondary/30">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Experience & <span className="text-primary">Training</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-4 border-primary flex-shrink-0">
                    <exp.icon className="text-primary" size={24} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex-1 bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <exp.icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {exp.title}
                    </h3>
                    <p className="font-paragraph text-lg text-foreground/70">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
