import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSlideScale } from './lib/use-slide-scale';
import { decks, type DeckVersion } from './lib/deck-config';
import { VersionToggle } from './components/VersionToggle';

export default function App() {
  const [version, setVersion] = useState<DeckVersion>('v1');
  const [current, setCurrent] = useState(0);
  const scale = useSlideScale();
  const deck = decks[version];
  const total = deck.slides.length;

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  const toggleVersion = useCallback(() => {
    setVersion((v) => (v === 'v1' ? 'v2' : 'v1'));
    setCurrent(0);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'v' || e.key === 'V') {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement).isContentEditable) return;
        e.preventDefault();
        toggleVersion();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, toggleVersion]);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive], button, input, a')) return;
    const x = e.clientX;
    const mid = window.innerWidth / 2;
    if (x > mid) goNext();
    else goPrev();
  };

  const CurrentSlide = deck.slides[current];

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: '#0a0e17',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 1280,
          height: 720,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        }}
      >
        <AnimatePresence mode="wait">
          <CurrentSlide key={`${version}-${current}`} />
        </AnimatePresence>

        {/* Version toggle */}
        <VersionToggle
          version={version}
          onToggle={toggleVersion}
          labels={[decks.v1.label, decks.v2.label]}
        />
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${((current + 1) / total) * 100}%`,
            background: 'linear-gradient(90deg, #0369A1, #0EA5E9)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 20,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: 'rgba(255,255,255,0.4)',
          zIndex: 100,
        }}
      >
        {current + 1} / {total}
      </div>
    </div>
  );
}
