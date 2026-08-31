import { Link } from 'react-router-dom';
import type { Psychologist } from '../../models/types';
import { getSchoolSync } from '../../services/repository';
import styles from './PersonCard.module.css';

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

interface PersonCardProps {
  psychologist: Psychologist;
  layout?: 'grid' | 'list';
}

export function PersonCard({ psychologist, layout = 'grid' }: PersonCardProps) {
  const mainSchool = psychologist.schoolIds[0] ? getSchoolSync(psychologist.schoolIds[0]) : undefined;
  const years = `${psychologist.birth}–${psychologist.death ?? ''}`;

  if (layout === 'list') {
    return (
      <Link to={`/psychologues/${psychologist.id}`} className={styles.list}>
        <div className={styles.listAvatar} style={{ background: gradientFor(psychologist.accentColor) }}>
          {psychologist.portraitUrl ? (
            <img src={psychologist.portraitUrl} alt="" loading="lazy" className={styles.listPhoto} />
          ) : (
            psychologist.portraitInitials
          )}
        </div>
        <div className={styles.listInfo}>
          <p className="text-h4" style={{ marginBottom: 2 }}>
            {psychologist.name}
          </p>
          <p className="text-caption">
            {years} · {mainSchool?.shortName ?? psychologist.nationality}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/psychologues/${psychologist.id}`} className={`${styles.card} ${styles.grid}`}>
      <div className={styles.portrait} style={{ background: gradientFor(psychologist.accentColor) }}>
        {psychologist.portraitUrl ? (
          <img src={psychologist.portraitUrl} alt="" loading="lazy" className={styles.photo} />
        ) : (
          psychologist.portraitInitials
        )}
      </div>
      <div className={styles.body}>
        <p className={`text-h4 ${styles.name}`}>{psychologist.name}</p>
        <p className="text-caption">{years}</p>
        {mainSchool && (
          <p className="text-caption" style={{ color: 'var(--color-primary)', marginTop: 4 }}>
            {mainSchool.shortName}
          </p>
        )}
      </div>
    </Link>
  );
}
