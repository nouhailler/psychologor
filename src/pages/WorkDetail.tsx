import { ArrowLeft, BookOpen, ScrollText, Sparkles, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { getSchoolSync, repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './ConceptDetail.module.css';
import workStyles from './WorkDetail.module.css';

export default function WorkDetail() {
  const { id = '' } = useParams();
  const { data: work, loading } = useAsync(() => repository.getWork(id), [id]);
  useRecordVisit(work?.id, 'work');

  const { data: authors } = useAsync(() => repository.getPsychologistsByIds(work?.psychologistIds ?? []), [work?.id]);
  const authorTheoryIds = Array.from(new Set((authors ?? []).flatMap((p) => p.theoryIds)));
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(authorTheoryIds), [work?.id, authors]);
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(work?.conceptIds ?? []), [work?.id]);
  const { data: relatedWorks } = useAsync(() => repository.getWorksByIds(work?.relatedWorkIds ?? []), [work?.id]);

  if (loading) return <PageLoader />;
  if (!work) return <NotFound />;

  const primaryAuthor = authors?.[0];
  const school = primaryAuthor?.schoolIds[0] ? getSchoolSync(primaryAuthor.schoolIds[0]) : undefined;

  return (
    <div className="container-narrow">
      <div className={styles.header}>
        <Link to="/explorer" className={styles.backLink}>
          <ArrowLeft size={16} />
          Explorer
        </Link>
        <div className={styles.termRow}>
          <div>
            <p className="text-label" style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              Œuvre · {work.year}
              {school && (
                <>
                  <span aria-hidden="true">·</span>
                  <Link to={`/courants/${school.id}`} className="text-accent" style={{ fontWeight: 600 }}>
                    {school.shortName}
                  </Link>
                </>
              )}
            </p>
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

      <section className={workStyles.whyItMatters}>
        <p className={`text-label ${workStyles.whyItMattersLabel}`}>Pourquoi cette œuvre est importante ?</p>
        <p className="text-body">{work.whyItMatters}</p>
      </section>

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Contexte historique</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{work.historicalContext}</p>
      </section>

      {work.themes.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Thèmes</h2>
          <div className="chip-row">
            {work.themes.map((theme) => (
              <span key={theme} className={workStyles.themeChip}>{theme}</span>
            ))}
          </div>
        </section>
      )}

      {concepts && concepts.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Concepts introduits</h2>
          <div className="chip-row">
            {concepts.map((c) => (
              <ConceptChip key={c.id} concept={c} />
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Réception</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{work.reception}</p>
      </section>

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Influence</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{work.influence}</p>
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

      {relatedWorks && relatedWorks.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Œuvres liées</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {relatedWorks.map((w) => (
              <RelationshipCard key={w.id} to={`/oeuvres/${w.id}`} icon={<ScrollText size={18} />} title={w.title} subtitle={w.year} />
            ))}
          </div>
        </section>
      )}

      <Link
        to={`/carte?mode=ego&type=work&id=${work.id}`}
        className="text-body-sm text-accent"
        style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
      >
        <Sparkles size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
        Explorer autour de {work.title} →
      </Link>
    </div>
  );
}
