import { useState, useEffect, useCallback } from 'react';

export function useSlideScale() {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const sw = 1280;
    const sh = 720;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    setScale(Math.min(vw / sw, vh / sh));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  return scale;
}
