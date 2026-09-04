import { ArrowLeft, ArrowRight, Layers, Lightbulb, ScrollText, Swords, Telescope, Users } from 'lucide-react';
import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { getPsychologistSync, repository } from '../services/repository';
import NotFound from './NotFound';
import theoryStyles from './TheoryDetail.module.css';
import styles from './SchoolDetail.module.css';

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

export default function SchoolDetail() {
  const { id = '' } = useParams();
  const { data: school, loading } = useAsync(() => repository.getSchool(id), [id]);
  useRecordVisit(school?.id, 'school');

  const { data: founders } = useAsync(() => repository.getPsychologistsByIds(school?.founderIds ?? []), [school?.id]);
  const { data: representatives } = useAsync(() => repository.getPsychologistsBySchool(school?.id ?? ''), [school?.id]);
  const { data: theories } = useAsync(() => repository.getTheoriesBySchool(school?.id ?? ''), [school?.id]);
  const { data: concepts } = useAsync(() => repository.getConceptsBySchool(school?.id ?? ''), [school?.id]);
  const { data: works } = useAsync(() => repository.getWorksBySchool(school?.id ?? ''), [school?.id]);
  const { data: critiques } = useAsync(() => repository.getSchoolCritiques(school?.id ?? ''), [school?.id]);
  const { data: lineage } = useAsync(() => repository.getSchoolLineage(school?.id ?? ''), [school?.id]);
  const { data: descendants } = useAsync(() => repository.getDescendantSchools(school?.id ?? ''), [school?.id]);
  const { data: rivals } = useAsync(() => repository.getSchoolsByIds(school?.rivalSchoolIds ?? []), [school?.id]);
  const { data: approaches } = useAsync(() => repository.getApproachesBySchool(school?.id ?? ''), [school?.id]);

  if (loading) return <PageLoader />;
  if (!school) return <NotFound />;

  const founderIds = new Set(school.founderIds);
  const otherRepresentatives = (representatives ?? []).filter((p) => !founderIds.has(p.id));

  return (
    <article>
      <div
        className={theoryStyles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${school.color} 0%, color-mix(in srgb, ${school.color} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/courants" className={theoryStyles.backLink}>
            <ArrowLeft size={16} />
            Courants
          </Link>
          <p className={`text-label ${theoryStyles.eyebrow}`}>Courant de pensée</p>
          <h1 className={`text-display ${theoryStyles.title}`}>{school.name}</h1>
          <p className={`text-h4 ${theoryStyles.tagline}`} style={{ fontWeight: 400 }}>
            {school.summary}
          </p>
          <div className={theoryStyles.metaRow}>
            {(founders ?? []).map((p) => (
              <Link key={p.id} to={`/psychologues/${p.id}`} className={theoryStyles.metaItem} style={{ fontWeight: 600 }}>
                {p.name}
              </Link>
            ))}
            <span className={theoryStyles.metaItem}>{school.period}</span>
          </div>
        </div>
        <div className={theoryStyles.favoriteWrap}>
          <FavoriteButton entityId={school.id} entityType="school" label={school.name} />
        </div>
      </div>

      <div className="container">
        <div className="grid-two-col" style={{ paddingTop: 'var(--space-8)' }}>
          <div className={theoryStyles.body} style={{ paddingTop: 0 }}>
            <section className={theoryStyles.section}>
              <p className={`text-label ${theoryStyles.sectionTitle}`}>En bref</p>
              <p className="text-h3" style={{ fontWeight: 500, maxWidth: 640 }}>
                {school.description}
              </p>
            </section>

            <section className={theoryStyles.section}>
              <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Contexte historique</h2>
              <p className="text-body">{school.historicalContext}</p>
            </section>

            {lineage && lineage.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Lignée du courant</h2>
                <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Ses représentants dans l'ordre de leur naissance, jusqu'aux courants qu'ils ont contribué à faire naître.
                </p>
                <div className={styles.lineageRow}>
                  {lineage.map((p, i) => (
                    <Fragment key={p.id}>
                      {i > 0 && <ArrowRight size={14} className={styles.lineageArrow} aria-hidden="true" />}
                      <Link to={`/psychologues/${p.id}`} className={styles.lineageChip}>
                        <span className={styles.lineageAvatar} style={{ background: gradientFor(p.accentColor) }}>
                          {p.portraitUrl ? <img src={p.portraitUrl} alt="" className={styles.lineagePhoto} /> : p.portraitInitials}
                        </span>
                        {p.name}
                      </Link>
                    </Fragment>
                  ))}
                  {(descendants ?? []).map((s) => (
                    <Fragment key={s.id}>
                      <ArrowRight size={14} className={styles.lineageArrow} aria-hidden="true" />
                      <Link to={`/courants/${s.id}`} className={`${styles.lineageChip} ${styles.lineageChipSchool}`}>
                        <span className={styles.lineageDot} style={{ background: s.color }} />
                        {s.shortName}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </section>
            )}

            {founders && founders.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Fondateurs</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {founders.map((p) => (
                    <RelationshipCard key={p.id} to={`/psychologues/${p.id}`} icon={<Layers size={18} />} title={p.name} subtitle={`${p.birth}–${p.death ?? ''}`} />
                  ))}
                </div>
              </section>
            )}

            {otherRepresentatives.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Principaux représentants</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {otherRepresentatives.map((p) => (
                    <RelationshipCard key={p.id} to={`/psychologues/${p.id}`} icon={<Users size={18} />} title={p.name} subtitle={`${p.birth}–${p.death ?? ''}`} />
                  ))}
                </div>
              </section>
            )}

            {theories && theories.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Théories</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {theories.map((t) => (
                    <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<Layers size={18} />} title={t.name} subtitle={t.tagline} />
                  ))}
                </div>
              </section>
            )}

            {concepts && concepts.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Concepts fondamentaux</h2>
                <div className="chip-row">
                  {concepts.map((c) => (
                    <ConceptChip key={c.id} concept={c} />
                  ))}
                </div>
              </section>
            )}

            {works && works.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Œuvres</h2>
                <div className={styles.workList}>
                  {works.map((w) => {
                    const author = w.psychologistIds[0] ? getPsychologistSync(w.psychologistIds[0]) : undefined;
                    return (
                      <Link key={w.id} to={`/oeuvres/${w.id}`} className={styles.workItem}>
                        <ScrollText size={16} color="var(--color-text-tertiary)" />
                        <span>
                          <span className="text-body-sm" style={{ fontWeight: 600 }}>{w.title}</span>
                          <span className="text-caption">
                            {' '}
                            — {author?.name}
                            {w.year ? `, ${w.year}` : ''}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {critiques && critiques.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Critiques et limites</h2>
                {critiques.map((c, i) => (
                  <div key={i} className={theoryStyles.critiqueItem}>
                    <p className="text-body-sm">{c}</p>
                  </div>
                ))}
              </section>
            )}

            <section className={theoryStyles.section}>
              <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Héritage</h2>
              <p className="text-body">{school.legacy}</p>
            </section>

            {rivals && rivals.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Courants concurrents</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {rivals.map((s) => (
                    <RelationshipCard key={s.id} to={`/courants/${s.id}`} icon={<Swords size={18} />} title={s.name} subtitle={s.period} />
                  ))}
                </div>
              </section>
            )}

            {descendants && descendants.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Courants descendants</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {descendants.map((s) => (
                    <RelationshipCard key={s.id} to={`/courants/${s.id}`} icon={<Lightbulb size={18} />} title={s.name} subtitle={s.period} />
                  ))}
                </div>
              </section>
            )}

            {approaches && approaches.length > 0 && (
              <section className={theoryStyles.section}>
                <h2 className={`text-h2 ${theoryStyles.sectionTitle}`}>Approches contemporaines</h2>
                <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Ce courant historique, plutôt qu'un simple souvenir, continue d'alimenter ces angles d'analyse mobilisés aujourd'hui.
                </p>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {approaches.map((a) => (
                    <RelationshipCard key={a.id} to={`/approches/${a.id}`} icon={<Telescope size={18} />} title={a.name} subtitle={a.shortDefinition} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={theoryStyles.sidebar}>
            <div className={theoryStyles.infoBlock}>
              <Link
                to={`/comparaison?type=schools&id=${school.id}`}
                className="text-body-sm text-accent"
                style={{ fontWeight: 600 }}
              >
                Comparer avec un autre courant →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
