import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  target
}: ButtonProps) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  const MotionComponent = motion.create(href ? 'a' : 'button');
  
  return (
    <MotionComponent
      className={baseClasses}
      href={href}
      onClick={onClick}
      target={target}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionComponent>
  );
};