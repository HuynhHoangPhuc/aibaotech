import { motion } from 'framer-motion';
import { Mail, MessageSquare, Smartphone } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer } from '../lib/animations';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    color: '#0369A1',
    points: ['Detailed reports', 'Policy documents', 'Approval requests'],
  },
  {
    icon: MessageSquare,
    label: 'Slack',
    color: '#16A34A',
    points: ['Real-time alerts', 'Team notifications', 'Escalation triggers'],
  },
  {
    icon: Smartphone,
    label: 'SMS',
    color: '#F59E0B',
    points: ['Urgent alerts', 'Claim status updates', 'Payment reminders'],
  },
];

export default function Slide18() {
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
          Notification Infrastructure
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#0C4A6E',
            letterSpacing: '-0.02em',
            marginBottom: 24,
            margin: '0 0 24px 0',
          }}
        >
          Communication &amp; Notification Layer
        </motion.h2>

        {/* Three columns */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            gap: '24px',
            flex: 1,
          }}
        >
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.label}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '32px 24px',
                  border: `1px solid ${ch.color}25`,
                  borderTop: `3px solid ${ch.color}`,
                  borderRadius: 8,
                  background: `${ch.color}05`,
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: `${ch.color}12`,
                    border: `1.5px solid ${ch.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 14,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={ch.color} strokeWidth={1.8} />
                </div>

                {/* Channel name */}
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0C4A6E',
                    marginBottom: 16,
                  }}
                >
                  {ch.label}
                </span>

                {/* Bullet points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {ch.points.map((pt) => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: ch.color,
                          opacity: 0.6,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: '14px',
                          color: '#64748B',
                          lineHeight: 1.5,
                        }}
                      >
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Key message */}
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
          Ensures timely delivery of alerts, approvals, and results to all stakeholders
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
        18 / 22
      </motion.div>
    </SlideLayout>
  );
}
