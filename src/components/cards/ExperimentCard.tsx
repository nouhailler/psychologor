import { Link } from 'react-router-dom';
import type { Experiment } from '../../models/types';
import styles from './TheoryCard.module.css';

interface ExperimentCardProps {
  experiment: Experiment;
  layout?: 'grid' | 'list';
}

export function ExperimentCard({ experiment, layout = 'grid' }: ExperimentCardProps) {
  return (
    <Link
      to={`/experiences/${experiment.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: experiment.accentColor }} />
      <p className="text-h4">{experiment.title}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{experiment.summary}</p>
      <div className={styles.footer}>
        <span className="text-caption">{experiment.researchers}</span>
        <span className="text-caption">{experiment.year}</span>
      </div>
    </Link>
  );
}
