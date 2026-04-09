import { motion } from 'framer-motion';
import { fadeUp, staggerFast } from '../lib/animations';
import type { LucideIcon } from 'lucide-react';

interface ComparisonBulletListProps {
  items: string[];
  icon: LucideIcon;
  color: string;
}

export function ComparisonBulletList({ items, icon: Icon, color }: ComparisonBulletListProps) {
  return (
    <motion.ul
      variants={staggerFast}
      initial="hidden"
      animate="show"
      style={{ listStyle: 'none', padding: 0, margin: 0 }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          variants={fadeUp}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 14,
            fontSize: 15,
            lineHeight: 1.5,
          }}
        >
          <Icon size={16} color={color} style={{ marginTop: 3, flexShrink: 0 }} />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
