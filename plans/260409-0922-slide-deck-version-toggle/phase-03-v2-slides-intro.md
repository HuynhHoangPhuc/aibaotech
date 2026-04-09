---
phase: 3
title: V2 Slides 1-3 (Title, Problem, BriteCore Overview)
status: completed
priority: medium
effort: M
blockedBy: [phase-01]
---

# Phase 3: V2 Intro Slides (1-3)

## Overview
Create V2's opening slides: modified title, reused problem slide, new BriteCore overview.

## Files to Create
- `slide-deck/src/slides/v2/01-title-v2.tsx`
- `slide-deck/src/slides/v2/03-britecore-overview.tsx`

## Files to Modify
- `slide-deck/src/slides/v2/index.ts` — add slide imports

## Context Files
- `slide-deck/src/slides/01-title.tsx` — V1 title to adapt
- `slide-deck/src/slides/02-the-problem.tsx` — reused directly

## Implementation Steps

### Slide 1: Title V2 (`01-title-v2.tsx`)

Based on V1 title slide pattern (SlideLayout variant="dark", decorative SVGs, stagger animation).

**Content changes from V1:**
- Eyebrow: "Competitive Analysis . 2026"
- Main h1: "AI BaoTech" (keep)
- Gradient subtitle: "vs Traditional InsurTech" (was "Insurance Operating System")
- Tagline: "Why AI-Native Wins" (was "The AI-Native Insurance Company")
- Add small BriteCore mention: "Benchmarked against BriteCore Platform" (13px, monospace, muted)
- Keep decorative SVG elements, grid pattern, confidential label

### Slide 2: The Problem (reuse V1)

Direct import of `../02-the-problem` — no new file needed. Already in v2/index.ts placeholder.

### Slide 3: BriteCore Overview (`03-britecore-overview.tsx`)

Full-width slide introducing BriteCore's platform modules. SlideLayout variant="dark".

**Layout:**
- Eyebrow: "The Incumbent" (13px, uppercase, monospace, #94A3B8)
- Title: "BriteCore Platform" (36px, #F8FAFC)
- Subtitle: "Cloud-Native Policy Administration System" (15px, #64748B)
- Module grid: 3 columns x 4 rows of module cards

**Module Cards (12 items):**

| Module | Icon | Description |
|--------|------|-------------|
| Policy Management | FileText | End-to-end, config-based |
| Billing | CreditCard | Advanced billing & AR |
| Claims | Shield | Workflow-based processing |
| Product & Rating | Settings | Point-and-click definition |
| Agent Portal | Users | Web-based quoting |
| Policyholder Portal | Smartphone | Self-service + mobile app |
| Insurer Portal | Monitor | Permission-based access |
| BI & Analytics | BarChart2 | Ad-hoc reporting |
| Document Mgmt | FolderOpen | Integrated storage |
| AI (Bolt-on) | Brain | "Flexible architecture" |
| APIs & Integrations | Plug | Prebuilt integrations |
| AWS Cloud | Cloud | Cloud-native infra |

**Card Styling:**
- 120px height, flex column, center aligned
- Background: rgba(100,116,139,0.06)
- Border: 1px solid rgba(100,116,139,0.15)
- Border-radius: 8px
- Icon: 24px, color #94A3B8
- Label: 13px, font-weight 500, color #CBD5E1
- Detail: 11px, color #64748B

**Bottom note**: "Source: britecore.com/platform" (11px, italic, #475569, bottom-right)

**Animation**: staggerContainer → staggerFast on grid, each card fadeUp.

### Update `v2/index.ts`

```tsx
import TitleV2 from './01-title-v2';
import Slide02 from '../02-the-problem';
import BritecoreOverview from './03-britecore-overview';
// ... later phases add more imports

export const slidesV2: React.FC[] = [
  TitleV2,
  Slide02,
  BritecoreOverview,
  // ... comparison slides added in phases 4-6
];
```

## Success Criteria
- [ ] V2 title slide renders with competitive framing
- [ ] Problem slide reused from V1 without duplication
- [ ] BriteCore overview shows 12 module cards in grid
- [ ] All animations match V1 timing/easing
- [ ] Switching to V2 shows these 3 slides first
