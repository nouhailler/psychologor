import { Link } from 'react-router-dom';
import type { HistoricalEvent } from '../../models/types';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  event: HistoricalEvent;
  to: string;
  isLast?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

const TYPE_LABELS: Record<HistoricalEvent['type'], string> = {
  birth: 'Naissance',
  death: 'Mort',
  publication: 'Publication',
  event: 'Événement',
  institution: 'Institution',
};

export function TimelineItem({ event, to, isLast, orientation = 'vertical' }: TimelineItemProps) {
  const isHorizontal = orientation === 'horizontal';
  return (
    <div className={`${styles.item} ${isHorizontal ? styles.horizontal : ''}`}>
      <div className={styles.rail}>
        <span className={styles.dot} />
        {!isLast && <span className={styles.line} />}
      </div>
      <Link to={to} className={styles.card}>
        <p className={`text-label ${styles.year}`}>
          {event.year} · {TYPE_LABELS[event.type]}
        </p>
        <p className="text-h4" style={{ margin: '6px 0' }}>
          {event.title}
        </p>
        <p className="text-body-sm">{event.description}</p>
      </Link>
    </div>
  );
}
