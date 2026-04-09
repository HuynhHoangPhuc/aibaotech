import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Plug, GitBranch } from 'lucide-react';

const leftItems = [
  'Prebuilt integrations ecosystem',
  'Comprehensive REST APIs',
  'Standard webhook support',
  'Third-party marketplace',
  'Manual integration configuration',
];

const rightItems = [
  'Multi-source data ingestion layer',
  'REST + gRPC + Event-driven protocols',
  'AI-orchestrated data pipelines',
  'Real-time streaming integrations',
  'Self-healing connection management',
];

export default function Slide12IntegrationsCompare() {
  return (
    <ComparisonSlideLayout
      title="Integration & APIs"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Plug} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={GitBranch} color="#0EA5E9" />}
    />
  );
}
