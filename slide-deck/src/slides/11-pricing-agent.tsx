import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const flowSteps = [
  { label: 'Risk Factors', sub: 'Age, Location, History, Asset Value', highlight: false },
  { label: 'Risk Assessment', sub: 'ML model scoring & weighting', highlight: false },
  { label: 'Premium Calc', sub: 'Base rate × risk multiplier', highlight: false },
  { label: 'Validation', sub: 'Regulatory bounds & floor checks', highlight: false },
  { label: 'Output', sub: 'Final quoted price', highlight: true },
];

const capabilities = [
  'Dynamic risk-based pricing',
  'Actuarial model integration',
  'Competitor benchmarking',
  'Real-time market adjustment',
];

export default function Slide11() {
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
          padding: '36px 60px 32px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <motion.div
            variants={fadeIn}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(3,105,161,0.08)',
              border: '1px solid rgba(3,105,161,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Calculator size={20} color="#0369A1" strokeWidth={1.8} />
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#0369A1',
                opacity: 0.6,
                marginBottom: 2,
              }}
            >
              Layer 3 · AI Agent
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: '40px',
                fontWeight: 700,
                color: '#0C4A6E',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              Pricing Agent
            </motion.h2>
          </div>
        </div>

        {/* Section label */}
        <motion.div
          variants={fadeIn}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#64748B',
            marginBottom: 12,
          }}
        >
          Pricing Pipeline
        </motion.div>

        {/* Horizontal flow */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 8,
            marginBottom: 28,
          }}
        >
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '1 1 0' }}
            >
              {/* Step box */}
              <div
                style={{
                  flex: 1,
                  padding: '12px 10px',
                  borderRadius: 8,
                  border: step.highlight
                    ? '1.5px solid rgba(3,105,161,0.4)'
                    : '1px solid rgba(3,105,161,0.12)',
                  background: step.highlight
                    ? 'linear-gradient(135deg, rgba(3,105,161,0.08), rgba(14,165,233,0.06))'
                    : 'rgba(3,105,161,0.03)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: step.highlight ? '#0369A1' : '#0C4A6E',
                    marginBottom: 4,
                    lineHeight: 1.2,
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.3,
                  }}
                >
                  {step.sub}
                </div>
              </div>

              {/* Arrow connector */}
              {i < flowSteps.length - 1 && (
                <ArrowRight
                  size={16}
                  color="rgba(3,105,161,0.3)"
                  strokeWidth={1.5}
                  style={{ flexShrink: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Key Capabilities section */}
        <motion.div variants={fadeUp}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: 14,
            }}
          >
            Key Capabilities
          </div>

          {/* 2x2 grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px 40px',
            }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#0369A1',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '15px',
                    color: '#0C4A6E',
                    fontWeight: 500,
                  }}
                >
                  {cap}
                </span>
              </div>
            ))}
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
          color: 'rgba(12,74,110,0.3)',
          letterSpacing: '0.1em',
        }}
      >
        11 / 22
      </motion.div>
    </SlideLayout>
  );
}
