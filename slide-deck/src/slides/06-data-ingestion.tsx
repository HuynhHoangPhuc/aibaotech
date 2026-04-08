import { motion } from 'framer-motion';
import { FileText, AlertCircle, Users, CreditCard, TrendingUp, ArrowRight, Database } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const sources = [
  { icon: FileText,    label: 'Policy Core',       color: '#0369A1' },
  { icon: AlertCircle, label: 'Claims Management', color: '#DC2626' },
  { icon: Users,       label: 'CRM',               color: '#16A34A' },
  { icon: CreditCard,  label: 'Billing System',    color: '#9333EA' },
  { icon: TrendingUp,  label: 'Credit Bureau',     color: '#F59E0B' },
];

const etlSteps = [
  { label: 'Extract', color: '#6366F1' },
  { label: 'Transform', color: '#8B5CF6' },
  { label: 'Load', color: '#A78BFA' },
];

export default function Slide06() {
  return (
    <SlideLayout variant="light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 60px 36px',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} style={{ marginBottom: 4 }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#6366F1',
            }}
          >
            Layer 1
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#0C4A6E',
            letterSpacing: '-0.02em',
            marginBottom: 28,
            lineHeight: 1.1,
          }}
        >
          Data Ingestion
        </motion.h2>

        {/* Horizontal flow layout */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            gap: 0,
            alignItems: 'stretch',
          }}
        >
          {/* LEFT 30%: Data Sources */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="show"
            style={{
              flex: '0 0 30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Data Sources
            </div>
            {sources.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  height: 36,
                  paddingLeft: 10,
                  paddingRight: 12,
                  borderRadius: 7,
                  background: `${color}08`,
                  border: `1px solid ${color}25`,
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 6,
                    background: `${color}14`,
                    border: `1px solid ${color}28`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color={color} />
                </div>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#0C4A6E',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow connector 1 */}
          <motion.div
            variants={fadeIn}
            style={{
              flex: '0 0 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRight size={20} color="#0EA5E9" />
          </motion.div>

          {/* CENTER 38%: ETL Pipeline */}
          <motion.div
            variants={fadeUp}
            style={{
              flex: '0 0 38%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '1.5px solid rgba(99,102,241,0.28)',
              borderRadius: 12,
              padding: '20px 24px',
              background: 'rgba(99,102,241,0.03)',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6366F1',
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              ETL Pipeline
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {etlSteps.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      borderRadius: 8,
                      background: 'rgba(99,102,241,0.07)',
                      border: `1px solid rgba(99,102,241,0.18)`,
                      textAlign: 'center',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#4338CA',
                    }}
                  >
                    {step.label}
                  </div>
                  {i < etlSteps.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 14,
                        background: 'rgba(99,102,241,0.35)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arrow connector 2 */}
          <motion.div
            variants={fadeIn}
            style={{
              flex: '0 0 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRight size={20} color="#0EA5E9" />
          </motion.div>

          {/* RIGHT: Canonical Repository */}
          <motion.div
            variants={fadeUp}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid rgba(22,163,74,0.32)',
              borderRadius: 12,
              padding: '20px 16px',
              background: 'rgba(22,163,74,0.03)',
              gap: 12,
              boxShadow: '0 0 0 4px rgba(22,163,74,0.03)',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(22,163,74,0.09)',
                border: '2px solid rgba(22,163,74,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Database size={22} color="#16A34A" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#166534',
                  marginBottom: 6,
                }}
              >
                Canonical Repository
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#64748B',
                  fontFamily: "'IBM Plex Mono', monospace",
                  lineHeight: 1.6,
                }}
              >
                Normalised · Deduplicated
                <br />
                Format-consistent
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
