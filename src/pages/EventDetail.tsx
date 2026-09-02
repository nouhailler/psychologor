import { ArrowLeft, BookOpen, Landmark, Lightbulb, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './ConceptDetail.module.css';

const TYPE_LABELS: Record<string, string> = {
  birth: 'Naissance',
  death: 'Mort',
  publication: 'Publication',
  event: 'Événement',
  institution: 'Institution',
};

export default function EventDetail() {
  const { id = '' } = useParams();
  const { data: event, loading } = useAsync(() => repository.getEvent(id), [id]);
  useRecordVisit(event?.id, 'event');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(event?.relatedPsychologistIds ?? []),
    [event?.id],
  );
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(event?.relatedTheoryIds ?? []), [event?.id]);
  const { data: schools } = useAsync(() => repository.getSchoolsByIds(event?.relatedSchoolIds ?? []), [event?.id]);
  const { data: work } = useAsync(() => (event?.workId ? repository.getWork(event.workId) : Promise.resolve(null)), [event?.id]);

  if (loading) return <PageLoader />;
  if (!event) return <NotFound />;

  return (
    <div className="container-narrow">
      <div className={styles.header}>
        <Link to="/chronologie" className={styles.backLink}>
          <ArrowLeft size={16} />
          Chronologie
        </Link>
        <div className={styles.termRow}>
          <div>
            <p className="text-label" style={{ marginBottom: 8 }}>
              {TYPE_LABELS[event.type]} · {event.year}
            </p>
            <h1 className={`text-display ${styles.term}`}>{event.title}</h1>
          </div>
          <FavoriteButton entityId={event.id} entityType="event" label={event.title} />
        </div>
      </div>

      <section className={styles.section}>
        <p className="text-label" style={{ marginBottom: 8 }}>En bref</p>
        <p className="text-h3" style={{ fontWeight: 500, maxWidth: 640 }}>{event.description}</p>
      </section>

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Contexte historique</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{event.historicalContext}</p>
      </section>

      {work && (
        <div className={styles.originBlock}>
          <p className="text-label" style={{ marginBottom: 6 }}>Œuvre correspondante</p>
          <Link to={`/oeuvres/${work.id}`} className="text-body-sm text-accent" style={{ fontWeight: 600 }}>
            {work.title} →
          </Link>
        </div>
      )}

      {psychologists && psychologists.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Personnes liées</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {psychologists.map((p) => (
              <RelationshipCard
                key={p.id}
                to={`/psychologues/${p.id}`}
                icon={<Users size={18} />}
                title={p.name}
                subtitle={`${p.birth}–${p.death ?? ''}`}
              />
            ))}
          </div>
        </section>
      )}

      {theories && theories.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Théories liées</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {theories.map((t) => (
              <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<BookOpen size={18} />} title={t.name} subtitle={t.tagline} />
            ))}
          </div>
        </section>
      )}

      {schools && schools.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Courants liés</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {schools.map((s) => (
              <RelationshipCard key={s.id} to={`/courants/${s.id}`} icon={<Landmark size={18} />} title={s.name} subtitle={s.period} />
            ))}
          </div>
        </section>
      )}

      <Link
        to={`/carte?mode=ego&type=event&id=${event.id}`}
        className="text-body-sm text-accent"
        style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
      >
        <Lightbulb size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
        Explorer autour de {event.title} →
      </Link>
    </div>
  );
}
