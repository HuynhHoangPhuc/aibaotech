---
phase: 6
title: V2 Slides 16-17 (Advantages Summary, CTA)
status: completed
priority: medium
effort: S
blockedBy: [phase-01]
---

# Phase 6: V2 Closing Slides (16-17)

## Overview
Two full-width closing slides for V2: competitive advantages summary table and final CTA.

## Files to Create
- `slide-deck/src/slides/v2/16-advantages-summary.tsx`
- `slide-deck/src/slides/v2/17-summary-cta.tsx`

## Files to Modify
- `slide-deck/src/slides/v2/index.ts` — finalize all 17 slide imports

## Context Files
- `slide-deck/src/slides/21-competitive-advantages.tsx` — V1 pattern reference
- `slide-deck/src/slides/22-summary.tsx` — V1 closing pattern reference

## Implementation Steps

### Slide 16: Advantages Summary (`16-advantages-summary.tsx`)

Full-width comparison table. SlideLayout variant="dark".

**Layout:**
- Eyebrow: "Why AI-Native Wins" (13px, uppercase, monospace)
- Title: "Competitive Advantages" (36px, white)
- Comparison table below

**Table Structure:**

| Dimension | BriteCore | AI BaoTech | Winner |
|-----------|-----------|------------|--------|
| Architecture | Cloud-native, modular | AI-native, unified 6-layer | AI BaoTech |
| Policy Mgmt | Config-based rules | AI-driven, self-tuning | AI BaoTech |
| Claims | Workflow-based | ML fraud detection + auto-triage | AI BaoTech |
| Pricing | Point-click rate tables | AI Pricing Agent, real-time | AI BaoTech |
| Underwriting | Manual + rules | AI Underwriting Agent | AI BaoTech |
| Data | Per-module BI | Canonical Data Platform | AI BaoTech |
| AI Strategy | Bolt-on, optional | Native, purpose-built agents | AI BaoTech |
| Portals | 3 separate portals | Unified control panel | AI BaoTech |

**Table Styling:**
- Full width, padding 0 48px
- Header row: 13px, uppercase, monospace, #64748B, border-bottom 1px #1E293B
- BriteCore column: 14px, color #94A3B8
- AI BaoTech column: 14px, color #0EA5E9
- Winner column: small checkmark icon + "AI BaoTech" in #16A34A (green)
- Row height: ~44px, border-bottom 1px rgba(255,255,255,0.05)
- Alternate row subtle bg: rgba(255,255,255,0.02)

**Animation**: staggerContainer → each row fadeUp with staggerFast.

### Slide 17: Summary/CTA (`17-summary-cta.tsx`)

Full-width closing slide. SlideLayout variant="gradient".

Based on V1 slide 22 pattern but reframed for competitive context.

**Content:**
- Eyebrow: "The Future of Insurance"
- Title: "AI-Native > Cloud-Native" (48px, white, bold)
- Subtitle: "BriteCore modernized the infrastructure. AI BaoTech modernizes the intelligence." (20px, rgba(255,255,255,0.8))
- Three key stats/highlights in a row:
  - "6-Layer Architecture" / "Unified AI stack"
  - "3 AI Agents" / "Fraud, Pricing, Underwriting"
  - "1 Platform" / "End-to-end AI operations"
- Bottom CTA area: "Ready to leap beyond traditional?" (18px)
- Decorative elements: gradient bar, subtle grid pattern (match V1 title style)

**Stat Card Styling:**
- 3 cards in flex row, gap 24px, centered
- Each card: 200px wide, text-align center
- Metric: 28px, font-weight 700, white
- Label: 13px, rgba(255,255,255,0.6)
- Border: 1px solid rgba(255,255,255,0.15), border-radius 12px, padding 20px

### Finalize `v2/index.ts`

Complete import list for all 17 slides:

```tsx
import TitleV2 from './01-title-v2';
import Slide02 from '../02-the-problem';
import BritecoreOverview from './03-britecore-overview';
import ArchitectureCompare from './04-architecture-compare';
import PolicyCompare from './05-policy-compare';
import ProductRatingCompare from './06-product-rating-compare';
import ClaimsCompare from './07-claims-compare';
import BillingCompare from './08-billing-compare';
import UnderwritingCompare from './09-underwriting-compare';
import PortalsCompare from './10-portals-compare';
import DataAnalyticsCompare from './11-data-analytics-compare';
import IntegrationsCompare from './12-integrations-compare';
import AiCapabilitiesCompare from './13-ai-capabilities-compare';
import GovernanceCompare from './14-governance-compare';
import EndToEndCompare from './15-end-to-end-compare';
import AdvantagesSummary from './16-advantages-summary';
import SummaryCta from './17-summary-cta';

export const slidesV2: React.FC[] = [
  TitleV2,
  Slide02,
  BritecoreOverview,
  ArchitectureCompare,
  PolicyCompare,
  ProductRatingCompare,
  ClaimsCompare,
  BillingCompare,
  UnderwritingCompare,
  PortalsCompare,
  DataAnalyticsCompare,
  IntegrationsCompare,
  AiCapabilitiesCompare,
  GovernanceCompare,
  EndToEndCompare,
  AdvantagesSummary,
  SummaryCta,
];
```

## Success Criteria
- [ ] Advantages table renders all 8 comparison rows
- [ ] Winner column shows green checkmarks
- [ ] CTA slide has gradient variant with stats
- [ ] v2/index.ts exports exactly 17 slides
- [ ] Full V2 deck navigable start to finish
- [ ] Toggle between V1 (22 slides) and V2 (17 slides) works smoothly
