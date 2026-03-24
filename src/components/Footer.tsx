import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/venkatasai', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/venkatasai/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:venkatasaigunda82@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="w-full bg-secondary/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-[120rem] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 font-paragraph text-sm"
          >
            © 2026 Gunda VenkataSai. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
