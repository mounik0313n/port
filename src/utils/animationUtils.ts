
import { Variants } from "framer-motion";

// Staggered children animation for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Slide up animation for cards and sections
export const slideUpItem: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Fade in animation for text elements
export const fadeInText: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Scale animation for buttons and interactive elements
export const scaleUp: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2, type: "spring", stiffness: 400 } },
  tap: { scale: 0.98 }
};

// Slide in from side animation
export const slideInFromSide = (direction: "left" | "right" = "left"): Variants => {
  return {
    hidden: { 
      x: direction === "left" ? -100 : 100, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
};

// Parallax scroll effect for multiple layers
export const getParallaxVariants = (depth: number): Variants => {
  return {
    initial: { y: 0 },
    scroll: (scrollYProgress: number) => ({
      y: scrollYProgress * depth * -10,
      transition: { type: "spring", stiffness: 50, damping: 30 }
    })
  };
};

// Path drawing animation for SVGs
export const drawPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.3 }
    }
  }
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};
