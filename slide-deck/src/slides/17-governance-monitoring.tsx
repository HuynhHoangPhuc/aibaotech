import { motion } from 'framer-motion';
import { ToggleLeft, Eye, ClipboardCheck, FileText } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const quadrants = [
  {
    icon: ToggleLeft,
    title: 'Decision Control',
    points: ['Human override capability', 'Adjustment of AI decisions'],
    color: '#38BDF8',
  },
  {
    icon: Eye,
    title: 'Task Monitoring',
    points: ['AI activity tracking', 'Performance dashboards'],
    color: '#0EA5E9',
  },
  {
    icon: ClipboardCheck,
    title: 'Data Management',
    points: ['Complete audit trail', 'Data lineage tracking'],
    color: '#16A34A',
  },
  {
    icon: FileText,
    title: 'Compliance Reporting',
    points: ['Automated regulatory alerts', 'Exception summaries'],
    color: '#F59E0B',
  },
];

export default function Slide17() {
  return (
    <SlideLayout variant="dark">
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
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
            color: '#38BDF8',
            opacity: 0.7,
            marginBottom: 8,
          }}
        >
          Layer 6 · Oversight
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Layer 6: Governance &amp; Monitoring
        </motion.h2>

        {/* 2x2 grid */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            width: '100%',
            maxWidth: 1000,
          }}
        >
          {quadrants.map((q) => {
            const Icon = q.icon;
            return (
              <motion.div
                key={q.title}
                variants={fadeUp}
                style={{
                  padding: '16px 20px',
                  border: '1px solid rgba(56,189,248,0.15)',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  height: 140,
                }}
              >
                {/* Icon + title row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: `${q.color}18`,
                      border: `1px solid ${q.color}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={q.color} strokeWidth={1.8} />
                  </div>
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {q.title}
                  </span>
                </div>

                {/* Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {q.points.map((pt) => (
                    <div
                      key={pt}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '14px',
                        color: 'rgba(248,250,252,0.65)',
                        lineHeight: 1.4,
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: q.color,
                          opacity: 0.7,
                          flexShrink: 0,
                        }}
                      />
                      {pt}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
          color: 'rgba(248,250,252,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        17 / 22
      </motion.div>
    </SlideLayout>
  );
}
