import { Link } from 'react-router-dom';
import type { Method } from '../../models/types';
import { METHOD_CATEGORY_LABELS } from '../../data/methods';
import styles from './TheoryCard.module.css';

interface MethodCardProps {
  method: Method;
  layout?: 'grid' | 'list';
}

export function MethodCard({ method, layout = 'grid' }: MethodCardProps) {
  return (
    <Link
      to={`/methodes/${method.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: method.accentColor }} />
      <p className="text-h4">{method.name}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{method.shortDefinition}</p>
      <div className={styles.footer}>
        <span className="text-caption">{METHOD_CATEGORY_LABELS[method.category]}</span>
      </div>
    </Link>
  );
}
