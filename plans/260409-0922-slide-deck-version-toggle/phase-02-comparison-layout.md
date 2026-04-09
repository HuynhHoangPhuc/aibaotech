---
phase: 2
title: ComparisonSlideLayout Component
status: completed
priority: high
effort: S
---

# Phase 2: ComparisonSlideLayout Component

## Overview
Reusable split-screen layout for V2 comparison slides (slides 4-15). Left=BriteCore (gray), Right=AI BaoTech (blue).

## Files to Create
- `slide-deck/src/components/ComparisonSlideLayout.tsx`

## Context Files to Read
- `slide-deck/src/components/SlideLayout.tsx` — base layout pattern to follow
- `slide-deck/src/lib/animations.ts` — animation presets
- `slide-deck/src/lib/theme.ts` — color system

## Implementation Steps

### Step 1: Create `src/components/ComparisonSlideLayout.tsx`

```tsx
interface ComparisonSlideLayoutProps {
  title: string;           // Feature area name, centered header
  subtitle?: string;       // Optional subtitle below title
  leftTitle: string;       // e.g., "BriteCore"
  leftSubtitle?: string;   // e.g., "Traditional Approach"
  rightTitle: string;      // e.g., "AI BaoTech"
  rightSubtitle?: string;  // e.g., "AI-Native Approach"
  leftContent: ReactNode;  // BriteCore side content
  rightContent: ReactNode; // AI BaoTech side content
  className?: string;
}
```

### Layout Structure (within SlideLayout variant="dark")

```
┌──────────────────────────────────────────────────────────┐
│  [Feature Area Title]                                     │  ← 40px, white, centered
│  [Optional subtitle]                                      │  ← 15px, muted
│                                                           │
│  ┌─────────────────────┐ │ ┌─────────────────────────┐   │
│  │  BriteCore           │ │ │  AI BaoTech             │   │
│  │  Traditional Approach│ │ │  AI-Native Approach     │   │
│  │                      │ │ │                         │   │
│  │  {leftContent}       │ │ │  {rightContent}         │   │
│  │                      │ │ │                         │   │
│  │                      │ │ │                         │   │
│  └─────────────────────┘ │ └─────────────────────────┘   │
│                           │                               │
└──────────────────────────────────────────────────────────┘
```

### Styling Specs

**Header Area** (top 100px):
- Title: 36px, font-weight 700, color #F8FAFC, text-align center
- Subtitle: 14px, font-weight 400, color #64748B, text-align center, margin-top 6px

**Column Container**:
- display: flex, gap: 0, padding: 0 48px, flex: 1
- Vertical center alignment

**Left Column (BriteCore)**:
- flex: 1
- Background: rgba(100,116,139,0.06) — very subtle gray
- Border: 1px solid rgba(100,116,139,0.2)
- Border-radius: 12px 0 0 12px (rounded left only)
- Padding: 24px 28px
- Column title: 18px, font-weight 600, color #94A3B8 (slate)
- Column subtitle: 12px, uppercase, letter-spacing 1px, color #64748B, monospace
- Content text: 15px, color #94A3B8, line-height 1.6

**Divider** (between columns):
- Width: 1px
- Background: linear-gradient(180deg, transparent, rgba(100,116,139,0.3), transparent)
- Height: 100% of column area

**Right Column (AI BaoTech)**:
- flex: 1
- Background: rgba(3,105,161,0.08) — very subtle blue
- Border: 1px solid rgba(14,165,233,0.2)
- Border-radius: 0 12px 12px 0 (rounded right only)
- Padding: 24px 28px
- Column title: 18px, font-weight 600, color #0EA5E9 (cyan)
- Column subtitle: 12px, uppercase, letter-spacing 1px, color #0369A1, monospace
- Content text: 15px, color #E0F2FE, line-height 1.6

**Animations**:
- Whole component: `staggerContainer` at root
- Header: `fadeUp` delay 0
- Left column: `fadeUp` delay 0.15
- Divider: `fadeIn` delay 0.2
- Right column: `fadeUp` delay 0.25

### Column Content Pattern

Individual slides pass JSX as `leftContent`/`rightContent`. Typical pattern:

```tsx
// Bullet list pattern for comparison items
<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  {items.map((item, i) => (
    <motion.li key={i} variants={fadeUp} style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      marginBottom: 12, fontSize: 15,
    }}>
      <Icon size={18} style={{ marginTop: 2, flexShrink: 0 }} />
      <span>{item}</span>
    </motion.li>
  ))}
</ul>
```

## Success Criteria
- [ ] Split-screen renders correctly at 1280x720
- [ ] Left column has gray/slate visual treatment
- [ ] Right column has blue/cyan visual treatment
- [ ] Vertical divider renders with gradient fade
- [ ] Header centered above both columns
- [ ] Staggered animation on mount
- [ ] Content scrollable if overflow (unlikely at designed sizes)
- [ ] Works with SlideLayout variant="dark"

## Risks
- Content overflow if comparison items are too long → keep bullet text concise (handled per-slide)
