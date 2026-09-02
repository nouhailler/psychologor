import { Link } from 'react-router-dom';
import type { Work } from '../../models/types';
import { getPsychologistSync, getSchoolSync } from '../../services/repository';
import styles from './TheoryCard.module.css';

interface WorkCardProps {
  work: Work;
  layout?: 'grid' | 'list';
}

export function WorkCard({ work, layout = 'grid' }: WorkCardProps) {
  const author = work.psychologistIds[0] ? getPsychologistSync(work.psychologistIds[0]) : undefined;
  const school = author?.schoolIds[0] ? getSchoolSync(author.schoolIds[0]) : undefined;

  return (
    <Link
      to={`/oeuvres/${work.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: school?.color ?? 'var(--color-primary)' }} />
      <p className="text-h4">{work.title}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{work.description}</p>
      <div className={styles.footer}>
        <span className="text-caption">{author?.name}</span>
        <span className="text-caption">{work.year}</span>
      </div>
    </Link>
  );
}
