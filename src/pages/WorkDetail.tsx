import { ArrowLeft, BookOpen, Lightbulb, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './ConceptDetail.module.css';

export default function WorkDetail() {
  const { id = '' } = useParams();
  const { data: work, loading } = useAsync(() => repository.getWork(id), [id]);
  useRecordVisit(work?.id, 'work');

  const { data: authors } = useAsync(() => repository.getPsychologistsByIds(work?.psychologistIds ?? []), [work?.id]);

  const authorTheoryIds = Array.from(new Set((authors ?? []).flatMap((p) => p.theoryIds)));
  const authorConceptIds = Array.from(new Set((authors ?? []).flatMap((p) => p.conceptIds)));
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(authorTheoryIds), [work?.id, authors]);
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(authorConceptIds), [work?.id, authors]);

  if (loading) return <PageLoader />;
  if (!work) return <NotFound />;

  return (
    <div className="container-narrow">
      <div className={styles.header}>
        <Link to="/explorer" className={styles.backLink}>
          <ArrowLeft size={16} />
          Explorer
        </Link>
        <div className={styles.termRow}>
          <div>
            <p className="text-label" style={{ marginBottom: 8 }}>Œuvre · {work.year}</p>
            <h1 className={`text-display ${styles.term}`}>{work.title}</h1>
            {work.originalTitle && (
              <p className={`text-h4 ${styles.shortDef}`} style={{ fontWeight: 400, color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                {work.originalTitle}
              </p>
            )}
          </div>
          <FavoriteButton entityId={work.id} entityType="work" label={work.title} />
        </div>
      </div>

      {work.description && (
        <section className={styles.section}>
          <p className="text-label" style={{ marginBottom: 8 }}>En bref</p>
          <p className="text-h3" style={{ fontWeight: 500, maxWidth: 640 }}>{work.description}</p>
        </section>
      )}

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Contexte historique</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{work.historicalContext}</p>
      </section>

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Postérité</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{work.legacy}</p>
      </section>

      {authors && authors.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>
            {authors.length > 1 ? 'Auteurs' : 'Auteur'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {authors.map((p) => (
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
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>
            {authors && authors.length > 1 ? 'Théories des auteurs' : "Théorie de l'auteur"}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {theories.map((t) => (
              <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<BookOpen size={18} />} title={t.name} subtitle={t.tagline} />
            ))}
          </div>
        </section>
      )}

      {concepts && concepts.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>
            {authors && authors.length > 1 ? 'Concepts clés des auteurs' : "Concepts clés de l'auteur"}
          </h2>
          <div className="chip-row">
            {concepts.map((c) => (
              <ConceptChip key={c.id} concept={c} />
            ))}
          </div>
        </section>
      )}

      <Link
        to={`/carte?mode=ego&type=work&id=${work.id}`}
        className="text-body-sm text-accent"
        style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
      >
        <Lightbulb size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
        Explorer autour de {work.title} →
      </Link>
    </div>
  );
}
