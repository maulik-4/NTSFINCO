import { motion } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function AnimatedSection({ 
  children, 
  className, 
  variants = staggerContainer,
  once = true,
  amount = 0.2,
  delay = 0,
  as: Component = motion.div,
  ...props 
}) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={twMerge(clsx(className))}
      transition={{ delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
