import { motion } from 'framer-motion';
import { Target, Settings, Database, Server, Brain } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const points = [
  {
    icon: Target,
    title: 'Business leaders define product strategy',
    desc: 'Strategy flows directly into execution without translation overhead.',
    color: '#F59E0B',
  },
  {
    icon: Settings,
    title: 'Product managers define underwriting & pricing philosophy',
    desc: 'Rules and models configured in business language, not code.',
    color: '#0EA5E9',
  },
  {
    icon: Database,
    title: 'Data unified in a canonical enterprise model',
    desc: 'One schema. One source of truth across every system.',
    color: '#38BDF8',
  },
  {
    icon: Server,
    title: 'Core systems become execution platforms',
    desc: 'Policy, claims, billing — delegated to, not dictating, the operating model.',
    color: '#16A34A',
  },
  {
    icon: Brain,
    title: 'Agentic AI coordinates operational intelligence',
    desc: 'Agents orchestrate decisions, exceptions, and workflows autonomously.',
    color: '#FBBF24',
  },
];

export default function Slide03() {
  return (
    <SlideLayout variant="gradient">
      {/* Subtle noise overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 75% 15%, rgba(251,191,36,0.07) 0%, transparent 40%)',
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
          padding: '48px 80px 44px',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} style={{ marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '14px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(248,250,252,0.5)',
            }}
          >
            Our Vision
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            marginBottom: 36,
            lineHeight: 1.1,
          }}
        >
          The AI-Native Insurance Company
        </motion.h2>

        {/* Points list */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            flex: 1,
          }}
        >
          {points.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 18,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  flexShrink: 0,
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${color}18`,
                  border: `1.5px solid ${color}40`,
                  marginTop: 1,
                }}
              >
                <Icon size={22} color={color} />
              </div>

              {/* Text */}
              <div>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    marginBottom: 3,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    color: 'rgba(248,250,252,0.55)',
                    lineHeight: 1.5,
                  }}
                >
                  {desc}
                </div>
              </div>

              {/* Left accent stripe */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  width: 3,
                  height: 42,
                  borderRadius: 2,
                  background: color,
                  opacity: 0,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
