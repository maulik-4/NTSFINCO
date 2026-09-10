import { easing, durations } from './easing';

export const fade = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: durations.normal, ease: easing.standard } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: durations.fast, ease: easing.standard } 
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.medium, ease: easing.expressive } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: durations.fast, ease: easing.swift } 
  }
};

export const slideRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: durations.medium, ease: easing.expressive } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.medium, ease: easing.expressive } 
  }
};

export const pageTransition = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.page, ease: easing.expressive } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: durations.normal, ease: easing.swift } 
  }
};
