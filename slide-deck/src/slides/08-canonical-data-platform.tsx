import { motion } from 'framer-motion';
import { Database, FileText, AlertCircle, Users, CreditCard, TrendingUp } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, scaleIn, staggerContainer } from '../lib/animations';

const spokes = [
  { icon: FileText,    label: 'Policies',  color: '#0EA5E9' },
  { icon: AlertCircle, label: 'Claims',    color: '#DC2626' },
  { icon: Users,       label: 'Customers', color: '#16A34A' },
  { icon: CreditCard,  label: 'Billing',   color: '#9333EA' },
  { icon: TrendingUp,  label: 'Credit',    color: '#F59E0B' },
];

/*
  Diagram: 520x520 box, flex-centered in available area.
  Hub center = (260, 260). Nodes orbit at R=200.
  ICON centers sit exactly on the circle. Labels hang below.
*/
const BOX = 520;
const MID = BOX / 2;
const R = 200;
const ICON_SIZE = 50; // icon container size
const HALF_ICON = ICON_SIZE / 2;

function iconCenter(i: number) {
  const deg = (72 * i) - 90;
  const rad = deg * Math.PI / 180;
  return {
    left: MID + R * Math.cos(rad),
    top: MID + R * Math.sin(rad),
  };
}

export default function Slide08() {
  return (
    <SlideLayout variant="dark">
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)`,
        backgroundSize: '52px 52px',
      }} />

      {/* Title */}
      <motion.div
        variants={staggerContainer} initial="hidden" animate="show"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '40px 80px 0', zIndex: 2 }}
      >
        <motion.div variants={fadeIn} style={{ marginBottom: 6 }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 14,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: '#38BDF8', opacity: 0.7,
          }}>Layer 2</span>
        </motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 44, fontWeight: 700, color: '#F8FAFC', letterSpacing: '-0.02em', lineHeight: 1.1,
        }}>Canonical Data Platform</motion.h2>
      </motion.div>

      {/* Diagram area — flex centers the 520x520 box */}
      <div style={{
        position: 'absolute', top: 115, bottom: 55, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'relative', width: BOX, height: BOX, flexShrink: 0 }}>

          {/* Orbit ring — centered in the box */}
          <svg
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            width={BOX} height={BOX} viewBox={`0 0 ${BOX} ${BOX}`} fill="none"
          >
            <circle cx={MID} cy={MID} r={R} stroke="rgba(56,189,248,0.09)" strokeWidth="1" strokeDasharray="6 5" />
          </svg>

          {/* 5 spoke nodes — ICON center sits on the circle */}
          {spokes.map((s, i) => {
            const c = iconCenter(i);
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.09, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: 'absolute',
                  /* Position so the ICON CENTER (not the whole element) is on the orbit */
                  left: c.left - HALF_ICON,
                  top: c.top - HALF_ICON,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: ICON_SIZE,
                }}
              >
                {/* Icon — this box is exactly at the orbit point */}
                <div style={{
                  width: ICON_SIZE, height: ICON_SIZE, borderRadius: 12,
                  background: `${s.color}14`, border: `1.5px solid ${s.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 16px ${s.color}20`, flexShrink: 0,
                }}>
                  <Icon size={24} color={s.color} />
                </div>
                {/* Label hangs below icon, doesn't affect orbit alignment */}
                <span style={{
                  fontSize: 14, fontWeight: 600, color: 'rgba(248,250,252,0.7)',
                  whiteSpace: 'nowrap', marginTop: 6,
                }}>
                  {s.label}
                </span>
              </motion.div>
            );
          })}

          {/* Central hub — dead center of the box */}
          <motion.div
            variants={scaleIn} initial="hidden" animate="show"
            style={{
              position: 'absolute',
              left: MID - 59, top: MID - 59, /* 118/2 = 59 */
            }}
          >
            {/* Glow ring */}
            <div style={{
              position: 'absolute', width: 155, height: 155, borderRadius: '50%',
              border: '1px solid rgba(56,189,248,0.12)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />
            {/* Core */}
            <div style={{
              width: 118, height: 118, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(3,105,161,0.12) 60%, transparent 100%)',
              border: '2px solid rgba(56,189,248,0.45)',
              boxShadow: '0 0 50px rgba(56,189,248,0.2), 0 0 100px rgba(56,189,248,0.08)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
            }}>
              <Database size={26} color="#38BDF8" />
              <div style={{ fontSize: 12, fontWeight: 700, color: '#38BDF8', lineHeight: 1.25, textAlign: 'center' }}>
                Unified<br />Insurance<br />Dataset
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Key message */}
      <motion.div
        variants={fadeIn} initial="hidden" animate="show"
        style={{ position: 'absolute', bottom: 24, left: 80, right: 80, display: 'flex', justifyContent: 'center', zIndex: 2 }}
      >
        <div style={{ borderLeft: '3px solid #38BDF8', paddingLeft: 16 }}>
          <p style={{ fontSize: 17, fontWeight: 500, color: 'rgba(248,250,252,0.7)', margin: 0, fontStyle: 'italic' }}>
            Single source of truth — format-consistent, query-ready, always current.
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
