import { motion } from 'framer-motion';
import { SlideLayout } from '../../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer } from '../../lib/animations';

export default function TitleV2() {
  return (
    <SlideLayout variant="dark">
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Top-left geometric accent */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
      >
        <line x1="0" y1="120" x2="200" y2="120" stroke="rgba(56,189,248,0.12)" strokeWidth="1" />
        <line x1="0" y1="160" x2="140" y2="160" stroke="rgba(56,189,248,0.08)" strokeWidth="1" />
        <line x1="80" y1="0" x2="80" y2="220" stroke="rgba(56,189,248,0.1)" strokeWidth="1" />
        <line x1="120" y1="0" x2="120" y2="160" stroke="rgba(56,189,248,0.06)" strokeWidth="1" />
        <circle cx="80" cy="120" r="4" fill="rgba(56,189,248,0.3)" />
        <circle cx="120" cy="160" r="2.5" fill="rgba(56,189,248,0.2)" />
      </svg>

      {/* Bottom-right geometric accent */}
      <svg
        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
      >
        <line x1="400" y1="120" x2="160" y2="120" stroke="rgba(14,165,233,0.1)" strokeWidth="1" />
        <line x1="400" y1="160" x2="240" y2="160" stroke="rgba(14,165,233,0.07)" strokeWidth="1" />
        <line x1="300" y1="300" x2="300" y2="60" stroke="rgba(14,165,233,0.09)" strokeWidth="1" />
        <line x1="260" y1="300" x2="260" y2="120" stroke="rgba(14,165,233,0.06)" strokeWidth="1" />
        <circle cx="300" cy="120" r="4" fill="rgba(14,165,233,0.25)" />
        <circle cx="260" cy="160" r="2.5" fill="rgba(14,165,233,0.18)" />
      </svg>

      {/* Horizontal accent line — top third */}
      <div
        style={{
          position: 'absolute',
          top: 220,
          left: 100,
          right: 100,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.18), transparent)',
        }}
      />

      {/* Main content — centered */}
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
          justifyContent: 'center',
          gap: 0,
          padding: '0 120px',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow tag */}
        <motion.div
          variants={fadeIn}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1,
              background: 'rgba(56,189,248,0.5)',
            }}
          />
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#38BDF8',
              opacity: 0.85,
            }}
          >
            Competitive Analysis · 2026
          </span>
          <div
            style={{
              width: 28,
              height: 1,
              background: 'rgba(56,189,248,0.5)',
            }}
          />
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: '64px',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          AI BaoTech
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(90deg, #38BDF8, #0EA5E9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            vs Traditional InsurTech
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '28px',
            fontWeight: 300,
            color: 'rgba(248,250,252,0.6)',
            letterSpacing: '0.01em',
            marginTop: 8,
            marginBottom: 12,
          }}
        >
          Why AI-Native Wins
        </motion.p>

        {/* Benchmark note */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            color: '#64748B',
            letterSpacing: '0.04em',
            marginTop: 0,
          }}
        >
          Benchmarked against BriteCore Platform
        </motion.p>

        {/* Bottom accent bar */}
        <motion.div
          variants={fadeIn}
          style={{
            marginTop: 44,
            width: 64,
            height: 3,
            borderRadius: 2,
            background: 'linear-gradient(90deg, #0369A1, #38BDF8)',
          }}
        />
      </motion.div>

      {/* Corner label */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          bottom: 40,
          left: 64,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '14px',
          color: 'rgba(248,250,252,0.25)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Confidential · Internal Use Only
      </motion.div>
    </SlideLayout>
  );
}
