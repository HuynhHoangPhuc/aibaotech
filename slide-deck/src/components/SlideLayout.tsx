import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideLayoutProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'gradient';
  className?: string;
}

export function SlideLayout({ children, variant = 'light', className = '' }: SlideLayoutProps) {
  const bgStyles: Record<string, React.CSSProperties> = {
    light: {
      background: `
        radial-gradient(ellipse at 20% 80%, rgba(3, 105, 161, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(14, 165, 233, 0.04) 0%, transparent 50%),
        #F0F9FF
      `,
    },
    dark: {
      background: `
        radial-gradient(ellipse at 30% 70%, rgba(56, 189, 248, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 30%, rgba(3, 105, 161, 0.1) 0%, transparent 50%),
        #0F172A
      `,
    },
    gradient: {
      background: `
        radial-gradient(ellipse at 20% 80%, rgba(56, 189, 248, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(251, 191, 36, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, #0C4A6E 0%, #0369A1 50%, #0EA5E9 100%)
      `,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        width: 1280,
        height: 720,
        fontFamily: "'IBM Plex Sans', sans-serif",
        ...bgStyles[variant],
      }}
    >
      {children}
    </motion.div>
  );
}
