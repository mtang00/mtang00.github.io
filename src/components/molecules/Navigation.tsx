import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#workflow', label: 'AI Workflow' },
  { href: '#education', label: 'Education' },
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-4">
        <motion.h1 
          className="text-lg sm:text-xl font-bold text-gray-900 shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        {/*
          Scrolls rather than wraps or clips. The list was already wider than a
          390px bar with five items, so every phone was losing the end of the
          nav silently; a sixth item only made it visible. Overflow with a
          tighter gap keeps every destination reachable without a hamburger,
          which would be a redesign rather than a fix.
        */}
        <ul className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar">
          {navItems.map((item, index) => (
            <motion.li key={item.href} className="shrink-0">
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className="text-sm sm:text-base text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 whitespace-nowrap"
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