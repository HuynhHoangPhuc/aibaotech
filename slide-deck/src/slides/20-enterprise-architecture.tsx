import { motion } from 'framer-motion';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const layers = [
  {
    label: 'Business Vision',
    sub: 'Strategy · Growth · Market leadership',
    width: 400,
    bg: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.4)',
    accentColor: '#FBBF24',
    textColor: '#FBBF24',
    subColor: 'rgba(251,191,36,0.65)',
    legendTag: 'Strategic',
  },
  {
    label: 'Agentic AI Governance',
    sub: 'Human-in-the-loop · Compliance · Oversight',
    width: 560,
    bg: 'rgba(3,105,161,0.15)',
    border: 'rgba(3,105,161,0.45)',
    accentColor: '#0369A1',
    textColor: '#F8FAFC',
    subColor: 'rgba(248,250,252,0.55)',
    legendTag: 'AI/Data',
  },
  {
    label: 'Canonical Insurance Data Platform',
    sub: 'Unified schema · ETL · Single source of truth',
    width: 720,
    bg: 'rgba(14,165,233,0.12)',
    border: 'rgba(14,165,233,0.4)',
    accentColor: '#0EA5E9',
    textColor: '#F8FAFC',
    subColor: 'rgba(248,250,252,0.55)',
    legendTag: null,
  },
  {
    label: 'Cloud Infrastructure',
    sub: 'Scalable compute · Security · Reliability',
    width: 880,
    bg: 'rgba(100,116,139,0.15)',
    border: 'rgba(100,116,139,0.35)',
    accentColor: '#64748B',
    textColor: '#F8FAFC',
    subColor: 'rgba(248,250,252,0.5)',
    legendTag: 'Infrastructure',
  },
  {
    label: 'Operational Systems',
    sub: 'Policy management · Claims · Billing · Legacy integrations',
    width: 1040,
    bg: 'rgba(15,23,42,0.55)',
    border: 'rgba(148,163,184,0.18)',
    accentColor: '#94A3B8',
    textColor: '#F8FAFC',
    subColor: 'rgba(248,250,252,0.45)',
    legendTag: null,
  },
];

export default function Slide20() {
  return (
    <SlideLayout variant="gradient">
      {/* Subtle dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(248,250,252,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

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
          padding: '36px 60px 32px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeIn}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(248,250,252,0.5)',
            marginBottom: 8,
          }}
        >
          Technology Stack
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            margin: '0 0 32px 0',
            textAlign: 'center',
          }}
        >
          Enterprise Architecture
        </motion.h2>

        {/* Pyramid layers */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            width: '100%',
          }}
        >
          {layers.map((layer) => (
            <motion.div
              key={layer.label}
              variants={fadeUp}
              style={{
                width: layer.width,
                height: 52,
                background: layer.bg,
                border: `1px solid ${layer.border}`,
                borderLeft: `4px solid ${layer.accentColor}`,
                borderRadius: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                backdropFilter: 'blur(4px)',
              }}
            >
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: layer.textColor,
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                }}
              >
                {layer.label}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: layer.subColor,
                  textAlign: 'center',
                }}
              >
                {layer.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={fadeIn}
          style={{
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 20, height: 2, background: 'rgba(251,191,36,0.6)', borderRadius: 1 }} />
            <span style={{ fontSize: '13px', color: 'rgba(248,250,252,0.5)' }}>Strategic</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 20, height: 2, background: 'rgba(14,165,233,0.6)', borderRadius: 1 }} />
            <span style={{ fontSize: '13px', color: 'rgba(248,250,252,0.5)' }}>AI / Data</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 20, height: 2, background: 'rgba(100,116,139,0.6)', borderRadius: 1 }} />
            <span style={{ fontSize: '13px', color: 'rgba(248,250,252,0.5)' }}>Infrastructure</span>
          </div>
        </motion.div>
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
          color: 'rgba(248,250,252,0.25)',
          letterSpacing: '0.1em',
        }}
      >
        20 / 22
      </motion.div>
    </SlideLayout>
  );
}
