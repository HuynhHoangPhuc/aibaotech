import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { BarChart2, Database } from 'lucide-react';

const leftItems = [
  'BI and Analytics module',
  'Ad-hoc reporting with full data access',
  'Financial and regulatory report templates',
  'Per-module data stores',
  'Standard business intelligence tools',
];

const rightItems = [
  'Canonical Data Platform — unified model',
  'AI-powered predictive analytics',
  'Real-time streaming insights',
  'Cross-domain data correlation',
  'ML-driven anomaly detection',
];

export default function Slide11DataAnalyticsCompare() {
  return (
    <ComparisonSlideLayout
      title="Data & Analytics"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={BarChart2} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Database} color="#0EA5E9" />}
    />
  );
}
