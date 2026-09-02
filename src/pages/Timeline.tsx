import { ArrowLeft, ChevronDown, History, LayoutList, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { TimelineItem } from '../components/cards/TimelineItem';
import { EmptyState } from '../components/ui/EmptyState';
import { eras } from '../data/eras';
import { useAsync } from '../hooks/useAsync';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { getSchoolSync, repository } from '../services/repository';
import styles from './Timeline.module.css';

const TYPE_FILTERS: { id: string; label: string }[] = [
  { id: 'all', label: 'Tout' },
  { id: 'publication', label: 'Publications' },
  { id: 'event', label: 'Événements' },
  { id: 'institution', label: 'Institutions' },
];

type Mode = 'editorial' | 'classique';

export default function Timeline() {
  const { data: events } = useAsync(() => repository.getAllEvents(), []);
  const { data: schools } = useAsync(() => repository.getAllSchools(), []);
  const [mode, setMode] = useState<Mode>('editorial');
  const [selectedEraId, setSelectedEraId] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState('all');
  const [schoolFilter, setSchoolFilter] = useState<string | null>(null);
  const isDesktop = useIsDesktop();

  const filtered = useMemo(() => {
    let list = events ?? [];
    if (typeFilter !== 'all') list = list.filter((e) => e.type === typeFilter);
    if (schoolFilter) list = list.filter((e) => e.relatedSchoolIds.includes(schoolFilter));
    return list;
  }, [events, typeFilter, schoolFilter]);

  const selectedEra = eras.find((e) => e.id === selectedEraId);
  const eraEvents = useMemo(() => {
    if (!selectedEra || !events) return [];
    return events.filter((e) => e.year >= selectedEra.yearStart && e.year <= selectedEra.yearEnd);
  }, [selectedEra, events]);
  const eraSchools = (selectedEra?.schoolIds ?? []).map(getSchoolSync).filter(Boolean);

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Chronologie
        </h1>
        <p className="text-body-sm">L'histoire de la psychologie, des premiers laboratoires aux thérapies contemporaines.</p>
      </div>

      <div className={styles.modeToggle} role="tablist" aria-label="Mode d'affichage">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'editorial'}
          className={`${styles.modeButton} ${mode === 'editorial' ? styles.active : ''}`}
          onClick={() => setMode('editorial')}
        >
          <Sparkles size={15} />
          De Freud à aujourd'hui
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'classique'}
          className={`${styles.modeButton} ${mode === 'classique' ? styles.active : ''}`}
          onClick={() => setMode('classique')}
        >
          <LayoutList size={15} />
          Chronologie complète
        </button>
      </div>

      {mode === 'editorial' && !selectedEra && (
        <div className={styles.eraSection}>
          <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: 620 }}>
            Six grandes périodes, du premier laboratoire de psychologie expérimentale aux neurosciences cognitives. Cliquez sur une période pour l'explorer en détail.
          </p>
          <div className={styles.eraChain}>
            {eras.map((era, i) => (
              <div key={era.id} className={styles.eraStep}>
                {i > 0 && <ChevronDown size={18} className={styles.eraConnector} aria-hidden="true" />}
                <button type="button" className={styles.eraCard} onClick={() => setSelectedEraId(era.id)} style={{ '--era-accent': era.accentColor } as React.CSSProperties}>
                  <span className={styles.eraBar} />
                  <span className={styles.eraBody}>
                    <span className={`text-label ${styles.eraRange}`}>{era.rangeLabel}</span>
                    <span className="text-h3" style={{ display: 'block', margin: '4px 0 8px' }}>{era.title}</span>
                    <span className="text-body-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {era.synopsis.slice(0, 140)}…
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === 'editorial' && selectedEra && (
        <div className={styles.eraDetail}>
          <button type="button" className={styles.backLink} onClick={() => setSelectedEraId(null)}>
            <ArrowLeft size={16} />
            Toutes les périodes
          </button>

          <span className={styles.eraDetailBar} style={{ background: selectedEra.accentColor, marginBottom: 'var(--space-4)' }} />
          <p className={`text-label ${styles.eraRange}`}>{selectedEra.rangeLabel}</p>
          <h2 className="text-h1" style={{ margin: '4px 0 var(--space-4)' }}>{selectedEra.title}</h2>
          <p className="text-body" style={{ maxWidth: 640, marginBottom: 'var(--space-6)' }}>{selectedEra.synopsis}</p>

          {eraSchools.length > 0 && (
            <div className="chip-row" style={{ marginBottom: 'var(--space-8)' }}>
              {eraSchools.map((s) => (
                <Link key={s!.id} to={`/courants/${s!.id}`} className={styles.eraSchoolChip}>
                  {s!.shortName}
                </Link>
              ))}
            </div>
          )}

          {eraEvents.length === 0 ? (
            <EmptyState icon={<History size={24} />} title="Aucun événement daté" description="Cette période n'a pas encore d'événement chronologique associé." />
          ) : isDesktop ? (
            <div className={styles.horizontalScroll}>
              {eraEvents.map((event, i) => (
                <TimelineItem key={event.id} event={event} to={`/evenements/${event.id}`} orientation="horizontal" isLast={i === eraEvents.length - 1} />
              ))}
            </div>
          ) : (
            <div className={styles.verticalList}>
              {eraEvents.map((event, i) => (
                <TimelineItem key={event.id} event={event} to={`/evenements/${event.id}`} isLast={i === eraEvents.length - 1} />
              ))}
            </div>
          )}
        </div>
      )}

      {mode === 'classique' && (
        <>
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
                <TimelineItem key={event.id} event={event} to={`/evenements/${event.id}`} orientation="horizontal" isLast={i === filtered.length - 1} />
              ))}
            </div>
          )}

          {filtered.length > 0 && !isDesktop && (
            <div className={styles.verticalList}>
              {filtered.map((event, i) => (
                <TimelineItem key={event.id} event={event} to={`/evenements/${event.id}`} isLast={i === filtered.length - 1} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
