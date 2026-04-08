import { motion } from 'framer-motion';
import { Database, FileText, Users, CreditCard, BarChart2, ArrowRight } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const systems = [
  { icon: FileText,   label: 'Policy Core',      color: '#0369A1' },
  { icon: Database,   label: 'Claims',            color: '#DC2626' },
  { icon: Users,      label: 'CRM',               color: '#16A34A' },
  { icon: CreditCard, label: 'Billing',           color: '#9333EA' },
  { icon: BarChart2,  label: 'Data Warehouses',   color: '#F59E0B' },
];

const steps = ['Workshops', 'Requirements', 'Configuration', 'Testing', 'Releases'];

export default function Slide02() {
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
              color: '#64748B',
            }}
          >
            The Challenge
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
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          The Legacy Challenge
        </motion.h2>

        {/* Two-column layout */}
        <div style={{ display: 'flex', flex: 1, gap: 40, alignItems: 'flex-start' }}>
          {/* LEFT: 5 system boxes stacked */}
          <motion.div
            variants={fadeIn}
            style={{
              flex: '0 0 45%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              5 Disconnected Systems
            </div>

            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="show"
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              {systems.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    borderRadius: 8,
                    background: `${color}08`,
                    border: `1px solid ${color}28`,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${color}12`,
                      border: `1px solid ${color}30`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#0C4A6E',
                    }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: change cycle + key message */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 4 }}>
            {/* Change cycle */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 12,
                }}
              >
                Every product change requires:
              </div>
              <motion.div
                variants={staggerFast}
                initial="hidden"
                animate="show"
                style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}
              >
                {steps.map((step, i) => (
                  <motion.div
                    key={step}
                    variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <div
                      style={{
                        padding: '6px 12px',
                        borderRadius: 6,
                        background: '#E7EFF5',
                        border: '1px solid rgba(186,230,253,0.6)',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#0C4A6E',
                      }}
                    >
                      {step}
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight size={14} color="#94A3B8" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: 'linear-gradient(90deg, rgba(186,230,253,0.8), transparent)',
              }}
            />

            {/* Key message */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  borderLeft: '3px solid #F59E0B',
                  paddingLeft: 16,
                }}
              >
                <p
                  style={{
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#0C4A6E',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  The real constraint: data fragmentation and operational complexity.
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.5,
                    margin: '8px 0 0',
                  }}
                >
                  Each system speaks a different language. Every integration point
                  is a point of failure. Product velocity grinds to a halt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
