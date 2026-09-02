import { AlertTriangle, ArrowLeft, ClipboardList, FlaskConical, Lightbulb, Sparkles, Target } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { KeyTakeaways } from '../components/ui/KeyTakeaways';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './ExperimentDetail.module.css';

export default function ExperimentDetail() {
  const { id = '' } = useParams();
  const { data: experiment, loading } = useAsync(() => repository.getExperiment(id), [id]);
  useRecordVisit(experiment?.id, 'experiment');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(experiment?.psychologistIds ?? []),
    [experiment?.id],
  );
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(experiment?.conceptIds ?? []), [experiment?.id]);
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(experiment?.theoryIds ?? []), [experiment?.id]);

  if (loading) return <PageLoader />;
  if (!experiment) return <NotFound />;

  return (
    <article>
      <div
        className={styles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${experiment.accentColor} 0%, color-mix(in srgb, ${experiment.accentColor} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/parcours" className={styles.backLink}>
            <ArrowLeft size={16} />
            Parcours guidés
          </Link>
          <p className={`text-label ${styles.eyebrow}`}>Expérience historique</p>
          <h1 className={`text-display ${styles.title}`}>{experiment.title}</h1>
          <p className={`text-h4 ${styles.summary}`} style={{ fontWeight: 400 }}>
            {experiment.summary}
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaItem} style={{ fontWeight: 600 }}>
              {experiment.researchers}
            </span>
            <span className={styles.metaItem}>{experiment.year}</span>
          </div>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={experiment.id} entityType="experiment" label={experiment.title} />
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          <KeyTakeaways
            items={experiment.keyTakeaways}
            accentColor={experiment.accentColor}
            keywords={[
              ...(theories ?? []).map((t) => t.name),
              ...(concepts ?? []).map((c) => c.term),
            ].slice(0, 6)}
            associations={[
              {
                label: 'Personnes associées',
                items: (psychologists ?? []).map((p) => ({ id: p.id, name: p.name, href: `/psychologues/${p.id}` })),
              },
              {
                label: 'Théories associées',
                items: (theories ?? []).map((t) => ({ id: t.id, name: t.name, href: `/theories/${t.id}` })),
              },
            ]}
          />

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Contexte historique</p>
            <p className="text-body-sm">{experiment.historicalContext}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <Target size={14} />
              Objectif
            </p>
            <p className="text-body-sm">{experiment.objective}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <ClipboardList size={14} />
              Méthode
            </p>
            <div className={styles.protocolBlock}>
              <p className="text-body-sm">{experiment.protocol}</p>
            </div>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Résultat</p>
            <p className="text-body">{experiment.results}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <Lightbulb size={14} />
              Interprétation
            </p>
            <div className={styles.resultsBlock}>
              <p className="text-body-sm">{experiment.interpretation}</p>
            </div>
          </section>

          <section className={styles.critiquesBlock}>
            <p className={`text-label ${styles.critiquesLabel}`}>
              <AlertTriangle size={14} />
              Limites et controverses
            </p>
            <ul className={styles.critiquesList}>
              {experiment.critiques.map((c, i) => (
                <li key={i} className="text-body-sm">{c}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Héritage</p>
            <p className="text-body-sm">{experiment.legacy}</p>
          </section>

          {concepts && concepts.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>
                Concepts associés
              </h2>
              <div className="chip-row">
                {concepts.map((c) => (
                  <ConceptChip key={c.id} concept={c} />
                ))}
              </div>
            </section>
          )}

          {(psychologists && psychologists.length > 0) || (theories && theories.length > 0) ? (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>
                Pour aller plus loin
              </h2>
              <div className={styles.connectionsGrid}>
                {psychologists?.map((p) => (
                  <RelationshipCard
                    key={p.id}
                    to={`/psychologues/${p.id}`}
                    icon={<FlaskConical size={18} />}
                    title={p.name}
                    subtitle={`${p.birth}–${p.death ?? ''}`}
                  />
                ))}
                {theories?.map((t) => (
                  <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<FlaskConical size={18} />} title={t.name} subtitle={t.tagline} />
                ))}
              </div>
            </section>
          ) : null}

          <Link
            to={`/carte?mode=ego&type=experiment&id=${experiment.id}`}
            className="text-body-sm text-accent"
            style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
          >
            <Sparkles size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
            Explorer autour de cette expérience →
          </Link>
        </div>
      </div>
    </article>
  );
}
