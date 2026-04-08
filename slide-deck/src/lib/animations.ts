import type { Variants, Transition } from 'framer-motion';

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const ease = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp: Variants = prefersReducedMotion
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    };

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease } },
};

export const scaleIn: Variants = prefersReducedMotion
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, scale: 0.92 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
    };

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const slideTransition: Transition = {
  duration: 0.4,
  ease,
};

export const drawLine: Variants = prefersReducedMotion
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { pathLength: 0, opacity: 0 },
      show: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.8, ease },
      },
    };
