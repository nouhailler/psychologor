import { History } from 'lucide-react';
import { useMemo, useState } from 'react';
import { TimelineItem } from '../components/cards/TimelineItem';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { repository } from '../services/repository';
import styles from './Timeline.module.css';

const TYPE_FILTERS: { id: string; label: string }[] = [
  { id: 'all', label: 'Tout' },
  { id: 'publication', label: 'Publications' },
  { id: 'event', label: 'Événements' },
  { id: 'institution', label: 'Institutions' },
];

export default function Timeline() {
  const { data: events } = useAsync(() => repository.getAllEvents(), []);
  const { data: schools } = useAsync(() => repository.getAllSchools(), []);
  const [typeFilter, setTypeFilter] = useState('all');
  const [schoolFilter, setSchoolFilter] = useState<string | null>(null);
  const isDesktop = useIsDesktop();

  const filtered = useMemo(() => {
    let list = events ?? [];
    if (typeFilter !== 'all') list = list.filter((e) => e.type === typeFilter);
    if (schoolFilter) list = list.filter((e) => e.relatedSchoolIds.includes(schoolFilter));
    return list;
  }, [events, typeFilter, schoolFilter]);

  const eventLink = (event: (typeof filtered)[number]) => {
    if (event.relatedPsychologistIds[0]) return `/psychologues/${event.relatedPsychologistIds[0]}`;
    if (event.relatedTheoryIds[0]) return `/theories/${event.relatedTheoryIds[0]}`;
    return '/chronologie';
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Chronologie
        </h1>
        <p className="text-body-sm">L'histoire de la psychologie, des premiers laboratoires aux thérapies contemporaines.</p>
      </div>

      <div className={styles.filterRow}>
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`${styles.filterChip} ${typeFilter === f.id ? styles.active : ''}`}
            onClick={() => setTypeFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
        <span style={{ width: 1, background: 'var(--color-border)', margin: '0 4px' }} />
        {(schools ?? []).map((s) => (
          <button
            key={s.id}
            type="button"
            className={`${styles.filterChip} ${schoolFilter === s.id ? styles.active : ''}`}
            onClick={() => setSchoolFilter(schoolFilter === s.id ? null : s.id)}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <EmptyState icon={<History size={24} />} title="Aucun événement" description="Aucun événement ne correspond à ces filtres." />
      )}

      {filtered.length > 0 && isDesktop && (
        <div className={styles.horizontalScroll}>
          {filtered.map((event, i) => (
            <TimelineItem key={event.id} event={event} to={eventLink(event)} orientation="horizontal" isLast={i === filtered.length - 1} />
          ))}
        </div>
      )}

      {filtered.length > 0 && !isDesktop && (
        <div className={styles.verticalList}>
          {filtered.map((event, i) => (
            <TimelineItem key={event.id} event={event} to={eventLink(event)} isLast={i === filtered.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
}
