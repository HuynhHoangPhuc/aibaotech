import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { ClipboardCheck, Brain } from 'lucide-react';

const leftItems = [
  'Manual underwriting workflows',
  'Rules-based risk assessment',
  'Human-driven risk selection',
  'Static underwriting guidelines',
  'Periodic guideline updates',
];

const rightItems = [
  'AI Underwriting Agent',
  'ML risk assessment models',
  'Data-enriched decisioning',
  'Dynamic guideline adaptation',
  'Continuous learning from outcomes',
];

export default function Slide09UnderwritingCompare() {
  return (
    <ComparisonSlideLayout
      title="Underwriting"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={ClipboardCheck} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Brain} color="#0EA5E9" />}
    />
  );
}
