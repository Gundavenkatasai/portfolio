import { motion } from 'framer-motion';
import { Code2, Zap, Database } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '100+', label: 'LeetCode Problems' },
    { icon: Zap, value: '4+', label: 'Production Projects' },
    { icon: Database, value: 'Multiple', label: 'Tech Stacks' },
  ];

  return (
    <section id="about" className="w-full py-32 px-8 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-8">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Full-stack developer focused on solving real-world problems with scalable, production-ready solutions.
            </p>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Experience in AI-powered systems, real-time applications, and scalable backend design.
            </p>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              Strong foundation in data structures, algorithms, and system thinking.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="font-paragraph text-foreground/70 text-lg">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
