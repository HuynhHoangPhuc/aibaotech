import { motion } from 'framer-motion';
import { ShieldCheck, Calculator, FileCheck, Receipt, TrendingUp, BarChart3 } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const agents = [
  {
    icon: ShieldCheck,
    name: 'Fraud Agent',
    description: 'Detect insurance fraud patterns',
    color: '#38BDF8',
  },
  {
    icon: Calculator,
    name: 'Pricing Agent',
    description: 'Risk-based premium calculation',
    color: '#0EA5E9',
  },
  {
    icon: FileCheck,
    name: 'UW Agent',
    description: 'Automated underwriting decisions',
    color: '#38BDF8',
  },
  {
    icon: Receipt,
    name: 'Billing Agent',
    description: 'Invoice processing & payments',
    color: '#0EA5E9',
  },
  {
    icon: TrendingUp,
    name: 'Actuarial Agent',
    description: 'Actuarial modeling & analysis',
    color: '#38BDF8',
  },
  {
    icon: BarChart3,
    name: 'Reporting Agent',
    description: 'Automated regulatory reports',
    color: '#0EA5E9',
  },
];

export default function Slide09() {
  return (
    <SlideLayout variant="dark">
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 120,
          right: 120,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)',
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
          justifyContent: 'flex-start',
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
          System Architecture · Layer 3
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
          Layer 3: AI Agents
        </motion.h2>

        {/* Agent cards grid — 3x2 */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
            width: '100%',
            maxWidth: 1000,
          }}
        >
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: '1px solid rgba(56,189,248,0.15)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={agent.color} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#F8FAFC',
                      marginBottom: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {agent.name}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'rgba(248,250,252,0.5)',
                      lineHeight: 1.4,
                    }}
                  >
                    {agent.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
