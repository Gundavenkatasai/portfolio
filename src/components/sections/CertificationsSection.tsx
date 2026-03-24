import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    'Oracle Cloud Generative AI',
    'C++ OOP + DSA',
    'SQL + MongoDB',
    'NPTEL Advanced Networks',
  ];

  return (
    <section id="certifications" className="w-full py-32 px-8 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {cert}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
