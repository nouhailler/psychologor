import { Link } from 'react-router-dom';
import type { Approach } from '../../models/types';
import styles from './TheoryCard.module.css';

interface ApproachCardProps {
  approach: Approach;
  layout?: 'grid' | 'list';
}

export function ApproachCard({ approach, layout = 'grid' }: ApproachCardProps) {
  return (
    <Link
      to={`/approches/${approach.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: approach.accentColor }} />
      <p className="text-h4">{approach.name}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{approach.shortDefinition}</p>
    </Link>
  );
}
