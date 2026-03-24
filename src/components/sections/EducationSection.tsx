import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: 'B.Tech CSE',
      institution: 'Lovely Professional University',
      score: 'CGPA: 7.06',
    },
    {
      degree: 'Intermediate',
      institution: 'Board of Intermediate Education',
      score: '94.8%',
    },
    {
      degree: 'SSC',
      institution: 'Board of Secondary Education',
      score: 'GPA: 10.0',
    },
  ];

  return (
    <section id="education" className="w-full py-32 px-8 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="font-paragraph text-foreground/70 mb-3">
                  {edu.institution}
                </p>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-paragraph font-semibold text-sm">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
