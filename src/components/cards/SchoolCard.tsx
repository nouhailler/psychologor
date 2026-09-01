import { Link } from 'react-router-dom';
import type { School } from '../../models/types';
import styles from './TheoryCard.module.css';

interface SchoolCardProps {
  school: School;
  layout?: 'grid' | 'list';
}

export function SchoolCard({ school, layout = 'grid' }: SchoolCardProps) {
  return (
    <Link
      to={`/courants/${school.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: school.color }} />
      <p className="text-h4">{school.name}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{school.summary}</p>
      <div className={styles.footer}>
        <span className="text-caption">{school.period}</span>
      </div>
    </Link>
  );
}
