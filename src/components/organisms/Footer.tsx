import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; 2024 {personalInfo.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};