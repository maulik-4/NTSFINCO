import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function InteractiveCard({ 
  children, 
  className,
  tiltAmount = 3, // degrees
  glareOpacity = 0.15,
  as: Component = motion.div,
  ...props 
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-tiltAmount, tiltAmount]);
  
  const glareX = useTransform(mouseXSpring, [0, 1], [-50, 150]);
  const glareY = useTransform(mouseYSpring, [0, 1], [-50, 150]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = window.matchMedia('(pointer: coarse)').matches;
    if (reducedMotion || touch) {
      setIsDisabled(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isDisabled || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / rect.width;
    const yPct = mouseY / rect.height;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isDisabled ? 0 : rotateX,
        rotateY: isDisabled ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      className={twMerge(clsx("relative overflow-hidden group transition-all duration-300", className))}
      {...props}
    >
      {/* Glare effect */}
      {!isDisabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 50%)`,
            opacity: isHovered ? 1 : 0,
            mixBlendMode: 'overlay',
          }}
        />
      )}
      
      {/* Cursor follow highlight (radial gradient) */}
      {!isDisabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(var(--blue-rgb), 0.05), transparent 40%)`,
          }}
        />
      )}
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </Component>
  );
}
