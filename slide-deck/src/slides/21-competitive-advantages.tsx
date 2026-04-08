import { motion } from 'framer-motion';
import { Zap, Target, ShieldCheck } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const advantages = [
  {
    icon: Zap,
    headline: 'Move Faster',
    metric: 'Months → Days',
    detail: 'Product change velocity',
    description: 'Accelerate policy configuration, product launches, and regulatory filings through AI-assisted automation.',
    color: '#0369A1',
  },
  {
    icon: Target,
    headline: 'Price Risk Better',
    metric: 'AI-Driven Precision',
    detail: 'Real-time data pricing',
    description: 'Leverage continuous ML models and live market signals to price policies with actuarial precision at scale.',
    color: '#16A34A',
  },
  {
    icon: ShieldCheck,
    headline: 'Detect Fraud Earlier',
    metric: 'ML-Powered Detection',
    detail: 'Pattern detection',
    description: 'Identify suspicious patterns across the full claims lifecycle before losses are realized.',
    color: '#F59E0B',
  },
];

export default function Slide21() {
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
          background: 'linear-gradient(90deg, transparent, rgba(3,105,161,0.2), transparent)',
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
            opacity: 0.65,
            marginBottom: 8,
          }}
        >
          Strategic Differentiation
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#0C4A6E',
            letterSpacing: '-0.02em',
            margin: '0 0 28px 0',
          }}
        >
          Competitive Advantage
        </motion.h2>

        {/* Three columns */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: 24,
            flex: 1,
          }}
        >
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.headline}
                variants={fadeUp}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '28px 20px 24px',
                  border: `1px solid ${adv.color}20`,
                  borderTop: `3px solid ${adv.color}`,
                  borderRadius: 8,
                  background: `${adv.color}05`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: `${adv.color}12`,
                    border: `1px solid ${adv.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={adv.color} strokeWidth={1.8} />
                </div>

                {/* Metric title */}
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: adv.color,
                    marginBottom: 6,
                    lineHeight: 1.2,
                  }}
                >
                  {adv.headline}
                </span>

                {/* Subtitle */}
                <span
                  style={{
                    fontSize: '14px',
                    color: '#64748B',
                    fontStyle: 'italic',
                    marginBottom: 6,
                  }}
                >
                  {adv.metric}
                </span>

                {/* Detail tag */}
                <span
                  style={{
                    fontSize: '13px',
                    color: adv.color,
                    opacity: 0.7,
                    marginBottom: 16,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {adv.detail}
                </span>

                {/* Divider */}
                <div
                  style={{
                    width: '60%',
                    height: 1,
                    background: `${adv.color}18`,
                    marginBottom: 14,
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom summary */}
        <motion.p
          variants={fadeIn}
          style={{
            marginTop: 24,
            textAlign: 'center',
            fontSize: '15px',
            color: '#64748B',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}
        >
          Transform from manual operations to data-driven, AI-powered enterprise
        </motion.p>
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
        21 / 22
      </motion.div>
    </SlideLayout>
  );
}
