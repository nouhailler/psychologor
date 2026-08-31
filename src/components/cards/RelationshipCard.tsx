import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './RelationshipCard.module.css';

interface RelationshipCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

export function RelationshipCard({ to, icon, title, subtitle }: RelationshipCardProps) {
  return (
    <Link to={to} className={styles.row}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.info}>
        <p className={`text-body-sm ${styles.title}`} style={{ color: 'var(--color-text)', fontWeight: 600 }}>
          {title}
        </p>
        {subtitle && <p className="text-caption">{subtitle}</p>}
      </span>
      <ChevronRight size={18} color="var(--color-text-tertiary)" />
    </Link>
  );
}
