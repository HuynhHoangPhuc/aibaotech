import { ComparisonSlideLayout } from '../../components/ComparisonSlideLayout';
import { ComparisonBulletList } from '../../components/comparison-bullet-list';
import { Monitor, LayoutDashboard } from 'lucide-react';

const leftItems = [
  'Agent Portal: web-based quoting and policy management',
  'Policyholder Portal: self-service with native mobile app',
  'Insurer Portal: configurable, permission-based access',
  'Three separate portal experiences',
  'Responsive web design',
];

const rightItems = [
  'Unified Control Panel for all user roles',
  'AI-assisted decision dashboards',
  'Real-time operational insights',
  'Single pane of glass across operations',
  'AI-personalized interface per role',
];

export default function Slide10PortalsCompare() {
  return (
    <ComparisonSlideLayout
      title="Portals & User Experience"
      leftTitle="BriteCore"
      leftSubtitle="Traditional Approach"
      rightTitle="AI BaoTech"
      rightSubtitle="AI-Native Approach"
      leftContent={<ComparisonBulletList items={leftItems} icon={Monitor} color="#94A3B8" />}
      rightContent={<ComparisonBulletList items={rightItems} icon={LayoutDashboard} color="#0EA5E9" />}
    />
  );
}
