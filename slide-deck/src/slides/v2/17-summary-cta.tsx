import { motion } from 'framer-motion';
import { SlideLayout } from '../../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../../lib/animations';

const stats = [
  { metric: '6-Layer', label: 'Unified AI Architecture' },
  { metric: '3 Agents', label: 'Fraud · Pricing · Underwriting' },
  { metric: '1 Platform', label: 'End-to-End AI Operations' },
];

export default function Slide17SummaryCta() {
  return (
    <SlideLayout variant="gradient">
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
          justifyContent: 'center',
          padding: '48px 80px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeIn}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          The Future of Insurance
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em',
          }}
        >
          AI-Native &gt; Cloud-Native
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          BriteCore modernized the infrastructure. AI BaoTech modernizes the intelligence.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.metric}
              variants={fadeUp}
              style={{
                width: '200px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '24px 20px',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                }}
              >
                {stat.metric}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div
          variants={fadeIn}
          style={{
            width: '64px',
            height: '3px',
            background: 'linear-gradient(90deg, #0369A1, #38BDF8)',
            borderRadius: '2px',
            margin: '36px auto 0',
          }}
        />
      </motion.div>
    </SlideLayout>
  );
}
