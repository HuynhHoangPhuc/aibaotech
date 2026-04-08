import { motion } from 'framer-motion';
import { Briefcase, Database, Shield, Headphones, Settings } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const departments = [
  {
    icon: Briefcase,
    label: 'Business Ops',
    desc: 'Policy exceptions & product strategy input',
    color: '#0369A1',
  },
  {
    icon: Database,
    label: 'Data / Ops',
    desc: 'Data quality & pipeline monitoring',
    color: '#0EA5E9',
  },
  {
    icon: Shield,
    label: 'Compliance',
    desc: 'Regulatory adherence & audit support',
    color: '#16A34A',
  },
  {
    icon: Headphones,
    label: 'Customer Service',
    desc: 'Exception handling & escalations',
    color: '#F59E0B',
  },
];

export default function Slide16() {
  return (
    <SlideLayout variant="light">
      {/* Subtle top accent line */}
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
          alignItems: 'center',
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
          Layer 5 · Human Oversight
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
            textAlign: 'center',
          }}
        >
          Layer 5: Human-in-the-Loop
        </motion.h2>

        {/* Operator Team hub label */}
        <motion.div
          variants={fadeIn}
          style={{
            padding: '10px 36px',
            background: 'linear-gradient(135deg, #0369A1, #0C4A6E)',
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#F8FAFC',
              letterSpacing: '-0.01em',
            }}
          >
            Operator Team
          </span>
        </motion.div>

        {/* 2x2 department grid */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
            width: '100%',
            maxWidth: 760,
            marginBottom: 20,
          }}
        >
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.label}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  border: `1px solid ${dept.color}25`,
                  borderRadius: 8,
                  background: `${dept.color}06`,
                  minHeight: 0,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `${dept.color}14`,
                    border: `1.5px solid ${dept.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={dept.color} strokeWidth={1.8} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#0C4A6E',
                      marginBottom: 2,
                    }}
                  >
                    {dept.label}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#64748B',
                      lineHeight: 1.4,
                    }}
                  >
                    {dept.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Super Admin — single row */}
        <motion.div
          variants={fadeUp}
          style={{
            padding: '12px 32px',
            border: '1.5px solid rgba(245,158,11,0.35)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            background: 'rgba(245,158,11,0.05)',
          }}
        >
          <Settings size={20} color="#F59E0B" strokeWidth={1.8} />
          <div>
            <span
              style={{
                fontSize: '17px',
                fontWeight: 700,
                color: '#0C4A6E',
                marginRight: 10,
              }}
            >
              Super Admin
            </span>
            <span
              style={{
                fontSize: '14px',
                color: '#64748B',
              }}
            >
              User management · System permissions · Access control
            </span>
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
        16 / 22
      </motion.div>
    </SlideLayout>
  );
}
