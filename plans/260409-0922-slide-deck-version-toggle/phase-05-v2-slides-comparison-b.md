---
phase: 5
title: V2 Slides 10-15 (Portals thru End-to-End Flow)
status: completed
priority: medium
effort: L
blockedBy: [phase-01, phase-02]
---

# Phase 5: V2 Comparison Slides 10-15

## Overview
Six split-screen comparison slides continuing the BriteCore vs AI BaoTech analysis. Uses ComparisonSlideLayout, same BulletList pattern as Phase 4.

## Files to Create
- `slide-deck/src/slides/v2/10-portals-compare.tsx`
- `slide-deck/src/slides/v2/11-data-analytics-compare.tsx`
- `slide-deck/src/slides/v2/12-integrations-compare.tsx`
- `slide-deck/src/slides/v2/13-ai-capabilities-compare.tsx`
- `slide-deck/src/slides/v2/14-governance-compare.tsx`
- `slide-deck/src/slides/v2/15-end-to-end-compare.tsx`

## Files to Modify
- `slide-deck/src/slides/v2/index.ts` — add imports

## Context Files
- `slide-deck/src/components/ComparisonSlideLayout.tsx`
- V1 slides for AI BaoTech content: 15, 17, 18, 19, 20

## Content Specifications

### Slide 10: Portals & UX

**Title**: "Portals & User Experience"

**Left (BriteCore):**
- Agent Portal: web-based quoting & policy management
- Policyholder Portal: self-service + native mobile app
- Insurer Portal: configurable, permission-based
- Three separate portal experiences
- Responsive web design

**Right (AI BaoTech):**
- Unified Control Panel for all user roles
- AI-assisted decision dashboards
- Real-time operational insights
- Single pane of glass across operations
- AI-personalized interface per role

**Icons**: Monitor (left), Layout (right)

### Slide 11: Data & Analytics

**Title**: "Data & Analytics"

**Left (BriteCore):**
- BI & Analytics module
- Ad-hoc reporting with full data access
- Financial & regulatory report templates
- Per-module data stores
- Standard business intelligence tools

**Right (AI BaoTech):**
- Canonical Data Platform (unified model)
- AI-powered predictive analytics
- Real-time streaming insights
- Cross-domain data correlation
- ML-driven anomaly detection

**Icons**: BarChart2 (left), Database (right)

### Slide 12: Integrations

**Title**: "Integration & APIs"

**Left (BriteCore):**
- Prebuilt integrations ecosystem
- Comprehensive REST APIs
- Standard webhook support
- Third-party marketplace
- Manual integration configuration

**Right (AI BaoTech):**
- Multi-source data ingestion layer
- REST + gRPC + Event-driven protocols
- AI-orchestrated data pipelines
- Real-time streaming integrations
- Self-healing connection management

**Icons**: Plug (left), GitBranch (right)

### Slide 13: AI Capabilities

**Title**: "AI & Intelligence"

**Left (BriteCore):**
- "Flexible architecture for AI experimentation"
- AI as optional add-on capability
- Bring-your-own ML models
- No native AI agents
- Traditional rules + optional AI layer

**Right (AI BaoTech):**
- AI-native from ground up
- Purpose-built agents: Fraud, Pricing, Underwriting
- Continuous model retraining
- Human-in-the-loop governance
- AI coordinates all operations end-to-end

**Icons**: Cpu (left), Brain (right)

### Slide 14: Governance & Compliance

**Title**: "Governance & Monitoring"

**Left (BriteCore):**
- Permission-based access controls
- Financial & regulatory reporting
- Audit trail logging
- Standard compliance workflows
- Manual monitoring processes

**Right (AI BaoTech):**
- AI Governance layer (dedicated)
- Real-time model performance monitoring
- Automated bias detection
- Explainable AI decision audit
- Continuous compliance verification

**Icons**: Lock (left), Eye (right)

### Slide 15: End-to-End Flow

**Title**: "End-to-End Operations"

**Left (BriteCore):**
- Module-to-module handoffs
- Policy → Billing → Claims (sequential)
- Manual workflow orchestration
- Department-based process ownership
- Integration layer connecting silos

**Right (AI BaoTech):**
- Unified AI-coordinated flow
- Data ingestion → AI analysis → Decision → Action
- Autonomous process orchestration
- AI agents collaborate in real-time
- Single governance layer across all operations

**Icons**: ArrowRight (left), Workflow (right) — use GitMerge if Workflow unavailable

## Component Pattern

Same BulletList pattern as Phase 4. If BulletList was extracted as shared component in Phase 4, import it. Otherwise extract it now (DRY — used in 12 total slides).

## Success Criteria
- [ ] All 6 slides render with correct split-screen layout
- [ ] Content accurately contrasts BriteCore vs AI BaoTech
- [ ] Consistent styling with Phase 4 slides
- [ ] v2/index.ts updated with all imports
- [ ] BulletList component shared (not duplicated per slide)
