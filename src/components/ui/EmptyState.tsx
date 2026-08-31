import type { ReactNode } from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className={styles.wrap} role="status">
      <div className={styles.icon}>{icon}</div>
      <h3 className={`text-h4 ${styles.title}`}>{title}</h3>
      {description && <p className={`text-body-sm ${styles.description}`}>{description}</p>}
      {action}
    </div>
  );
}
