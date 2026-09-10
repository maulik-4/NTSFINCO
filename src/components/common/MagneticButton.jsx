import { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function MagneticButton({ 
  children, 
  className, 
  onClick, 
  as: Component = 'button',
  to,
  href,
  strength = 15,
  ...props 
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices or if prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = window.matchMedia('(pointer: coarse)').matches;
    if (reducedMotion || touch) {
      setIsDisabled(true);
    }
  }, []);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (isDisabled || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * (strength / 100));
    y.set(distanceY * (strength / 100));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const ComponentTag = to ? motion.a : (href ? motion.a : motion.button);
  
  const clickAction = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <ComponentTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={clickAction}
      style={{ x, y }}
      className={twMerge(clsx("relative overflow-hidden group", className))}
      whileTap={{ scale: 0.97 }}
      {...(to ? { href: to } : {})}
      {...(href ? { href } : {})}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Background fill animation element */}
      <div className="absolute inset-0 bg-blue/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 rounded-[inherit]" />
    </ComponentTag>
  );
}
