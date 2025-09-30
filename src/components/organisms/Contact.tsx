import { motion } from 'framer-motion';
import { contactInfo } from '../../data/personal';
import { Button } from '../atoms/Button';

const contactLinks = [
  { label: 'Email', href: `mailto:${contactInfo.email}`, icon: '✉️' },
  { label: 'GitHub', href: contactInfo.github, icon: '🐙' },
  { label: 'LinkedIn', href: contactInfo.linkedin, icon: '💼' },
  { label: 'Resume', href: contactInfo.resume, icon: '📄' }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <motion.p
            className="text-xl text-gray-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's get in touch!
          </motion.p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                className="bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2"
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};