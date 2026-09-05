import { ArrowLeft, Briefcase, FlaskConical, HelpCircle, Layers, Map, Microscope, ScrollText, Sparkles, Users } from 'lucide-react';
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

export default function FieldDetail() {
  const { id = '' } = useParams();
  const { data: field, loading } = useAsync(() => repository.getField(id), [id]);
  useRecordVisit(field?.id, 'field');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(field?.psychologistIds ?? []),
    [field?.id],
  );
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(field?.relatedTheoryIds ?? []), [field?.id]);
  const { data: concepts } = useAsync(() => repository.getConceptsByIds(field?.relatedConceptIds ?? []), [field?.id]);
  const { data: methods } = useAsync(() => repository.getMethodsByIds(field?.relatedMethodIds ?? []), [field?.id]);
  const { data: experimentsList } = useAsync(
    () => repository.getExperimentsByIds(field?.relatedExperimentIds ?? []),
    [field?.id],
  );
  const { data: works } = useAsync(() => repository.getWorksByIds(field?.relatedWorkIds ?? []), [field?.id]);
  const { data: relatedFields } = useAsync(() => repository.getFieldsByIds(field?.relatedFieldIds ?? []), [field?.id]);

  if (loading) return <PageLoader />;
  if (!field) return <NotFound />;

  return (
    <article>
      <div
        className={styles.hero}
        style={{
          background: `radial-gradient(120% 140% at 15% 0%, ${field.accentColor} 0%, color-mix(in srgb, ${field.accentColor} 40%, #120c26) 50%, #0d0920 100%)`,
        }}
      >
        <div className="container">
          <Link to="/domaines" className={styles.backLink}>
            <ArrowLeft size={16} />
            Domaines
          </Link>
          <p className={`text-label ${styles.eyebrow}`}>Domaine de la psychologie</p>
          <h1 className={`text-display ${styles.title}`}>{field.name}</h1>
          <p className={`text-h4 ${styles.summary}`} style={{ fontWeight: 400 }}>
            {field.shortDefinition}
          </p>
        </div>
        <div className={styles.favoriteWrap}>
          <FavoriteButton entityId={field.id} entityType="field" label={field.name} />
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Définition</p>
            <p className="text-body">{field.definition}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>Contexte historique</p>
            <p className="text-body-sm">{field.historicalContext}</p>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <HelpCircle size={14} />
              Questions clés
            </p>
            <ul className={styles.list}>
              {field.keyQuestions.map((q, i) => (
                <li key={i} className="text-body-sm">{q}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <p className={`text-label ${styles.sectionTitle}`}>
              <Briefcase size={14} />
              Applications
            </p>
            <ul className={styles.list}>
              {field.applications.map((a, i) => (
                <li key={i} className="text-body-sm">{a}</li>
              ))}
            </ul>
          </section>

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

          {experimentsList && experimentsList.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Expériences illustratives</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {experimentsList.map((e) => (
                  <RelationshipCard key={e.id} to={`/experiences/${e.id}`} icon={<FlaskConical size={18} />} title={e.title} subtitle={e.year} />
                ))}
              </div>
            </section>
          )}

          {works && works.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Œuvres de référence</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {works.map((w) => (
                  <RelationshipCard key={w.id} to={`/oeuvres/${w.id}`} icon={<ScrollText size={18} />} title={w.title} subtitle={w.year} />
                ))}
              </div>
            </section>
          )}

          {relatedFields && relatedFields.length > 0 && (
            <section className={styles.section}>
              <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Domaines voisins</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {relatedFields.map((f) => (
                  <RelationshipCard key={f.id} to={`/domaines/${f.id}`} icon={<Map size={18} />} title={f.name} subtitle={f.shortDefinition} />
                ))}
              </div>
            </section>
          )}

          <Link
            to={`/carte?mode=ego&type=field&id=${field.id}`}
            className="text-body-sm text-accent"
            style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
          >
            <Sparkles size={14} style={{ verticalAlign: -2, marginRight: 4 }} />
            Explorer autour de {field.name} →
          </Link>
        </div>
      </div>
    </article>
  );
}
