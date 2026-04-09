import { motion } from 'framer-motion';
import {
  FileText,
  CreditCard,
  Shield,
  Settings,
  Users,
  Smartphone,
  Monitor,
  BarChart2,
  FolderOpen,
  Brain,
  Plug,
  Cloud,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SlideLayout } from '../../components/SlideLayout';
import { fadeUp, fadeIn, staggerContainer, staggerFast } from '../../lib/animations';

interface Module {
  icon: LucideIcon;
  label: string;
  detail: string;
}

const modules: Module[] = [
  { icon: FileText,   label: 'Policy Management',    detail: 'End-to-end, config-based' },
  { icon: CreditCard, label: 'Billing',               detail: 'Advanced billing & AR' },
  { icon: Shield,     label: 'Claims',                detail: 'Workflow-based processing' },
  { icon: Settings,   label: 'Product & Rating',      detail: 'Point-and-click definition' },
  { icon: Users,      label: 'Agent Portal',          detail: 'Web-based quoting' },
  { icon: Smartphone, label: 'Policyholder Portal',   detail: 'Self-service + mobile app' },
  { icon: Monitor,    label: 'Insurer Portal',        detail: 'Permission-based access' },
  { icon: BarChart2,  label: 'BI & Analytics',        detail: 'Ad-hoc reporting' },
  { icon: FolderOpen, label: 'Document Mgmt',         detail: 'Integrated storage' },
  { icon: Brain,      label: 'AI (Bolt-on)',           detail: '"Flexible architecture"' },
  { icon: Plug,       label: 'APIs & Integrations',   detail: 'Prebuilt integrations' },
  { icon: Cloud,      label: 'AWS Cloud',             detail: 'Cloud-native infra' },
];

export default function BritecoreOverview() {
  return (
    <SlideLayout variant="dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '36px 64px 56px',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} style={{ textAlign: 'center', marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#94A3B8',
            }}
          >
            The Incumbent
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#F8FAFC',
            textAlign: 'center',
            letterSpacing: '-0.01em',
            marginBottom: 6,
            lineHeight: 1.1,
          }}
        >
          BriteCore Platform
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          style={{
            fontSize: '15px',
            color: '#64748B',
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Cloud-Native Policy Administration System
        </motion.p>

        {/* Module grid — 4 columns × 3 rows */}
        <motion.div
          variants={staggerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            flex: 1,
          }}
        >
          {modules.map(({ icon: Icon, label, detail }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '16px 12px',
                borderRadius: 8,
                background: 'rgba(100,116,139,0.06)',
                border: '1px solid rgba(100,116,139,0.15)',
                textAlign: 'center',
              }}
            >
              <Icon size={24} color="#94A3B8" />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#CBD5E1',
                  lineHeight: 1.3,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#64748B',
                  lineHeight: 1.4,
                }}
              >
                {detail}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Source note */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 48,
          fontStyle: 'italic',
          fontSize: '11px',
          color: '#475569',
        }}
      >
        Source: britecore.com/platform
      </motion.div>
    </SlideLayout>
  );
}
