import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const featuredProject = {
    title: 'MEDICARE',
    tag: 'Flagship Project',
    description: [
      'Built a full-stack healthcare platform enabling AI-based medical assistance, emergency routing, and real-time location services.',
      'Integrated image-based medicine detection and live hospital/pharmacy tracking.',
      'Designed secure, scalable backend with JWT authentication and REST APIs.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'Leaflet'],
    liveUrl: '#',
    githubUrl: '#',
  };

  const projects = [
    {
      title: 'SMART-AUDIT AI',
      description: [
        'Developed an AI-powered QA system analyzing 100+ real call center interactions.',
        'Implemented speech-to-text, sentiment analysis, and compliance tracking.',
        'Enabled automated scoring and risk detection.',
      ],
      tech: ['React', 'Tailwind', 'Deepgram API'],
    },
    {
      title: 'LPU LIVE',
      description: [
        'Built a real-time chat system using WebSockets for instant communication.',
        'Implemented JWT-based authentication and multi-device session handling.',
        'Optimized live presence tracking and message delivery.',
      ],
      tech: ['React', 'Node.js', 'Socket.IO'],
    },
    {
      title: 'PIZZACRAFT',
      description: [
        'Developed a full-stack pizza ordering system with real-time order tracking.',
        'Integrated Razorpay for secure payments and admin control panel.',
        'Designed scalable REST APIs and role-based access.',
      ],
      tech: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <section id="projects" className="w-full py-32 px-8 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="bg-card-background backdrop-blur-lg rounded-3xl p-10 md:p-12 border border-primary/30 shadow-2xl mb-16 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary font-paragraph font-semibold text-sm">
              <Star size={16} fill="currentColor" />
              {featuredProject.tag}
            </span>
          </div>

          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {featuredProject.title}
          </h3>

          <div className="space-y-3 mb-8">
            {featuredProject.description.map((line, index) => (
              <p key={index} className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {featuredProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-paragraph font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-6 rounded-lg"
            >
              <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={18} />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-6 rounded-lg"
            >
              <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <div className="space-y-2 mb-6">
                {project.description.map((line, lineIndex) => (
                  <p key={lineIndex} className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-lg text-primary font-paragraph font-medium text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
