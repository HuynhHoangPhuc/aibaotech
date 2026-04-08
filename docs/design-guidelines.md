# AI BaoTech Slide Deck - Design Guidelines

## Design Philosophy

**Style**: Trust & Authority | Enterprise Insurance/Fintech
**Tone**: Professional, innovative, trustworthy, enterprise-grade
**Audience**: IT architects + Insurance executives
**WCAG**: AAA target

---

## Color System

### Primary Palette (Insurance Platform)

| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#0369A1` | Headers, primary CTAs, key accent |
| Primary Light | `#0EA5E9` | Secondary elements, hover states |
| Primary Dark | `#0C4A6E` | Deep headings, emphasis text |
| Accent | `#16A34A` | Success states, positive metrics, data highlights |
| CTA/Highlight | `#F59E0B` | Call-to-action buttons, important badges, gold accents |
| Background | `#F0F9FF` | Slide backgrounds (light) |
| Surface | `#FFFFFF` | Cards, panels, content areas |
| Text Primary | `#0C4A6E` | Main body text |
| Text Secondary | `#64748B` | Captions, secondary labels |
| Muted | `#E7EFF5` | Dividers, subtle backgrounds |
| Border | `#BAE6FD` | Card borders, separators |
| Destructive | `#DC2626` | Alerts, risk indicators |

### Dark Slide Variants (for contrast slides)

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0F172A` | Dark slides (title, architecture overview) |
| Surface | `#1E293B` | Dark cards, panels |
| Text | `#F8FAFC` | White text on dark |
| Accent Glow | `#38BDF8` | Glowing highlights on dark bg |
| Gold | `#FBBF24` | Trust badges, premium accents |

### Gradient Definitions

```css
/* Hero/Title gradient */
--gradient-hero: linear-gradient(135deg, #0C4A6E 0%, #0369A1 50%, #0EA5E9 100%);

/* Accent gradient for CTAs */
--gradient-cta: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);

/* Subtle card gradient */
--gradient-card: linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%);

/* Architecture diagram gradient */
--gradient-arch: linear-gradient(180deg, #0F172A 0%, #1E3A5F 100%);
```

---

## Typography

### Font Stack: IBM Plex Sans (Primary)

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
```

### Type Scale (Slide-Optimized)

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Slide Title | 48px / 3rem | 700 (Bold) | 1.1 | -0.02em |
| Section Header | 36px / 2.25rem | 600 (SemiBold) | 1.2 | -0.01em |
| Subtitle | 24px / 1.5rem | 500 (Medium) | 1.3 | 0 |
| Body Large | 20px / 1.25rem | 400 (Regular) | 1.5 | 0.01em |
| Body | 18px / 1.125rem | 400 (Regular) | 1.6 | 0.01em |
| Caption | 14px / 0.875rem | 400 (Regular) | 1.5 | 0.02em |
| Badge/Label | 12px / 0.75rem | 600 (SemiBold) | 1.4 | 0.05em |
| Code/Technical | 16px / 1rem | 400 (Mono) | 1.5 | 0 |

### Secondary Font (Code/Data)

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');
```

Use `IBM Plex Mono` for: technical terms, code snippets, data labels, architecture component names.

---

## Layout Grid

### Slide Dimensions

- **Aspect Ratio**: 16:9
- **Resolution**: 1920 x 1080px (Full HD)
- **Safe Area**: 80px padding all sides
- **Content Area**: 1760 x 920px

### Grid System

- **Columns**: 12-column grid within content area
- **Gutter**: 24px
- **Column Width**: ~122px

### Common Layouts

| Layout | Description | Use For |
|--------|-------------|---------|
| Full-bleed | Edge-to-edge with overlay text | Title slides, hero visuals |
| 60/40 Split | Left content, right visual | Feature explanations |
| 40/60 Split | Left visual, right content | Architecture detail |
| 3-Column | Equal thirds | Comparing 3 items |
| 4-Column | Equal quarters | Agent cards, feature grid |
| Center Stage | Centered content, max-w 800px | Quotes, key statements |
| Diagram Full | Full content area | Architecture diagrams |

---

## Component Styles

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #BAE6FD;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(3, 105, 161, 0.08);
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(3, 105, 161, 0.12);
}
```

### Badges / Labels

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.badge-primary { background: #E0F2FE; color: #0369A1; }
.badge-accent  { background: #DCFCE7; color: #16A34A; }
.badge-warning { background: #FEF3C7; color: #92400E; }
.badge-dark    { background: #1E293B; color: #F8FAFC; }
```

### Architecture Diagram Nodes

```css
.arch-node {
  background: linear-gradient(135deg, #FFFFFF, #F0F9FF);
  border: 2px solid #0369A1;
  border-radius: 8px;
  padding: 16px 24px;
  font-weight: 600;
  color: #0C4A6E;
  box-shadow: 0 2px 8px rgba(3, 105, 161, 0.15);
}
.arch-connector {
  stroke: #0EA5E9;
  stroke-width: 2;
  marker-end: url(#arrowhead);
}
```

### Progress / Metric Bars

```css
.metric-bar {
  background: #E7EFF5;
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}
.metric-fill {
  background: linear-gradient(90deg, #0369A1, #0EA5E9);
  border-radius: 999px;
  height: 100%;
  transition: width 600ms ease-out;
}
```

### Slide Navigation

```css
.slide-nav {
  position: fixed;
  bottom: 24px;
  right: 40px;
  display: flex;
  gap: 8px;
  z-index: 100;
}
.slide-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #BAE6FD;
  transition: all 200ms ease;
}
.slide-dot.active {
  background: #0369A1;
  width: 32px;
  border-radius: 5px;
}
```

---

## Animation Guidelines

### Principles

1. **Purposeful**: Every animation conveys meaning (entrance, transition, emphasis)
2. **Subtle**: Max 300ms for micro-interactions, 500ms for slide transitions
3. **Performant**: Only animate `transform` and `opacity`
4. **Respectful**: Honor `prefers-reduced-motion`

### Slide Transitions

| Transition | Duration | Easing | Use For |
|------------|----------|--------|---------|
| Fade | 400ms | ease-in-out | Default slide transition |
| Slide Left | 500ms | cubic-bezier(0.4, 0, 0.2, 1) | Forward navigation |
| Slide Right | 500ms | cubic-bezier(0.4, 0, 0.2, 1) | Backward navigation |
| Scale Up | 400ms | ease-out | Zoom into detail |

### Content Entrance Animations

| Animation | Duration | Delay | Use For |
|-----------|----------|-------|---------|
| Fade Up | 300ms | stagger 50ms | List items, cards |
| Fade In | 200ms | 0 | Body text, captions |
| Scale In | 250ms | 100ms | Icons, badges |
| Draw Line | 600ms | 200ms | Connector lines, diagrams |
| Count Up | 800ms | 300ms | Metrics, numbers |

### Easing Functions

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);  /* Material standard */
--ease-enter: cubic-bezier(0, 0, 0.2, 1);       /* Decelerate */
--ease-exit: cubic-bezier(0.4, 0, 1, 1);        /* Accelerate */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy */
```

---

## Iconography

### Style

- **Library**: Lucide Icons (consistent stroke width, professional)
- **Stroke Width**: 1.5px (default) — clean, enterprise feel
- **Size**: 24px standard, 32px for emphasis, 48px for hero icons
- **Color**: Inherit from parent (follow semantic color tokens)

### Key Icons per Layer

| System Layer | Icons |
|-------------|-------|
| Data Sources | `database`, `server`, `users`, `credit-card`, `file-text` |
| ETL/Pipeline | `git-merge`, `arrow-right-left`, `workflow`, `refresh-cw` |
| Data Platform | `layers`, `hard-drive`, `database`, `cloud` |
| AI Agents | `bot`, `brain`, `shield-check`, `calculator`, `file-bar-chart` |
| Control Panel | `layout-dashboard`, `search`, `bar-chart-3`, `settings` |
| Operators | `user-cog`, `users`, `shield`, `headphones` |
| Governance | `lock`, `eye`, `clipboard-check`, `alert-triangle` |
| Communication | `mail`, `message-square`, `smartphone`, `bell` |

---

## Spacing System

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon-text gap |
| sm | 8px | Tight element spacing |
| md | 16px | Card internal padding |
| lg | 24px | Section gaps, card padding |
| xl | 32px | Major section separation |
| 2xl | 48px | Slide section breaks |
| 3xl | 64px | Hero spacing |
| 4xl | 80px | Slide edge padding |

---

## Data Visualization Colors

For charts and diagrams on slides:

| Sequence | Hex | Name |
|----------|-----|------|
| 1 | `#0369A1` | Primary Blue |
| 2 | `#0EA5E9` | Sky Blue |
| 3 | `#16A34A` | Success Green |
| 4 | `#F59E0B` | Amber Gold |
| 5 | `#8B5CF6` | Purple Tech |
| 6 | `#EC4899` | Pink |
| 7 | `#14B8A6` | Teal |
| 8 | `#F97316` | Orange |

Contrast ratio: All meet 3:1 minimum against white background.

---

## Responsive Behavior

While primarily 1920x1080, support browser resizing:

| Breakpoint | Behavior |
|------------|----------|
| >= 1920px | Full HD, native |
| 1440-1919px | Scale down proportionally |
| 1024-1439px | Reduce padding, compress grid |
| < 1024px | Stack layouts vertically, increase font relative size |

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use consistent blue/gold palette | Mix random colors |
| Keep text large and readable | Use text smaller than 14px |
| Use SVG icons from Lucide | Use emojis as structural icons |
| Animate on scroll/entrance only | Use continuous bouncing animations |
| Use white space generously | Overcrowd slides with content |
| Show architecture with clean diagrams | Use complex unreadable diagrams |
| Use dark slides for emphasis moments | Make all slides dark |
| Include Vietnamese terms for accuracy | Translate technical terms incorrectly |
