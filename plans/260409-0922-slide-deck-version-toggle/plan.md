---
title: Slide Deck Version Toggle (V1/V2 Competitive Comparison)
status: completed
created: 2026-04-09
priority: high
blockedBy: []
blocks: []
---

# Slide Deck Version Toggle

Add global V1/V2 toggle to slide deck. V1 = existing 22 slides. V2 = 17-slide competitive comparison deck (BriteCore vs AI BaoTech) with split-screen layout.

## Brainstorm Report
- [brainstorm-260409-0922-slide-deck-version-toggle.md](../reports/brainstorm-260409-0922-slide-deck-version-toggle.md)

## Phases

| Phase | File | Description | Status | Effort |
|-------|------|-------------|--------|--------|
| 1 | [phase-01-infrastructure.md](phase-01-infrastructure.md) | Deck config, toggle component, App.tsx updates | Complete | M |
| 2 | [phase-02-comparison-layout.md](phase-02-comparison-layout.md) | ComparisonSlideLayout reusable component | Complete | S |
| 3 | [phase-03-v2-slides-intro.md](phase-03-v2-slides-intro.md) | V2 slides 1-3 (Title, Problem, BriteCore Overview) | Complete | M |
| 4 | [phase-04-v2-slides-comparison-a.md](phase-04-v2-slides-comparison-a.md) | V2 slides 4-9 (Architecture thru Underwriting) | Complete | L |
| 5 | [phase-05-v2-slides-comparison-b.md](phase-05-v2-slides-comparison-b.md) | V2 slides 10-15 (Portals thru End-to-End Flow) | Complete | L |
| 6 | [phase-06-v2-slides-closing.md](phase-06-v2-slides-closing.md) | V2 slides 16-17 (Advantages, Summary/CTA) | Complete | S |

## Dependencies
- Phase 1 unblocks all others (deck config + toggle)
- Phase 2 unblocks Phases 4-5 (comparison layout needed)
- Phase 3 can start after Phase 1 (no comparison layout needed)
- Phases 4-6 can parallelize after Phase 2

## Architecture

```
src/
├── lib/
│   └── deck-config.ts          # NEW: { v1: { label, slides[] }, v2: { label, slides[] } }
├── components/
│   ├── VersionToggle.tsx        # NEW: pill toggle, top-right
│   └── ComparisonSlideLayout.tsx # NEW: split-screen wrapper
├── slides/
│   ├── index.ts                 # MODIFIED: re-export for v1
│   ├── v2/                      # NEW: V2 slide directory
│   │   ├── index.ts
│   │   ├── 01-title-v2.tsx
│   │   ├── 03-britecore-overview.tsx
│   │   ├── 04-architecture-compare.tsx
│   │   ├── 05-policy-compare.tsx
│   │   ├── 06-product-rating-compare.tsx
│   │   ├── 07-claims-compare.tsx
│   │   ├── 08-billing-compare.tsx
│   │   ├── 09-underwriting-compare.tsx
│   │   ├── 10-portals-compare.tsx
│   │   ├── 11-data-analytics-compare.tsx
│   │   ├── 12-integrations-compare.tsx
│   │   ├── 13-ai-capabilities-compare.tsx
│   │   ├── 14-governance-compare.tsx
│   │   ├── 15-end-to-end-compare.tsx
│   │   ├── 16-advantages-summary.tsx
│   │   └── 17-summary-cta.tsx
│   └── (existing 01-22 slides unchanged)
└── App.tsx                      # MODIFIED: version state, toggle, deck switching
```

## Key Decisions
- V2 slide 2 reuses V1's `02-the-problem.tsx` (imported directly)
- Split-screen: left=BriteCore (gray #64748B), right=AI BaoTech (blue #0369A1)
- Toggle resets slide index to 0 on switch
- `V` key shortcut toggles version
- `data-interactive` on toggle prevents navigation
