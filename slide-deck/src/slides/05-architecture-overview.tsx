import { motion } from 'framer-motion';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const layers = [
  {
    num: 6,
    label: 'Governance & Monitoring',
    sublabel: 'Audit trails · Compliance · Observability',
    color: '#FBBF24',
    glow: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.32)',
  },
  {
    num: 5,
    label: 'Operator Team & Super Admin',
    sublabel: 'Role-based access · Tenant management · Config',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.10)',
    border: 'rgba(245,158,11,0.28)',
  },
  {
    num: 4,
    label: 'Control Panel UI',
    sublabel: 'Product builder · Rules editor · Dashboard',
    color: '#0EA5E9',
    glow: 'rgba(14,165,233,0.10)',
    border: 'rgba(14,165,233,0.28)',
  },
  {
    num: 3,
    label: 'AI Agents Layer',
    sublabel: 'Underwriting agent · Claims agent · Risk agent · Ops agent',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.42)',
    highlight: true,
  },
  {
    num: 2,
    label: 'Canonical Data Platform',
    sublabel: 'Unified schema · Query engine · Event bus',
    color: '#16A34A',
    glow: 'rgba(22,163,74,0.12)',
    border: 'rgba(22,163,74,0.32)',
  },
  {
    num: 1,
    label: 'Data Ingestion Layer',
    sublabel: 'ETL pipelines · Connectors · Schema normalisation',
    color: '#6366F1',
    glow: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.32)',
  },
];

export default function Slide05() {
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

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          padding: '36px 60px 32px',
          gap: 24,
        }}
      >
        {/* Left: title + layers */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Eyebrow */}
          <motion.div variants={fadeIn} style={{ marginBottom: 2 }}>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(248,250,252,0.35)',
              }}
            >
              Architecture
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: '#F8FAFC',
              letterSpacing: '-0.02em',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            System Architecture
          </motion.h2>

          {/* Layer stack */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}
          >
            {layers.map((layer) => (
              <motion.div
                key={layer.num}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  height: 56,
                  borderRadius: 8,
                  border: `1px solid ${layer.border}`,
                  background: layer.highlight
                    ? `linear-gradient(135deg, ${layer.glow}, rgba(56,189,248,0.05))`
                    : layer.glow,
                  boxShadow: layer.highlight
                    ? '0 0 16px rgba(56,189,248,0.10), inset 0 0 0 1px rgba(56,189,248,0.08)'
                    : 'none',
                  padding: '0 18px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    borderRadius: '8px 0 0 8px',
                    background: layer.color,
                  }}
                />

                {/* Layer number badge */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: `${layer.color}20`,
                    border: `1px solid ${layer.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '13px',
                      fontWeight: 700,
                      color: layer.color,
                    }}
                  >
                    {layer.num}
                  </span>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#F8FAFC',
                      marginBottom: 1,
                    }}
                  >
                    {layer.label}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(248,250,252,0.4)',
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {layer.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Communication Layer sidebar */}
        <motion.div
          variants={fadeIn}
          style={{
            width: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingTop: 72,
          }}
        >
          {/* Vertical label */}
          <div
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#38BDF8',
              marginBottom: 10,
            }}
          >
            Communication Layer
          </div>

          {/* Vertical line with dots */}
          <div
            style={{
              width: 1,
              flex: 1,
              maxHeight: 300,
              background: 'linear-gradient(180deg, transparent, rgba(56,189,248,0.5), transparent)',
              position: 'relative',
            }}
          >
            {[0, 25, 50, 75, 100].map((pct) => (
              <div
                key={pct}
                style={{
                  position: 'absolute',
                  top: `${pct}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#38BDF8',
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          {/* Protocol labels */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              alignItems: 'center',
              marginTop: 6,
            }}
          >
            {['REST', 'gRPC', 'Events'].map((proto) => (
              <div
                key={proto}
                style={{
                  padding: '2px 7px',
                  borderRadius: 4,
                  border: '1px solid rgba(56,189,248,0.25)',
                  fontSize: '13px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: 'rgba(56,189,248,0.7)',
                }}
              >
                {proto}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
