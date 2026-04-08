import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { SlideLayout } from '../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../lib/animations';

const traditional = [
  'Manual coordination across siloed teams',
  'Disconnected databases, no unified model',
  'Workshops → Requirements → Releases cycle',
  'Technology is the bottleneck',
  'Months to change a product rule',
];

const aiNative = [
  'AI-coordinated operations end-to-end',
  'Unified canonical data platform',
  'Strategy → Execution, same day',
  'Data fragmentation solved at the foundation',
  'Days to adapt and deploy changes',
];

export default function Slide04() {
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
            Operating Model
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
          Operating Model Shift
        </motion.h2>

        {/* Comparison columns */}
        <div style={{ display: 'flex', flex: 1, gap: 32, alignItems: 'stretch' }}>
          {/* LEFT — Traditional */}
          <motion.div
            variants={fadeUp}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: '2px solid rgba(220,38,38,0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#DC2626',
                  marginBottom: 4,
                  opacity: 0.75,
                }}
              >
                Before
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#0C4A6E',
                  lineHeight: 1.2,
                }}
              >
                Traditional
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#64748B',
                  marginTop: 2,
                }}
              >
                System-Driven
              </div>
            </div>

            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="show"
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {traditional.map((text) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(220,38,38,0.08)',
                      border: '1.5px solid rgba(220,38,38,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 1,
                    }}
                  >
                    <X size={11} color="#DC2626" strokeWidth={2.5} />
                  </div>
                  <span
                    style={{
                      fontSize: '17px',
                      color: '#475569',
                      lineHeight: 1.45,
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CENTER divider */}
          <div
            style={{
              width: 1,
              alignSelf: 'stretch',
              background: 'linear-gradient(180deg, transparent, rgba(3,105,161,0.2) 20%, rgba(14,165,233,0.3) 50%, rgba(3,105,161,0.2) 80%, transparent)',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: '#0EA5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* RIGHT — AI-Native */}
          <motion.div
            variants={fadeUp}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: '2px solid rgba(22,163,74,0.25)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#16A34A',
                  marginBottom: 4,
                  opacity: 0.8,
                }}
              >
                After
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#0C4A6E',
                  lineHeight: 1.2,
                }}
              >
                AI-Native
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#64748B',
                  marginTop: 2,
                }}
              >
                AI-Governed
              </div>
            </div>

            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="show"
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {aiNative.map((text) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(22,163,74,0.08)',
                      border: '1.5px solid rgba(22,163,74,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 1,
                    }}
                  >
                    <Check size={11} color="#16A34A" strokeWidth={2.5} />
                  </div>
                  <span
                    style={{
                      fontSize: '17px',
                      color: '#0C4A6E',
                      lineHeight: 1.45,
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}
