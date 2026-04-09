import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { ArrowRight, GitMerge } from 'lucide-react';

const leftItems = [
  'Module-to-module handoffs',
  'Policy, Billing, Claims in sequence',
  'Manual workflow orchestration',
  'Department-based process ownership',
  'Integration layer connecting silos',
];

const rightItems = [
  'Unified AI-coordinated flow',
  'Data ingestion to AI analysis to action',
  'Autonomous process orchestration',
  'AI agents collaborate in real-time',
  'Single governance layer across all operations',
];

export default function Slide15EndToEndCompare() {
  return (
    <ComparisonSlideLayout
      title="End-to-End Operations"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={ArrowRight} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={GitMerge} color="#0EA5E9" />}
    />
  );
}
