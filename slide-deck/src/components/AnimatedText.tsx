import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../lib/animations';

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ children, delay = 0, className = '', style }: AnimatedTextProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
