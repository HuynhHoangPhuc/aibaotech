import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Lock, Eye } from 'lucide-react';

const leftItems = [
  'Permission-based access controls',
  'Financial and regulatory reporting',
  'Audit trail logging',
  'Standard compliance workflows',
  'Manual monitoring processes',
];

const rightItems = [
  'AI Governance layer — dedicated system',
  'Real-time model performance monitoring',
  'Automated bias detection',
  'Explainable AI decision audit',
  'Continuous compliance verification',
];

export default function Slide14GovernanceCompare() {
  return (
    <ComparisonSlideLayout
      title="Governance & Monitoring"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Lock} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Eye} color="#0EA5E9" />}
    />
  );
}
