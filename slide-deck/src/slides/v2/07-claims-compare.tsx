import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Shield, ShieldAlert } from 'lucide-react';

const leftItems = [
  'End-to-end claims workflow',
  'Manual adjuster assignment',
  'Rule-based fraud flags',
  'Document collection workflows',
  'Standard reporting dashboards',
];

const rightItems = [
  'AI Claims + Fraud Detection Agent',
  'ML-powered fraud scoring pipeline',
  'Behavioral pattern analysis',
  'Automated triage and routing',
  'Real-time anomaly detection',
];

export default function Slide07ClaimsCompare() {
  return (
    <ComparisonSlideLayout
      title="Claims Processing"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Shield} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={ShieldAlert} color="#0EA5E9" />}
    />
  );
}
