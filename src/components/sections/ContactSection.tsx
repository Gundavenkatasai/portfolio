import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatasaigunda82@gmail.com',
      href: 'mailto:venkatasaigunda82@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9963039884',
      href: 'tel:+919963039884',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkatasai/',
      href: 'https://linkedin.com/in/venkatasai/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/venkatasai',
      href: 'https://github.com/venkatasai',
    },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="w-full py-32 px-8 bg-secondary/30">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card-background backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <contact.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.href}
                    target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                    rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    className="font-paragraph text-foreground/70 hover:text-primary transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contact.value, contact.label)}
                    className="mt-3 text-primary hover:text-primary hover:bg-primary/10"
                  >
                    {copiedField === contact.label ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
