---
phase: 4
title: V2 Slides 4-9 (Architecture thru Underwriting)
status: completed
priority: medium
effort: L
blockedBy: [phase-01, phase-02]
---

# Phase 4: V2 Comparison Slides 4-9

## Overview
Six split-screen comparison slides using ComparisonSlideLayout. Each contrasts BriteCore's traditional approach (left/gray) with AI BaoTech's AI-native approach (right/blue).

## Files to Create
- `slide-deck/src/slides/v2/04-architecture-compare.tsx`
- `slide-deck/src/slides/v2/05-policy-compare.tsx`
- `slide-deck/src/slides/v2/06-product-rating-compare.tsx`
- `slide-deck/src/slides/v2/07-claims-compare.tsx`
- `slide-deck/src/slides/v2/08-billing-compare.tsx`
- `slide-deck/src/slides/v2/09-underwriting-compare.tsx`

## Files to Modify
- `slide-deck/src/slides/v2/index.ts` — add imports

## Context Files
- `slide-deck/src/components/ComparisonSlideLayout.tsx` — layout to use
- V1 slides for AI BaoTech content: 05, 06, 07, 10, 11, 12, 13

## Content Specifications

### Slide 4: Architecture Comparison

**Title**: "System Architecture"

**Left (BriteCore):**
- Cloud-native on AWS
- Module-based: separate Policy, Billing, Claims systems
- Traditional database per module
- API layer connecting modules
- Configuration-driven customization

**Right (AI BaoTech):**
- 6-layer unified AI-native architecture
- Canonical Data Platform (single source of truth)
- AI Agent layer (fraud, pricing, underwriting)
- Communication layer (REST, gRPC, Events)
- Governance & monitoring built-in
- Self-coordinating, not just connected

**Icons**: Layers (left), Brain (right)

### Slide 5: Policy Management

**Title**: "Policy Management"

**Left (BriteCore):**
- End-to-end policy lifecycle management
- Config-based rules engine
- Manual workflows for endorsements
- Template-driven policy documents
- Human review for all changes

**Right (AI BaoTech):**
- AI-driven policy lifecycle
- Self-tuning risk models
- Automated endorsement processing
- Dynamic document generation
- AI-assisted review, human override

**Icons**: FileText (left), Sparkles (right)

### Slide 6: Product Definition & Rating

**Title**: "Product & Rating"

**Left (BriteCore):**
- Point-and-click product builder
- Manual rate table management
- Periodic rate filing updates
- Static coverage configurations
- Actuarial team manages rates

**Right (AI BaoTech):**
- AI Pricing Agent
- Dynamic risk-based pricing
- Real-time market signal integration
- Self-adjusting coverage options
- Continuous model retraining

**Icons**: Settings (left), TrendingUp (right)

### Slide 7: Claims Management

**Title**: "Claims Processing"

**Left (BriteCore):**
- End-to-end claims workflow
- Manual adjuster assignment
- Rule-based fraud flags
- Document collection workflows
- Reporting dashboards

**Right (AI BaoTech):**
- AI Claims + Fraud Detection Agent
- ML-powered fraud scoring pipeline
- Behavioral pattern analysis
- Automated triage & routing
- Real-time anomaly detection

**Icons**: Shield (left), ShieldAlert (right)

### Slide 8: Billing

**Title**: "Billing & Financial"

**Left (BriteCore):**
- Advanced billing & accounts receivable
- Standard payment processing
- Commission management
- Financial & regulatory reporting
- Out-of-the-box report templates

**Right (AI BaoTech):**
- AI-powered billing optimization
- Predictive payment behavior modeling
- Actuarial reporting integration
- Real-time financial dashboards
- Automated regulatory compliance

**Icons**: CreditCard (left), BarChart2 (right)

### Slide 9: Underwriting

**Title**: "Underwriting"

**Left (BriteCore):**
- Manual underwriting workflows
- Rules-based risk assessment
- Human-driven risk selection
- Static underwriting guidelines
- Periodic guideline updates

**Right (AI BaoTech):**
- AI Underwriting Agent
- ML risk assessment models
- Data-enriched decisioning
- Dynamic guideline adaptation
- Continuous learning from outcomes

**Icons**: ClipboardCheck (left), Brain (right)

## Slide Component Pattern

Each slide follows identical pattern:

```tsx
import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { motion } from 'framer-motion';
import { fadeUp, staggerFast } from '../../lib/animations';
import { IconLeft, IconRight } from 'lucide-react';

const leftItems = ['item1', 'item2', ...];
const rightItems = ['item1', 'item2', ...];

function BulletList({ items, icon: Icon, color }: { items: string[], icon: any, color: string }) {
  return (
    <motion.ul variants={staggerFast} initial="hidden" animate="show" 
      style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <motion.li key={i} variants={fadeUp} style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          marginBottom: 14, fontSize: 15, lineHeight: 1.5,
        }}>
          <Icon size={16} color={color} style={{ marginTop: 3, flexShrink: 0 }} />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function SlideXX() {
  return (
    <ComparisonSlideLayout
      title="Feature Area"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<BulletList items={leftItems} icon={IconLeft} color="#94A3B8" />}
      rightContent={<BulletList items={rightItems} icon={IconRight} color="#0EA5E9" />}
    />
  );
}
```

**DRY consideration**: The BulletList pattern repeats across all 12 comparison slides. Extract as shared util if repeated >3 times. Could be part of ComparisonSlideLayout exports or a separate `comparison-bullet-list.tsx`.

## Success Criteria
- [ ] All 6 slides render with correct split-screen layout
- [ ] Left columns consistently gray/slate
- [ ] Right columns consistently blue/cyan
- [ ] Content accurately represents BriteCore vs AI BaoTech
- [ ] Animations stagger correctly
- [ ] v2/index.ts updated with all 6 imports
