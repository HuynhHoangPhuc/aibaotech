import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { CreditCard, BarChart2 } from 'lucide-react';

const leftItems = [
  'Advanced billing and accounts receivable',
  'Standard payment processing',
  'Commission management',
  'Financial and regulatory reporting',
  'Out-of-the-box report templates',
];

const rightItems = [
  'AI-powered billing optimization',
  'Predictive payment behavior modeling',
  'Actuarial reporting integration',
  'Real-time financial dashboards',
  'Automated regulatory compliance',
];

export default function Slide08BillingCompare() {
  return (
    <ComparisonSlideLayout
      title="Billing & Financial"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={CreditCard} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={BarChart2} color="#0EA5E9" />}
    />
  );
}
