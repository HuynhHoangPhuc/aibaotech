import { motion } from 'framer-motion';
import { FileCheck, CheckCircle, AlertTriangle, XCircle, ArrowRight, ArrowDown } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const pipelineSteps = [
  { label: 'Application', sub: 'Applicant data & docs' },
  { label: 'Data Enrichment', sub: 'Third-party verification' },
  { label: 'Risk Scoring', sub: 'ML model assessment' },
  { label: 'Decision Engine', sub: 'Rule-based + AI logic' },
];

const outcomes = [
  {
    icon: CheckCircle,
    label: 'Auto-Approve',
    sub: 'Policy issued instantly',
    color: '#16A34A',
    bg: 'rgba(22,163,74,0.07)',
    border: 'rgba(22,163,74,0.22)',
  },
  {
    icon: AlertTriangle,
    label: 'Manual Review',
    sub: 'Escalate to underwriter',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.22)',
  },
  {
    icon: XCircle,
    label: 'Auto-Decline',
    sub: 'Notify applicant',
    color: '#DC2626',
    bg: 'rgba(220,38,38,0.07)',
    border: 'rgba(220,38,38,0.22)',
  },
];

export default function Slide12() {
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
            <FileCheck size={20} color="#0369A1" strokeWidth={1.8} />
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
              Underwriting Agent
            </motion.h2>
          </div>
        </div>

        {/* Pipeline section label */}
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
          Underwriting Pipeline
        </motion.div>

        {/* Horizontal pipeline */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
          }}
        >
          {pipelineSteps.map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '1 1 0' }}
            >
              <div
                style={{
                  flex: 1,
                  padding: '12px 10px',
                  borderRadius: 8,
                  border: '1px solid rgba(3,105,161,0.14)',
                  background: 'rgba(3,105,161,0.03)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#0C4A6E',
                    marginBottom: 3,
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
              {i < pipelineSteps.length - 1 && (
                <ArrowRight
                  size={14}
                  color="rgba(3,105,161,0.28)"
                  strokeWidth={1.5}
                  style={{ flexShrink: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow down */}
        <motion.div
          variants={fadeIn}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}
        >
          <ArrowDown size={16} color="rgba(3,105,161,0.3)" strokeWidth={1.5} />
        </motion.div>

        {/* Outcomes section label */}
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
          Decision Outcomes
        </motion.div>

        {/* Three outcome cards */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={outcome.label}
                variants={fadeUp}
                style={{
                  flex: 1,
                  padding: '16px 16px',
                  borderRadius: 10,
                  border: `1.5px solid ${outcome.border}`,
                  background: outcome.bg,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <Icon size={20} color={outcome.color} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: outcome.color,
                      marginBottom: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {outcome.label}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#64748B',
                      lineHeight: 1.3,
                    }}
                  >
                    {outcome.sub}
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
            marginTop: 20,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            color: '#64748B',
            letterSpacing: '0.05em',
          }}
        >
          Auto-decisions processed in &lt;2s · Manual review queue managed via Control Panel
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
        12 / 22
      </motion.div>
    </SlideLayout>
  );
}
