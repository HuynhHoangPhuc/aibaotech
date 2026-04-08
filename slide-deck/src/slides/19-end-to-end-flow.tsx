import { motion } from 'framer-motion';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const leftSteps = [
  { n: 1, label: 'External Sources', sub: 'Policy systems · Claims · Market data', color: '#64748B' },
  { n: 2, label: 'Data Ingestion', sub: 'Normalization · Validation · Transform', color: '#0369A1' },
  { n: 3, label: 'Canonical Data Platform', sub: 'Unified schema · Single source of truth', color: '#0EA5E9' },
  { n: 4, label: 'AI Agents Processing', sub: 'Fraud · Pricing · Underwriting · Billing', color: '#38BDF8' },
];

const rightSteps = [
  { n: 5, label: 'Decision Output', sub: 'Recommendations · Actions · Scores', color: '#0EA5E9' },
  { n: 6, label: 'Control Panel + Governance', sub: 'Human review · Override · Audit', color: '#0369A1' },
  { n: 7, label: 'Operational Systems', sub: 'Core policy · Claims · Billing', color: '#64748B' },
  { n: 8, label: 'Communication', sub: 'Email · Slack · SMS · Stakeholders', color: '#F59E0B' },
];

function FlowStep({ step, isLast }: { step: typeof leftSteps[0]; isLast: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      {/* Node */}
      <div
        style={{
          padding: '10px 14px',
          border: `1px solid ${step.color}30`,
          borderLeft: `3px solid ${step.color}`,
          borderRadius: 6,
          background: `${step.color}0a`,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          minHeight: 60,
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Number badge */}
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: `${step.color}20`,
              border: `1px solid ${step.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                color: step.color,
                fontWeight: 600,
              }}
            >
              {step.n}
            </span>
          </div>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#F8FAFC', letterSpacing: '-0.01em' }}>
            {step.label}
          </span>
        </div>
        <span style={{ fontSize: '13px', color: 'rgba(248,250,252,0.45)', paddingLeft: 32 }}>
          {step.sub}
        </span>
      </div>

      {/* Downward arrow connector */}
      {!isLast && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 0' }}>
          <div style={{ width: 1.5, height: 10, background: '#38BDF8', opacity: 0.35 }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '6px solid rgba(56,189,248,0.35)',
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Slide19() {
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
          System Architecture · Full Lifecycle
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            margin: '0 0 24px 0',
          }}
        >
          End-to-End Data Flow
        </motion.h2>

        {/* Two-column flow */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: 32,
            flex: 1,
            alignItems: 'flex-start',
          }}
        >
          {/* Left column: steps 1–4 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {leftSteps.map((step, i) => (
              <FlowStep key={step.n} step={step} isLast={i === leftSteps.length - 1} />
            ))}
          </div>

          {/* Center connector */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              alignSelf: 'stretch',
              gap: 6,
            }}
          >
            <div style={{ flex: 1, width: 1.5, background: 'rgba(56,189,248,0.15)', borderRadius: 1 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  width: 36,
                  height: 1.5,
                  background: 'rgba(56,189,248,0.3)',
                }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: 'rgba(56,189,248,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  lineHeight: 1,
                }}
              >
                continues
              </span>
              <div
                style={{
                  width: 36,
                  height: 1.5,
                  background: 'rgba(56,189,248,0.3)',
                }}
              />
            </div>
            <div style={{ flex: 1, width: 1.5, background: 'rgba(56,189,248,0.15)', borderRadius: 1 }} />
          </div>

          {/* Right column: steps 5–8 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {rightSteps.map((step, i) => (
              <FlowStep key={step.n} step={step} isLast={i === rightSteps.length - 1} />
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
          color: 'rgba(248,250,252,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        19 / 22
      </motion.div>
    </SlideLayout>
  );
}
