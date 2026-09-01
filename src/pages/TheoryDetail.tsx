import { ArrowLeft, Layers } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { GenesisChain } from '../components/ui/GenesisChain';
import { KeyTakeaways } from '../components/ui/KeyTakeaways';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { getSchoolSync } from '../services/repository';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './TheoryDetail.module.css';

export default function TheoryDetail() {
  const { id = '' } = useParams();
  const { data: theory, loading } = useAsync(() => repository.getTheory(id), [id]);
  useRecordVisit(theory?.id, 'theory');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(theory?.psychologistIds ?? []),
    [theory?.id],
  );
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(theory?.conceptIds ?? []), [theory?.id]);
  const { data: relatedTheories } = useAsync(
    () => repository.getTheoriesByIds(theory?.relatedTheoryIds ?? []),
    [theory?.id],
  );

  if (loading) return <PageLoader />;
  if (!theory) return <NotFound />;

  const school = theory.schoolIds[0] ? getSchoolSync(theory.schoolIds[0]) : undefined;
  const accentColor = school?.color ?? '#6B4EDB';

  return (
    <article>
      <div
        className={styles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${accentColor} 0%, color-mix(in srgb, ${accentColor} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/explorer" className={styles.backLink}>
            <ArrowLeft size={16} />
            Explorer
          </Link>
          <p className={`text-label ${styles.eyebrow}`}>{school?.name ?? 'Théorie'}</p>
          <h1 className={`text-display ${styles.title}`}>{theory.name}</h1>
          <p className={`text-h4 ${styles.tagline}`} style={{ fontWeight: 400 }}>
            {theory.tagline}
          </p>
          <div className={styles.metaRow}>
            {psychologists?.map((p) => (
              <Link key={p.id} to={`/psychologues/${p.id}`} className={styles.metaItem} style={{ fontWeight: 600 }}>
                {p.name}
              </Link>
            ))}
            <span className={styles.metaItem}>{theory.period}</span>
          </div>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={theory.id} entityType="theory" label={theory.name} />
        </div>
      </div>

      <div className="container">
        <div className="grid-two-col" style={{ paddingTop: 'var(--space-8)' }}>
          <div className={styles.body} style={{ paddingTop: 0 }}>
            <section className={styles.section}>
              <p className={`text-label ${styles.sectionTitle}`}>En bref</p>
              <p className="text-h3" style={{ fontWeight: 500, maxWidth: 640 }}>
                {theory.summary}
              </p>
            </section>

            <KeyTakeaways
              items={theory.principles.slice(0, 3)}
              accentColor={accentColor}
              keywords={[
                ...(concepts ?? []).map((c) => c.term),
                ...(relatedTheories ?? []).map((t) => t.name),
              ].slice(0, 6)}
              associations={[
                {
                  label: 'Personnes associées',
                  items: (psychologists ?? []).map((p) => ({ id: p.id, name: p.name, href: `/psychologues/${p.id}` })),
                },
                {
                  label: 'Théories associées',
                  items: (relatedTheories ?? []).map((t) => ({ id: t.id, name: t.name, href: `/theories/${t.id}` })),
                },
              ]}
            />

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Principes fondamentaux</h2>
              <div className={styles.principleList}>
                {theory.principles.map((p, i) => (
                  <div key={i} className={styles.principleItem}>
                    <span className={styles.principleNumber}>{i + 1}</span>
                    <p className="text-body-sm" style={{ paddingTop: 2 }}>
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {concepts && concepts.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Concepts clés</h2>
                <div className="chip-row">
                  {concepts.map((c) => (
                    <ConceptChip key={c.id} concept={c} />
                  ))}
                </div>
              </section>
            )}

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Applications</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {theory.applications.map((a, i) => (
                  <li key={i} className="text-body-sm" style={{ paddingLeft: 'var(--space-4)', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>—</span>
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            <GenesisChain target={{ type: 'theory', id: theory.id }} />

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Évolution</h2>
              <p className="text-body">{theory.evolution}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`text-h2 ${styles.sectionTitle}`}>Critiques et limites</h2>
              {theory.critiques.map((c, i) => (
                <div key={i} className={styles.critiqueItem}>
                  <p className="text-body-sm">{c}</p>
                </div>
              ))}
            </section>

            {psychologists && psychologists.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Psychologues associés</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {psychologists.map((p) => (
                    <RelationshipCard
                      key={p.id}
                      to={`/psychologues/${p.id}`}
                      icon={<Layers size={18} />}
                      title={p.name}
                      subtitle={`${p.birth}–${p.death ?? ''}`}
                    />
                  ))}
                </div>
              </section>
            )}

            {relatedTheories && relatedTheories.length > 0 && (
              <section className={styles.section}>
                <h2 className={`text-h2 ${styles.sectionTitle}`}>Théories connexes</h2>
                <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                  {relatedTheories.map((t) => (
                    <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<Layers size={18} />} title={t.name} subtitle={t.tagline} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <p className="text-label" style={{ marginBottom: 12 }}>Comparaison rapide</p>
              <table className={styles.comparisonTable}>
                <tbody>
                  <tr>
                    <th>Objet d'étude</th>
                    <td>{theory.comparison.objectOfStudy}</td>
                  </tr>
                  <tr>
                    <th>Méthode clé</th>
                    <td>{theory.comparison.keyMethod}</td>
                  </tr>
                </tbody>
              </table>
              <Link
                to={`/comparaison?type=theories&id=${theory.id}`}
                className="text-body-sm text-accent"
                style={{ display: 'inline-block', marginTop: 'var(--space-4)', fontWeight: 600 }}
              >
                Comparer avec une autre théorie →
              </Link>
              <Link
                to={`/carte?mode=ego&type=theory&id=${theory.id}`}
                className="text-body-sm text-accent"
                style={{ display: 'block', marginTop: 'var(--space-2)', fontWeight: 600 }}
              >
                Explorer autour de {theory.name} →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
