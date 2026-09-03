import { ArrowLeft, CheckCircle2, ClipboardList, FlaskConical, Layers, Sparkles, Target, Users, XCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { METHOD_CATEGORY_LABELS } from '../data/methods';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './MethodDetail.module.css';

export default function MethodDetail() {
  const { id = '' } = useParams();
  const { data: method, loading } = useAsync(() => repository.getMethod(id), [id]);
  useRecordVisit(method?.id, 'method');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(method?.psychologistIds ?? []),
    [method?.id],
  );
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(method?.relatedConceptIds ?? []), [method?.id]);
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(method?.relatedTheoryIds ?? []), [method?.id]);
  const { data: relatedExperiments } = useAsync(
    () => repository.getExperimentsByIds(method?.relatedExperimentIds ?? []),
    [method?.id],
  );
  const { data: relatedMethods } = useAsync(() => repository.getMethodsByIds(method?.relatedMethodIds ?? []), [method?.id]);

  if (loading) return <PageLoader />;
  if (!method) return <NotFound />;

  return (
    <article>
      <div
        className={styles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${method.accentColor} 0%, color-mix(in srgb, ${method.accentColor} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/methodes" className={styles.backLink}>
            <ArrowLeft size={16} />
            Méthodes
          </Link>
          <p className={`text-label ${styles.eyebrow}`}>{METHOD_CATEGORY_LABELS[method.category]}</p>
          <h1 className={`text-display ${styles.title}`}>{method.name}</h1>
          <p className={`text-h4 ${styles.summary}`} style={{ fontWeight: 400 }}>
            {method.shortDefinition}
          </p>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={method.id} entityType="method" label={method.name} />
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Définition</p>
            <p className="text-body">{method.definition}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Contexte historique</p>
            <p className="text-body-sm">{method.historicalContext}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <Target size={14} />
              Objectif
            </p>
            <p className="text-body-sm">{method.objective}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <ClipboardList size={14} />
              Protocole
            </p>
            <div className={styles.protocolBlock}>
              <p className="text-body-sm">{method.protocol}</p>
            </div>
          </section>

          <div className={styles.prosConsGrid}>
            <section className={styles.strengthsBlock}>
              <p className={`text-label ${styles.strengthsLabel}`}>
                <CheckCircle2 size={14} />
                Forces
              </p>
              <ul className={styles.list}>
                {method.strengths.map((s, i) => (
                  <li key={i} className="text-body-sm">{s}</li>
                ))}
              </ul>
            </section>

            <section className={styles.limitationsBlock}>
              <p className={`text-label ${styles.limitationsLabel}`}>
                <XCircle size={14} />
                Limites
              </p>
              <ul className={styles.list}>
                {method.limitations.map((l, i) => (
                  <li key={i} className="text-body-sm">{l}</li>
                ))}
              </ul>
            </section>
          </div>

          {concepts && concepts.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Concepts liés</h2>
              <div className="chip-row">
                {concepts.map((c) => (
                  <ConceptChip key={c.id} concept={c} />
                ))}
              </div>
            </section>
          )}

          {psychologists && psychologists.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Figures clés</h2>
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

          {relatedExperiments && relatedExperiments.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Expériences illustratives</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {relatedExperiments.map((e) => (
                  <RelationshipCard
                    key={e.id}
                    to={`/experiences/${e.id}`}
                    icon={<FlaskConical size={18} />}
                    title={e.title}
                    subtitle={e.year}
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
                  <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<Layers size={18} />} title={t.name} subtitle={t.tagline} />
                ))}
              </div>
            </section>
          )}

          {relatedMethods && relatedMethods.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Méthodes connexes</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {relatedMethods.map((m) => (
                  <RelationshipCard
                    key={m.id}
                    to={`/methodes/${m.id}`}
                    icon={<Sparkles size={18} />}
                    title={m.name}
                    subtitle={METHOD_CATEGORY_LABELS[m.category]}
                  />
                ))}
              </div>
            </section>
          )}

          <Link
            to={`/carte?mode=ego&type=method&id=${method.id}`}
            className="text-body-sm text-accent"
            style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
          >
            <Sparkles size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
            Explorer autour de {method.name} →
          </Link>
        </div>
      </div>
    </article>
  );
}
