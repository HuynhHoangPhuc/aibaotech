import { motion } from 'framer-motion';
import { LayoutDashboard, Search, BarChart3 } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const blocks = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    color: '#0369A1',
    bullets: [
      'Real-time operational metrics',
      'KPIs & system health',
      'Live agent activity feed',
    ],
  },
  {
    icon: Search,
    title: 'Decision Explorer',
    color: '#0EA5E9',
    bullets: [
      'Trace AI reasoning paths',
      'Explain specific decisions',
      'Full audit trail access',
    ],
  },
  {
    icon: BarChart3,
    title: 'Fraud & Pricing Tools',
    color: '#16A34A',
    bullets: [
      'Risk monitoring & alerts',
      'Premium analysis & benchmarks',
      'Fraud case management',
    ],
  },
];

export default function Slide15() {
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
          alignItems: 'flex-start',
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
            alignSelf: 'center',
          }}
        >
          System Architecture · Layer 4
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
            alignSelf: 'center',
          }}
        >
          Layer 4: Control Panel UI
        </motion.h2>

        {/* Three feature blocks stacked vertically */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
          }}
        >
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  borderLeft: `3px solid ${block.color}`,
                  paddingLeft: 20,
                  gap: 16,
                  minHeight: 0,
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: `${block.color}10`,
                    border: `1px solid ${block.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Icon size={20} color={block.color} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0C4A6E',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    {block.title}
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {block.bullets.map((bullet) => (
                      <div
                        key={bullet}
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
                            background: block.color,
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
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={fadeIn}
          style={{
            marginTop: 24,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            color: '#64748B',
            letterSpacing: '0.05em',
            alignSelf: 'center',
          }}
        >
          Web-based interface · Role-based access control · Real-time data sync
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
        15 / 22
      </motion.div>
    </SlideLayout>
  );
}
