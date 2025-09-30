import { motion } from 'framer-motion';

interface TechTagProps {
  children: string;
  delay?: number;
}

export const TechTag = ({ children, delay = 0 }: TechTagProps) => (
  <motion.span
    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
  >
    {children}
  </motion.span>
);