import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const pipeline = [
  { step: '01', label: 'Data Collection', detail: 'Claims, policies, external data' },
  { step: '02', label: 'Feature Engineering', detail: 'Behavioral patterns, anomaly signals' },
  { step: '03', label: 'ML Model Scoring', detail: 'Risk score 0–100' },
  { step: '04', label: 'Alert Generation', detail: 'Threshold-based triggers' },
  { step: '05', label: 'Human Review Queue', detail: 'Analyst prioritization' },
];

const detectionPatterns = [
  'Cross-reference validation across claim history',
  'Duplicate claim detection via fingerprinting',
  'Timing anomaly analysis on submission patterns',
];

const alertTypes = [
  { label: 'High', color: '#DC2626', bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.25)' },
  { label: 'Medium', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
  { label: 'Low', color: '#16A34A', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.25)' },
];

export default function Slide10() {
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
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
            <ShieldAlert size={20} color="#0369A1" strokeWidth={1.8} />
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
              Fraud Detection Agent
            </motion.h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'flex', gap: 48, flex: 1, alignItems: 'flex-start' }}>

          {/* LEFT — ML Pipeline (55%) */}
          <motion.div variants={staggerFast} style={{ flex: '0 0 55%' }}>
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
              ML Pipeline
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pipeline.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  {/* Step number badge + connector */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'rgba(3,105,161,0.07)',
                        border: '1px solid rgba(3,105,161,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#0369A1',
                      }}
                    >
                      {item.step}
                    </div>
                    {i < pipeline.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          height: 8,
                          background: 'rgba(3,105,161,0.15)',
                          marginTop: 2,
                        }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div>
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 600,
                        color: '#0C4A6E',
                        marginRight: 6,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: '15px',
                        color: '#64748B',
                      }}
                    >
                      — {item.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Detection Patterns + Alert Severity (45%) */}
          <motion.div
            variants={staggerFast}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {/* Detection Patterns */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: 10,
                }}
              >
                Detection Patterns
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {detectionPatterns.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#0369A1',
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <span style={{ fontSize: '15px', color: '#0C4A6E', lineHeight: 1.4 }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Alert Severity */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#64748B',
                  marginBottom: 10,
                }}
              >
                Alert Severity
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {alertTypes.map((a) => (
                  <div
                    key={a.label}
                    style={{
                      padding: '5px 16px',
                      borderRadius: 6,
                      background: a.bg,
                      border: `1px solid ${a.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: a.color,
                      }}
                    >
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
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
        10 / 22
      </motion.div>
    </SlideLayout>
  );
}
