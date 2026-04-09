# Brainstorm: Slide Deck Version Toggle (V1/V2)

**Date:** 2026-04-09
**Status:** Approved

## Problem Statement

Boss wants the existing AI BaoTech slide deck to support 2 versions switchable via a toggle button:
- **V1**: Current 22-slide deck (AI BaoTech Insurance OS)
- **V2**: Competitive comparison deck — BriteCore's traditional approach vs AI BaoTech's AI-native approach

## Research: BriteCore Platform

Source: https://www.britecore.com/platform

**BriteCore modules:**
- Policy Management (config-based, manual admin)
- Billing (advanced billing/AR)
- Claims Management (workflow-based)
- Document Management (integrated storage)
- AI (flexible architecture — bolt-on, not native)
- Product Definition & Rating (point-and-click)
- Agent Portal, Policyholder Portal, Insurer Portal
- BI & Analytics (ad-hoc reporting)
- APIs/Integrations (prebuilt + comprehensive APIs)
- AWS Cloud (cloud-native)

**Positioning**: Modern cloud-native PAS for P&C insurers. Configurable, scalable, continuous updates.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| V2 purpose | Competitive comparison | Show BriteCore vs AI BaoTech side-by-side |
| Toggle scope | Global | One toggle switches entire deck |
| Toggle placement | Top-right corner | Visible, non-intrusive pill button |
| Slide count | Can differ | V1=22, V2=17 slides |
| Architecture | Deck config map | `decks[version].slides[]` — cleanest separation |
| Comparison format | Split-screen columns | Left=BriteCore (gray), Right=AI BaoTech (blue) |

## Architecture

### Deck Config Map

```
src/lib/deck-config.ts
  decks = { v1: { label, slides[] }, v2: { label, slides[] } }

src/components/VersionToggle.tsx
  Pill toggle, top-right, data-interactive, Framer Motion animated

App.tsx changes:
  - version state ('v1' | 'v2')
  - Reset current to 0 on version switch
  - Read slides from decks[version].slides
  - V key shortcut to toggle
```

### V2 Slide Lineup (17 slides)

| # | Slide | Format |
|---|-------|--------|
| 1 | Title | Full-width — "AI BaoTech vs Traditional InsurTech" |
| 2 | The Problem | Full-width — reuse V1 slide 02 |
| 3 | BriteCore Overview | Full-width — their modules/positioning |
| 4 | Architecture Comparison | Split — cloud-native vs AI-native 6-layer |
| 5 | Policy Management | Split — config-based vs AI-driven |
| 6 | Product & Rating | Split — point-click vs AI pricing agent |
| 7 | Claims Management | Split — workflow vs AI fraud+claims agents |
| 8 | Billing | Split — traditional vs AI billing+actuarial |
| 9 | Underwriting | Split — manual vs AI underwriting agent |
| 10 | Portals & UX | Split — 3 portals vs unified control panel |
| 11 | Data & Analytics | Split — BI reporting vs canonical data platform |
| 12 | Integrations | Split — prebuilt APIs vs data ingestion layer |
| 13 | AI Capabilities | Split — bolt-on vs AI-native agents |
| 14 | Governance | Split — standard vs AI governance+monitoring |
| 15 | End-to-End Flow | Split — module handoffs vs unified AI flow |
| 16 | Advantages Summary | Full-width — differentiators table |
| 17 | Summary/CTA | Full-width — why choose AI BaoTech |

### Visual Design

- **Left column (BriteCore)**: Gray/slate (`#64748B`, `#94A3B8`) — traditional feel
- **Right column (AI BaoTech)**: Blue/cyan (`#0369A1`, `#0EA5E9`) — AI-native feel
- **Divider**: Subtle vertical line or gradient
- **Header**: Feature area name centered above both columns

## Implementation Considerations

- Slide reset on toggle (prevent out-of-bounds)
- `V` keyboard shortcut for power users
- Shared slides (V1 slide 02 reused in V2)
- Progress bar adapts to active deck's slide count
- `data-interactive` on toggle to prevent navigation

## Risks

- BriteCore info sourced from marketing page — may oversimplify their capabilities
- V2 content needs careful crafting to be fair yet highlight AI BaoTech advantages

## Next Steps

Create detailed implementation plan with phased approach.
