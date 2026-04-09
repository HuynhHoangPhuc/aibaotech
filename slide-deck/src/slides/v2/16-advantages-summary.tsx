import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SlideLayout } from '../../components/SlideLayout';
import { fadeUp, staggerContainer, staggerFast } from '../../lib/animations';

const rows = [
  { dimension: 'Architecture', britecore: 'Cloud-native, modular', aibaotech: 'AI-native, unified 6-layer' },
  { dimension: 'Policy Mgmt', britecore: 'Config-based rules', aibaotech: 'AI-driven, self-tuning' },
  { dimension: 'Claims', britecore: 'Workflow-based', aibaotech: 'ML fraud detection + auto-triage' },
  { dimension: 'Pricing', britecore: 'Point-click rate tables', aibaotech: 'AI Pricing Agent, real-time' },
  { dimension: 'Underwriting', britecore: 'Manual + rules', aibaotech: 'AI Underwriting Agent' },
  { dimension: 'Data', britecore: 'Per-module BI', aibaotech: 'Canonical Data Platform' },
  { dimension: 'AI Strategy', britecore: 'Bolt-on, optional', aibaotech: 'Native, purpose-built agents' },
  { dimension: 'Portals', britecore: '3 separate portals', aibaotech: 'Unified control panel' },
];

export default function Slide16AdvantagesSummary() {
  return (
    <SlideLayout variant="dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 48px 36px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          Why AI-Native Wins
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#F8FAFC',
            textAlign: 'center',
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
          }}
        >
          Competitive Advantages
        </motion.h2>

        {/* Table container */}
        <motion.div
          variants={staggerFast}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '10px 0',
            }}
          >
            <span
              style={{
                flex: 1.2,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                textTransform: 'uppercase',
                color: '#475569',
                letterSpacing: '0.08em',
              }}
            >
              Dimension
            </span>
            <span
              style={{
                flex: 1.5,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                textTransform: 'uppercase',
                color: '#475569',
                letterSpacing: '0.08em',
              }}
            >
              BriteCore
            </span>
            <span
              style={{
                flex: 1.5,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                textTransform: 'uppercase',
                color: '#475569',
                letterSpacing: '0.08em',
              }}
            >
              AI BaoTech
            </span>
            <span
              style={{
                flex: 0.8,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                textTransform: 'uppercase',
                color: '#475569',
                letterSpacing: '0.08em',
              }}
            >
              Winner
            </span>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.dimension}
              variants={fadeUp}
              style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                padding: '11px 0',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              }}
            >
              {/* Dimension */}
              <span
                style={{
                  flex: 1.2,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#CBD5E1',
                }}
              >
                {row.dimension}
              </span>

              {/* BriteCore */}
              <span
                style={{
                  flex: 1.5,
                  fontSize: '14px',
                  color: '#94A3B8',
                }}
              >
                {row.britecore}
              </span>

              {/* AI BaoTech */}
              <span
                style={{
                  flex: 1.5,
                  fontSize: '14px',
                  color: '#0EA5E9',
                }}
              >
                {row.aibaotech}
              </span>

              {/* Winner */}
              <div style={{ flex: 0.8, display: 'flex', alignItems: 'center' }}>
                <Check size={14} color="#16A34A" strokeWidth={2.5} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
