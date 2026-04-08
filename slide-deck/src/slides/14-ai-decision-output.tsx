import { motion } from 'framer-motion';
import { ArrowDown, FileText, DollarSign, Receipt, Bell, Zap } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const executionTargets = [
  { icon: FileText, label: 'Policy System', sub: 'Coverage updates', color: '#38BDF8' },
  { icon: DollarSign, label: 'Claims System', sub: 'Settlements', color: '#0EA5E9' },
  { icon: Receipt, label: 'Billing System', sub: 'Invoices', color: '#38BDF8' },
  { icon: Bell, label: 'CRM', sub: 'Notifications', color: '#0EA5E9' },
];

export default function Slide14() {
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
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Top accent */}
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
          System Architecture · Execution Layer
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
          AI Decision Output
        </motion.h2>

        {/* Compact vertical flow */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 680,
          }}
        >
          {/* AI Agent Decisions label */}
          <motion.div
            variants={fadeUp}
            style={{
              padding: '8px 32px',
              borderRadius: 6,
              border: '1px solid rgba(56,189,248,0.2)',
              background: 'rgba(56,189,248,0.06)',
              textAlign: 'center',
              width: '55%',
            }}
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                color: '#38BDF8',
                letterSpacing: '0.08em',
              }}
            >
              AI Agent Decisions
            </span>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={fadeIn}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 0' }}
          >
            <div style={{ width: 1, height: 14, background: 'rgba(56,189,248,0.25)' }} />
            <ArrowDown size={14} color="rgba(56,189,248,0.4)" strokeWidth={1.5} />
          </motion.div>

          {/* Decision Queue */}
          <motion.div
            variants={fadeUp}
            style={{
              padding: '10px 32px',
              borderRadius: 8,
              border: '1px solid rgba(56,189,248,0.25)',
              background: 'rgba(56,189,248,0.05)',
              textAlign: 'center',
              width: '55%',
            }}
          >
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC', marginBottom: 2 }}>
              Decision Queue
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(248,250,252,0.45)' }}>
              Prioritized recommendation buffer
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={fadeIn}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 0' }}
          >
            <div style={{ width: 1, height: 14, background: 'rgba(56,189,248,0.25)' }} />
            <ArrowDown size={14} color="rgba(56,189,248,0.4)" strokeWidth={1.5} />
          </motion.div>

          {/* Validation Layer */}
          <motion.div
            variants={fadeUp}
            style={{
              padding: '10px 32px',
              borderRadius: 8,
              border: '1px solid rgba(251,191,36,0.25)',
              background: 'rgba(251,191,36,0.04)',
              textAlign: 'center',
              width: '55%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <Zap size={14} color="#FBBF24" strokeWidth={1.8} />
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC', marginBottom: 2 }}>
                Validation Layer
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(248,250,252,0.45)' }}>
                Compliance checks &amp; threshold guards
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={fadeIn}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 0' }}
          >
            <div style={{ width: 1, height: 14, background: 'rgba(56,189,248,0.25)' }} />
            <ArrowDown size={14} color="rgba(56,189,248,0.4)" strokeWidth={1.5} />
          </motion.div>

          {/* Execution targets — 4 cards in a row */}
          <motion.div
            variants={staggerFast}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', width: '100%' }}
          >
            {executionTargets.map((target) => {
              const Icon = target.icon;
              return (
                <motion.div
                  key={target.label}
                  variants={fadeUp}
                  style={{
                    flex: '1 1 0',
                    maxWidth: 150,
                    padding: '10px 8px',
                    borderRadius: 8,
                    border: '1px solid rgba(56,189,248,0.15)',
                    background: 'rgba(255,255,255,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 7,
                      background: 'rgba(56,189,248,0.07)',
                      border: '1px solid rgba(56,189,248,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} color={target.color} strokeWidth={1.8} />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>
                    {target.label}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(248,250,252,0.4)' }}>
                    {target.sub}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key message */}
          <motion.div
            variants={fadeIn}
            style={{
              marginTop: 20,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              color: 'rgba(56,189,248,0.5)',
              letterSpacing: '0.06em',
              textAlign: 'center',
            }}
          >
            Automated recommendations pushed to execution layer
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
          color: 'rgba(248,250,252,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        14 / 22
      </motion.div>
    </SlideLayout>
  );
}
