import { motion } from 'framer-motion';
import type { DeckVersion } from '../lib/deck-config';

interface VersionToggleProps {
  version: DeckVersion;
  onToggle: () => void;
  labels: [string, string];
}

export function VersionToggle({ version, onToggle, labels }: VersionToggleProps) {
  const isV2 = version === 'v2';

  return (
    <div
      data-interactive
      role="button"
      aria-label="Switch deck version"
      onClick={onToggle}
      style={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 50,
        display: 'flex',
        borderRadius: 20,
        padding: 3,
        background: 'rgba(15,23,42,0.85)',
        border: '1px solid rgba(255,255,255,0.15)',
        cursor: 'pointer',
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: 12,
        fontWeight: 500,
        userSelect: 'none',
        backdropFilter: 'blur(8px)',
      }}
    >
      {labels.map((label, i) => {
        const active = i === 0 ? !isV2 : isV2;
        return (
          <div key={label} style={{ position: 'relative', borderRadius: 17, padding: '6px 14px' }}>
            {active && (
              <motion.div
                layoutId="version-toggle-indicator"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 17,
                  background: 'linear-gradient(135deg, #0369A1, #0EA5E9)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span
              style={{
                position: 'relative',
                zIndex: 1,
                color: active ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                transition: 'color 0.2s ease',
              }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
