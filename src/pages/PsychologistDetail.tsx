import { ArrowLeft, BookOpen, Brain, Sparkles, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { TheoryCard } from '../components/cards/TheoryCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { getSchoolSync } from '../services/repository';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './PsychologistDetail.module.css';

function gradientFor(color: string) {
  return `radial-gradient(120% 140% at 50% -10%, ${color} 0%, color-mix(in srgb, ${color} 40%, #120c26) 55%, #0d0920 100%)`;
}

export default function PsychologistDetail() {
  const { id = '' } = useParams();
  const { data: psychologist, loading } = useAsync(() => repository.getPsychologist(id), [id]);
  useRecordVisit(psychologist?.id, 'psychologist');

  const { data: influencedBy } = useAsync(
    () => repository.getPsychologistsByIds(psychologist?.influencedByIds ?? []),
    [psychologist?.id],
  );
  const { data: influenced } = useAsync(
    () => repository.getPsychologistsByIds(psychologist?.influencedIds ?? []),
    [psychologist?.id],
  );
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(psychologist?.theoryIds ?? []), [psychologist?.id]);
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(psychologist?.conceptIds ?? []), [psychologist?.id]);
  const { data: works } = useAsync(() => repository.getWorksByIds(psychologist?.workIds ?? []), [psychologist?.id]);
  const { data: quotes } = useAsync(() => repository.getQuotesByIds(psychologist?.quoteIds ?? []), [psychologist?.id]);

  if (loading) return <PageLoader />;
  if (!psychologist) return <NotFound />;

  const schools = psychologist.schoolIds.map((sid) => getSchoolSync(sid)).filter(Boolean);

  return (
    <article>
      <div className={styles.hero} style={{ background: gradientFor(psychologist.accentColor) }}>
        <div className="container-narrow" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/explorer" className={styles.backLink}>
            <ArrowLeft size={16} />
            Explorer
          </Link>
          <div className={styles.portrait} style={{ background: 'hsl(0 0% 100% / 0.12)' }}>
            {psychologist.portraitInitials}
          </div>
          <h1 className={`text-display ${styles.name}`}>{psychologist.name}</h1>
          <p className={`text-h4 ${styles.dates}`} style={{ fontWeight: 400 }}>
            {psychologist.birth}–{psychologist.death ?? ''} · {psychologist.nationality}
          </p>
          <div className={styles.schoolChips}>
            {schools.map((s) => s && <span key={s.id} className={styles.schoolChip}>{s.shortName}</span>)}
          </div>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={psychologist.id} entityType="psychologist" label={psychologist.name} />
        </div>
      </div>

      <div className="container">
        <div className="grid-two-col" style={{ paddingTop: 'var(--space-8)' }}>
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <section className={styles.section}>
              <p className={`text-label ${styles.sectionTitle}`}>En bref</p>
              <p className="text-h3" style={{ fontWeight: 500, maxWidth: 640 }}>
                {psychologist.summary}
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Biographie</h2>
              {psychologist.biography.map((p, i) => (
                <p key={i} className={`text-body ${styles.bioParagraph}`}>
                  {p}
                </p>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Formation et carrière</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <p className="text-label" style={{ marginBottom: 8 }}>Formation</p>
                  <p className="text-body-sm">{psychologist.education}</p>
                </div>
                <div className={styles.infoBlock}>
                  <p className="text-label" style={{ marginBottom: 8 }}>Carrière</p>
                  <p className="text-body-sm">{psychologist.career}</p>
                </div>
              </div>
            </section>

            {influencedBy && influencedBy.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Influences</h2>
                <div className={styles.relationGrid}>
                  {influencedBy.map((p) => (
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
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Théories</h2>
                <div className="scroll-row" style={{ margin: 0, padding: 0 }}>
                  {theories.map((t) => (
                    <TheoryCard key={t.id} theory={t} />
                  ))}
                </div>
              </section>
            )}

            {concepts && concepts.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Concepts majeurs</h2>
                <div className="chip-row">
                  {concepts.map((c) => (
                    <ConceptChip key={c.id} concept={c} />
                  ))}
                </div>
              </section>
            )}

            {works && works.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Œuvres majeures</h2>
                {works.map((w) => (
                  <div key={w.id} className={styles.workItem}>
                    <p className="text-h4" style={{ marginBottom: 4 }}>
                      {w.title} <span className="text-caption">— {w.year}</span>
                    </p>
                    {w.description && <p className="text-body-sm">{w.description}</p>}
                  </div>
                ))}
              </section>
            )}

            {quotes && quotes.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Citations</h2>
                {quotes.map((q) => (
                  <blockquote key={q.id} className={styles.quoteBlock}>
                    <p className={styles.quoteText}>« {q.text} »</p>
                    <p className="text-caption">
                      {q.source}
                      {q.year ? `, ${q.year}` : ''}
                    </p>
                  </blockquote>
                ))}
              </section>
            )}

            {psychologist.timeline.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Chronologie</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {psychologist.timeline.map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <span className="text-label" style={{ minWidth: 56, color: 'var(--color-primary)' }}>
                        {t.year}
                      </span>
                      <span className="text-body-sm">{t.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {influenced && influenced.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>A influencé</h2>
                <div className={styles.relationGrid}>
                  {influenced.map((p) => (
                    <RelationshipCard
                      key={p.id}
                      to={`/psychologues/${p.id}`}
                      icon={<Sparkles size={18} />}
                      title={p.name}
                      subtitle={`${p.birth}–${p.death ?? ''}`}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <p className="text-label" style={{ marginBottom: 12 }}>
                <Brain size={14} style={{ verticalAlign: -2, marginRight: 6 }} />
                Repères
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="text-caption">Naissance</span>
                  <span className="text-body-sm">{psychologist.birth}</span>
                </div>
                {psychologist.death && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="text-caption">Mort</span>
                    <span className="text-body-sm">{psychologist.death}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="text-caption">Nationalité</span>
                  <span className="text-body-sm">{psychologist.nationality}</span>
                </div>
              </div>
            </div>
            {theories && theories.length > 0 && (
              <div className={styles.infoBlock}>
                <p className="text-label" style={{ marginBottom: 12 }}>
                  <BookOpen size={14} style={{ verticalAlign: -2, marginRight: 6 }} />
                  Théories liées
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {theories.map((t) => (
                    <Link key={t.id} to={`/theories/${t.id}`} className="text-body-sm text-accent">
                      {t.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
