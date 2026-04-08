import { motion } from 'framer-motion';
import { Zap, Clock, Link2, GitMerge } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const quadrants = [
  {
    icon: Zap,
    title: 'Real-time Streaming',
    color: '#F59E0B',
    border: 'rgba(245,158,11,0.3)',
    bg: 'rgba(245,158,11,0.04)',
    tags: ['Event-driven', 'WebSocket', 'Kafka'],
    desc: 'Live data propagation with sub-second latency across all connected systems.',
  },
  {
    icon: Clock,
    title: 'Batch Processing',
    color: '#0369A1',
    border: 'rgba(3,105,161,0.3)',
    bg: 'rgba(3,105,161,0.04)',
    tags: ['Scheduled ETL', 'Nightly sync', 'Bulk loads'],
    desc: 'High-throughput historical reconciliation and large dataset migrations.',
  },
  {
    icon: Link2,
    title: 'API Integration',
    color: '#16A34A',
    border: 'rgba(22,163,74,0.3)',
    bg: 'rgba(22,163,74,0.04)',
    tags: ['REST / GraphQL', 'Webhook callbacks', 'OAuth2'],
    desc: 'Synchronous and asynchronous integration with third-party platforms.',
  },
  {
    icon: GitMerge,
    title: 'Data Normalisation',
    color: '#9333EA',
    border: 'rgba(147,51,234,0.3)',
    bg: 'rgba(147,51,234,0.04)',
    tags: ['Schema mapping', 'Format standardisation', 'Dedup'],
    desc: 'Canonical model enforcement — every record speaks the same language.',
  },
];

export default function Slide07() {
  return (
    <SlideLayout variant="light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '48px 80px 44px',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} style={{ marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '14px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#64748B',
            }}
          >
            Layer 1 · Detail
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#0C4A6E',
            letterSpacing: '-0.02em',
            marginBottom: 36,
            lineHeight: 1.1,
          }}
        >
          Data Source Integration Patterns
        </motion.h2>

        {/* 2×2 grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 16,
            flex: 1,
          }}
        >
          {quadrants.map(({ icon: Icon, title, color, border, bg, tags, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              style={{
                borderRadius: 10,
                border: `1px solid ${border}`,
                background: bg,
                padding: '20px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                borderLeft: `3px solid ${color}`,
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: `${color}12`,
                    border: `1.5px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={color} />
                </div>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0C4A6E',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '18px',
                  color: '#475569',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 9px',
                      borderRadius: 4,
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                      fontSize: '13px',
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: color,
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
