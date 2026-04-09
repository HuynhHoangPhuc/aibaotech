import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from './SlideLayout';
import { fadeUp, fadeIn, staggerContainer } from '../lib/animations';

interface ComparisonSlideLayoutProps {
  title: string;
  subtitle?: string;
  leftTitle: string;
  leftSubtitle?: string;
  rightTitle: string;
  rightSubtitle?: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
}

export function ComparisonSlideLayout({
  title,
  subtitle,
  leftTitle,
  leftSubtitle,
  rightTitle,
  rightSubtitle,
  leftContent,
  rightContent,
  className,
}: ComparisonSlideLayoutProps) {
  return (
    <SlideLayout variant="dark" className={className}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0 }}
          style={{
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#F8FAFC',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 14,
                color: '#64748B',
                margin: '6px 0 0',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Columns */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            padding: '0 48px 36px',
            gap: 0,
            minHeight: 0,
          }}
        >
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            style={{
              flex: 1,
              background: 'rgba(100,116,139,0.06)',
              border: '1px solid rgba(100,116,139,0.2)',
              borderRadius: '12px 0 0 12px',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#94A3B8' }}>{leftTitle}</div>
              {leftSubtitle && (
                <div
                  style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    color: '#64748B',
                    fontFamily: "'IBM Plex Mono', monospace",
                    marginTop: 4,
                  }}
                >
                  {leftSubtitle}
                </div>
              )}
            </div>
            <div style={{ color: '#94A3B8', flex: 1, overflow: 'hidden' }}>{leftContent}</div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            style={{
              width: 1,
              background: 'linear-gradient(180deg, transparent, rgba(100,116,139,0.3), transparent)',
              flexShrink: 0,
            }}
          />

          {/* Right column */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            style={{
              flex: 1,
              background: 'rgba(3,105,161,0.08)',
              border: '1px solid rgba(14,165,233,0.2)',
              borderRadius: '0 12px 12px 0',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#0EA5E9' }}>{rightTitle}</div>
              {rightSubtitle && (
                <div
                  style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    color: '#0369A1',
                    fontFamily: "'IBM Plex Mono', monospace",
                    marginTop: 4,
                  }}
                >
                  {rightSubtitle}
                </div>
              )}
            </div>
            <div style={{ color: '#E0F2FE', flex: 1, overflow: 'hidden' }}>{rightContent}</div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
