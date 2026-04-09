import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { FileText, Sparkles } from 'lucide-react';

const leftItems = [
  'End-to-end policy lifecycle management',
  'Config-based rules engine',
  'Manual workflows for endorsements',
  'Template-driven policy documents',
  'Human review for all changes',
];

const rightItems = [
  'AI-driven policy lifecycle automation',
  'Self-tuning risk models',
  'Automated endorsement processing',
  'Dynamic document generation',
  'AI-assisted review with human override',
];

export default function Slide05PolicyCompare() {
  return (
    <ComparisonSlideLayout
      title="Policy Management"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={FileText} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Sparkles} color="#0EA5E9" />}
    />
  );
}
