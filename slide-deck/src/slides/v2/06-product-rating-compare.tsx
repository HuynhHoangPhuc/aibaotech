import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Settings, TrendingUp } from 'lucide-react';

const leftItems = [
  'Point-and-click product builder',
  'Manual rate table management',
  'Periodic rate filing updates',
  'Static coverage configurations',
  'Actuarial team manages rates',
];

const rightItems = [
  'AI Pricing Agent with dynamic models',
  'Real-time risk-based pricing',
  'Market signal integration',
  'Self-adjusting coverage options',
  'Continuous model retraining',
];

export default function Slide06ProductRatingCompare() {
  return (
    <ComparisonSlideLayout
      title="Product & Rating"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Settings} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={TrendingUp} color="#0EA5E9" />}
    />
  );
}
