import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Cpu, Brain } from 'lucide-react';

const leftItems = [
  '"Flexible architecture for AI experimentation"',
  'AI as optional add-on capability',
  'Bring-your-own ML models',
  'No native AI agents',
  'Traditional rules plus optional AI layer',
];

const rightItems = [
  'AI-native from ground up',
  'Purpose-built agents: Fraud, Pricing, Underwriting',
  'Continuous model retraining',
  'Human-in-the-loop governance',
  'AI coordinates all operations end-to-end',
];

export default function Slide13AiCapabilitiesCompare() {
  return (
    <ComparisonSlideLayout
      title="AI & Intelligence"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Cpu} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Brain} color="#0EA5E9" />}
    />
  );
}
