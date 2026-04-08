import { motion } from 'framer-motion';
import { Database, Brain, Shield, ClipboardCheck } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, scaleIn, staggerContainer, staggerFast } from '../lib/animations';

const takeaways = [
  { icon: Database, label: 'Unified Data', color: '#38BDF8' },
  { icon: Brain, label: 'AI Agents', color: '#0EA5E9' },
  { icon: Shield, label: 'Human Governance', color: '#16A34A' },
  { icon: ClipboardCheck, label: 'Compliance', color: '#F59E0B' },
];

export default function Slide22() {
  return (
    <SlideLayout variant="dark">
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Top-left geometric accent */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
      >
        <line x1="0" y1="100" x2="160" y2="100" stroke="rgba(56,189,248,0.1)" strokeWidth="1" />
        <line x1="0" y1="140" x2="100" y2="140" stroke="rgba(56,189,248,0.07)" strokeWidth="1" />
        <line x1="60" y1="0" x2="60" y2="180" stroke="rgba(56,189,248,0.08)" strokeWidth="1" />
        <circle cx="60" cy="100" r="3.5" fill="rgba(56,189,248,0.25)" />
      </svg>

      {/* Bottom-right geometric accent */}
      <svg
        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}
        width="320"
        height="240"
        viewBox="0 0 320 240"
        fill="none"
      >
        <line x1="320" y1="100" x2="140" y2="100" stroke="rgba(251,191,36,0.08)" strokeWidth="1" />
        <line x1="260" y1="240" x2="260" y2="60" stroke="rgba(251,191,36,0.07)" strokeWidth="1" />
        <circle cx="260" cy="100" r="3" fill="rgba(251,191,36,0.2)" />
      </svg>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 80px 36px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeIn}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#38BDF8',
            opacity: 0.7,
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ width: 24, height: 1, background: 'rgba(56,189,248,0.4)' }} />
          Closing Vision
          <div style={{ width: 24, height: 1, background: 'rgba(56,189,248,0.4)' }} />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            margin: '0 0 20px 0',
            textAlign: 'center',
          }}
        >
          The Future of Insurance
        </motion.h2>

        {/* Quote */}
        <motion.div
          variants={scaleIn}
          style={{
            maxWidth: 760,
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '60px',
              color: 'rgba(56,189,248,0.18)',
              lineHeight: 0.7,
              textAlign: 'left',
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontSize: '22px',
              fontWeight: 300,
              color: 'rgba(248,250,252,0.88)',
              lineHeight: 1.55,
              letterSpacing: '0.01em',
              margin: '0 0 6px',
              fontStyle: 'italic',
            }}
          >
            The future insurance company will not be system-driven. It will be{' '}
            <span
              style={{
                fontWeight: 700,
                fontStyle: 'normal',
                background: 'linear-gradient(90deg, #38BDF8, #0EA5E9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI-native.
            </span>
          </p>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '60px',
              color: 'rgba(56,189,248,0.18)',
              lineHeight: 0.5,
              textAlign: 'right',
            }}
          >
            &rdquo;
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          style={{
            width: 64,
            height: 1,
            background: 'rgba(56,189,248,0.2)',
            marginBottom: 36,
          }}
        />

        {/* Takeaways row — 4 items with icon circles */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {takeaways.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {/* Icon circle with subtle border */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `1px solid ${item.color}35`,
                    background: `${item.color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} color={item.color} strokeWidth={1.8} />
                </div>
                <span
                  style={{
                    fontSize: '14px',
                    color: 'rgba(248,250,252,0.6)',
                    fontWeight: 500,
                    textAlign: 'center',
                    maxWidth: 90,
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Footer brand */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '16px',
            fontWeight: 600,
            color: '#FBBF24',
            letterSpacing: '0.08em',
          }}
        >
          AI BaoTech
        </span>
        {/* Gold accent line */}
        <div
          style={{
            width: 48,
            height: 2,
            borderRadius: 1,
            background: 'linear-gradient(90deg, transparent, #FBBF24, transparent)',
          }}
        />
      </motion.div>

      {/* Slide number */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          bottom: 28,
          right: 52,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '13px',
          color: 'rgba(248,250,252,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        22 / 22
      </motion.div>
    </SlideLayout>
  );
}
