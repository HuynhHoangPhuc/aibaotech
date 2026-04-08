import { motion } from 'framer-motion';
import { Receipt, TrendingUp, FileBarChart } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const columns = [
  {
    icon: Receipt,
    title: 'Billing Agent',
    color: '#0369A1',
    items: [
      'Invoice generation',
      'Payment tracking',
      'Premium collection',
      'Reconciliation',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Actuarial Agent',
    color: '#0EA5E9',
    items: [
      'Reserve calculation',
      'Loss ratio analysis',
      'Portfolio risk modeling',
      'Trend forecasting',
    ],
  },
  {
    icon: FileBarChart,
    title: 'Reporting Agent',
    color: '#16A34A',
    items: [
      'Regulatory reports (auto-generated)',
      'Management dashboards',
      'Compliance documentation',
      'Audit-ready exports',
    ],
  },
];

export default function Slide13() {
  return (
    <SlideLayout variant="light">
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 120,
          right: 120,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(3,105,161,0.18), transparent)',
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
            color: '#0369A1',
            opacity: 0.6,
            marginBottom: 8,
          }}
        >
          Layer 3 · AI Agents
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#0C4A6E',
            letterSpacing: '-0.02em',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Billing, Actuarial &amp; Reporting
        </motion.h2>

        {/* Three-column layout */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: 24,
            width: '100%',
            alignItems: 'flex-start',
          }}
        >
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                variants={fadeUp}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: `3px solid ${col.color}`,
                  paddingLeft: 18,
                  maxHeight: 400,
                }}
              >
                {/* Column header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: `${col.color}12`,
                      border: `1px solid ${col.color}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={col.color} strokeWidth={1.8} />
                  </div>
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0C4A6E',
                    }}
                  >
                    {col.title}
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {col.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: col.color,
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      <span
                        style={{
                          fontSize: '15px',
                          color: '#0C4A6E',
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
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
          color: 'rgba(12,74,110,0.3)',
          letterSpacing: '0.1em',
        }}
      >
        13 / 22
      </motion.div>
    </SlideLayout>
  );
}
