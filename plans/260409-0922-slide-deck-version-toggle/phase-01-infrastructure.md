---
phase: 1
title: Infrastructure - Deck Config, Toggle, App Updates
status: completed
priority: high
effort: M
---

# Phase 1: Infrastructure

## Overview
Create the deck config system, version toggle component, and update App.tsx to support switching between V1/V2 decks.

## Files to Create
- `slide-deck/src/lib/deck-config.ts`
- `slide-deck/src/components/VersionToggle.tsx`
- `slide-deck/src/slides/v2/index.ts`

## Files to Modify
- `slide-deck/src/App.tsx`

## Implementation Steps

### Step 1: Create `src/slides/v2/index.ts` (placeholder)

Temporary placeholder that exports empty array. Will be populated in Phases 3-6.

```tsx
// Placeholder - slides added in phases 3-6
import Slide02 from '../02-the-problem'; // Reused from V1

export const slidesV2: React.FC[] = [
  Slide02, // Only reused slide for now
];
```

### Step 2: Create `src/lib/deck-config.ts`

```tsx
import { slides as slidesV1 } from '../slides';
import { slidesV2 } from '../slides/v2';

export type DeckVersion = 'v1' | 'v2';

export interface DeckConfig {
  label: string;
  slides: React.FC[];
}

export const decks: Record<DeckVersion, DeckConfig> = {
  v1: {
    label: 'AI BaoTech',
    slides: slidesV1,
  },
  v2: {
    label: 'vs BriteCore',
    slides: slidesV2,
  },
};
```

### Step 3: Create `src/components/VersionToggle.tsx`

Pill-shaped toggle, top-right of slide container. Requirements:
- Position: absolute, top 16px, right 16px, z-index 50
- Style: semi-transparent dark pill (rgba(15,23,42,0.85)), border 1px rgba(255,255,255,0.15)
- Two segments: V1 label / V2 label
- Active segment: background gradient (#0369A1 → #0EA5E9), white text
- Inactive segment: transparent, rgba(255,255,255,0.5) text
- Animated active indicator with Framer Motion `layout` prop
- `data-interactive` attribute on root div
- Font: IBM Plex Sans, 12px, 500 weight
- Border-radius: 20px, padding: 3px
- Each segment: padding 6px 14px, border-radius: 17px
- onClick calls `onToggle()` prop

```tsx
interface VersionToggleProps {
  version: DeckVersion;
  onToggle: () => void;
  labels: [string, string]; // [v1Label, v2Label]
}
```

### Step 4: Update `src/App.tsx`

Changes to existing App.tsx (currently 109 lines):

1. **Imports**: Add `decks`, `DeckVersion` from deck-config, `VersionToggle` component
2. **State**: Add `const [version, setVersion] = useState<DeckVersion>('v1')`
3. **Derived**: Replace `slides` usage with `const deck = decks[version]`, `const total = deck.slides.length`
4. **Toggle handler**: `const toggleVersion = useCallback(() => { setVersion(v => v === 'v1' ? 'v2' : 'v1'); setCurrent(0); }, [])`
5. **Keyboard**: Add `v` / `V` key handler → `toggleVersion()`
6. **CurrentSlide**: Change `slides[current]` → `deck.slides[current]`
7. **AnimatePresence key**: Change key to `${version}-${current}` to force re-animate on version switch
8. **Render toggle**: Place `<VersionToggle>` inside the 1280x720 container div, after AnimatePresence
9. **Remove** direct import of `{ slides }` from `./slides`

## Success Criteria
- [ ] Toggle renders in top-right of slide area
- [ ] Clicking toggle switches version state
- [ ] Slide resets to 0 on version switch
- [ ] `V` key toggles version
- [ ] Progress bar and counter reflect active deck's slide count
- [ ] V1 deck shows all 22 existing slides unchanged
- [ ] Toggle has `data-interactive` (doesn't trigger slide nav)
- [ ] Animations smooth on version switch

## Risks
- V2 index.ts starts with placeholder → will show minimal content until Phases 3-6 complete
- Toggle z-index must not conflict with SlideLayout's absolute positioning
