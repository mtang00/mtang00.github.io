import { motion } from 'framer-motion';

interface FeatureTagProps {
  children: string;
  delay?: number;
}

export const FeatureTag = ({ children, delay = 0 }: FeatureTagProps) => (
  <motion.span
    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.span>
);