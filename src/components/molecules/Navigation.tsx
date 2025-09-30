import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export const Navigation = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold text-gray-900"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <motion.li key={item.href}>
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};