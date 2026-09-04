import { Link } from 'react-router-dom';
import type { Experiment } from '../../models/types';
import styles from './TheoryCard.module.css';

interface ExperimentCardProps {
  experiment: Experiment;
  layout?: 'grid' | 'list';
}

const ROBUSTNESS_COLORS: Record<'robuste' | 'nuance' | 'conteste', string> = {
  robuste: 'var(--color-success)',
  nuance: '#c4632f',
  conteste: 'var(--color-danger)',
};

const ROBUSTNESS_LABELS: Record<'robuste' | 'nuance' | 'conteste', string> = {
  robuste: 'Robuste',
  nuance: 'Nuancé',
  conteste: 'Contesté',
};

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
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {experiment.robustness && (
            <span
              className="text-caption"
              style={{
                fontWeight: 700,
                color: ROBUSTNESS_COLORS[experiment.robustness.status],
              }}
            >
              {ROBUSTNESS_LABELS[experiment.robustness.status]}
            </span>
          )}
          <span className="text-caption">{experiment.year}</span>
        </span>
      </div>
    </Link>
  );
}
