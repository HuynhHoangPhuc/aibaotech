import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Layers, Brain } from 'lucide-react';

const leftItems = [
  'Cloud-native on AWS infrastructure',
  'Module-based: separate Policy, Billing, Claims',
  'Traditional database per module',
  'API layer connecting modules',
  'Configuration-driven customization',
];

const rightItems = [
  '6-layer unified AI-native architecture',
  'Canonical Data Platform — single source of truth',
  'AI Agent layer: fraud, pricing, underwriting',
  'Communication layer: REST, gRPC, Events',
  'Self-coordinating, not just connected',
];

export default function Slide04ArchitectureCompare() {
  return (
    <ComparisonSlideLayout
      title="System Architecture"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Layers} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={Brain} color="#0EA5E9" />}
    />
  );
}
