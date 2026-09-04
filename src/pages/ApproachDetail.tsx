import { ArrowLeft, CheckCircle2, HelpCircle, Landmark, Layers, Microscope, Sparkles, Telescope, Users, XCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './MethodDetail.module.css';

export default function ApproachDetail() {
  const { id = '' } = useParams();
  const { data: approach, loading } = useAsync(() => repository.getApproach(id), [id]);
  useRecordVisit(approach?.id, 'approach');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(approach?.psychologistIds ?? []),
    [approach?.id],
  );
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(approach?.relatedConceptIds ?? []), [approach?.id]);
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(approach?.relatedTheoryIds ?? []), [approach?.id]);
  const { data: schools } = useAsync(() => repository.getSchoolsByIds(approach?.relatedSchoolIds ?? []), [approach?.id]);
  const { data: methods } = useAsync(() => repository.getMethodsByIds(approach?.relatedMethodIds ?? []), [approach?.id]);
  const { data: relatedApproaches } = useAsync(
    () => repository.getApproachesByIds(approach?.relatedApproachIds ?? []),
    [approach?.id],
  );

  if (loading) return <PageLoader />;
  if (!approach) return <NotFound />;

  return (
    <article>
      <div
        className={styles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${approach.accentColor} 0%, color-mix(in srgb, ${approach.accentColor} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/approches" className={styles.backLink}>
            <ArrowLeft size={16} />
            Approches
          </Link>
          <p className={`text-label ${styles.eyebrow}`}>Approche contemporaine</p>
          <h1 className={`text-display ${styles.title}`}>{approach.name}</h1>
          <p className={`text-h4 ${styles.summary}`} style={{ fontWeight: 400 }}>
            {approach.shortDefinition}
          </p>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={approach.id} entityType="approach" label={approach.name} />
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Définition</p>
            <p className="text-body">{approach.definition}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Contexte historique</p>
            <p className="text-body-sm">{approach.historicalContext}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <HelpCircle size={14} />
              Question centrale
            </p>
            <div className={styles.protocolBlock}>
              <p className="text-body-sm">{approach.centralQuestion}</p>
            </div>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <Telescope size={14} />
              Ce qu'elle examine en priorité
            </p>
            <p className="text-body-sm">{approach.focus}</p>
          </section>

          <div className={styles.prosConsGrid}>
            <section className={styles.strengthsBlock}>
              <p className={`text-label ${styles.strengthsLabel}`}>
                <CheckCircle2 size={14} />
                Forces
              </p>
              <ul className={styles.list}>
                {approach.strengths.map((s, i) => (
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
                {approach.limitations.map((l, i) => (
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
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Figures représentatives</h2>
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
                  <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<Layers size={18} />} title={t.name} subtitle={t.tagline} />
                ))}
              </div>
            </section>
          )}

          {schools && schools.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Courants dont elle hérite</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {schools.map((s) => (
                  <RelationshipCard key={s.id} to={`/courants/${s.id}`} icon={<Landmark size={18} />} title={s.name} subtitle={s.period} />
                ))}
              </div>
            </section>
          )}

          {methods && methods.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Méthodes typiques</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {methods.map((m) => (
                  <RelationshipCard key={m.id} to={`/methodes/${m.id}`} icon={<Microscope size={18} />} title={m.name} subtitle={m.shortDefinition} />
                ))}
              </div>
            </section>
          )}

          {relatedApproaches && relatedApproaches.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Approches complémentaires</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {relatedApproaches.map((a) => (
                  <RelationshipCard key={a.id} to={`/approches/${a.id}`} icon={<Sparkles size={18} />} title={a.name} subtitle={a.shortDefinition} />
                ))}
              </div>
            </section>
          )}

          <Link
            to={`/carte?mode=ego&type=approach&id=${approach.id}`}
            className="text-body-sm text-accent"
            style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
          >
            <Sparkles size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
            Explorer autour de {approach.name} →
          </Link>
        </div>
      </div>
    </article>
  );
}
