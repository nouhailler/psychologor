import { Link } from 'react-router-dom';
import type { Theory } from '../../models/types';
import { getPsychologistSync, getSchoolSync } from '../../services/repository';
import styles from './TheoryCard.module.css';

interface TheoryCardProps {
  theory: Theory;
  layout?: 'grid' | 'list';
}

export function TheoryCard({ theory, layout = 'grid' }: TheoryCardProps) {
  const school = theory.schoolIds[0] ? getSchoolSync(theory.schoolIds[0]) : undefined;
  const author = theory.psychologistIds[0] ? getPsychologistSync(theory.psychologistIds[0]) : undefined;

  return (
    <Link
      to={`/theories/${theory.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: school?.color ?? 'var(--color-primary)' }} />
      <p className="text-h4">{theory.name}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{theory.tagline}</p>
      <div className={styles.footer}>
        <span className="text-caption">{author?.name}</span>
        <span className="text-caption">{theory.period}</span>
      </div>
    </Link>
  );
}
