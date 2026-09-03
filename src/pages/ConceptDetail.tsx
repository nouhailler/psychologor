import { ArrowLeft, Microscope, Sparkles, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { FavoriteButton } from '../components/ui/FavoriteButton';
import { GenesisChain } from '../components/ui/GenesisChain';
import { KeyTakeaways } from '../components/ui/KeyTakeaways';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { useRecordVisit } from '../hooks/useHistory';
import { repository } from '../services/repository';
import NotFound from './NotFound';
import styles from './ConceptDetail.module.css';

export default function ConceptDetail() {
  const { id = '' } = useParams();
  const { data: concept, loading } = useAsync(() => repository.getConcept(id), [id]);
  useRecordVisit(concept?.id, 'concept');

  const { data: psychologists } = useAsync(
    () => repository.getPsychologistsByIds(concept?.psychologistIds ?? []),
    [concept?.id],
  );
  const { data: theories } = useAsync(() => repository.getTheoriesByIds(concept?.theoryIds ?? []), [concept?.id]);
  const { data: relatedConcepts } = useAsync(
    () => repository.getConceptsByIds(concept?.relatedConceptIds ?? []),
    [concept?.id],
  );
  const { data: methods } = useAsync(() => repository.getMethodsByConcept(concept?.id ?? ''), [concept?.id]);

  if (loading) return <PageLoader />;
  if (!concept) return <NotFound />;

  return (
    <div className="container-narrow">
      <div className={styles.header}>
        <Link to="/concepts" className={styles.backLink}>
          <ArrowLeft size={16} />
          Glossaire
        </Link>
        <div className={styles.termRow}>
          <div>
            <p className="text-label" style={{ marginBottom: 8 }}>Concept</p>
            <h1 className={`text-display ${styles.term}`}>{concept.term}</h1>
            <p className={`text-h4 ${styles.shortDef}`} style={{ fontWeight: 400, color: 'var(--color-text-secondary)' }}>
              {concept.shortDefinition}
            </p>
          </div>
          <FavoriteButton entityId={concept.id} entityType="concept" label={concept.term} />
        </div>
      </div>

      <KeyTakeaways
        items={concept.keyTakeaways}
        accentColor="#6B4EDB"
        keywords={[
          ...(theories ?? []).map((t) => t.name),
          ...(relatedConcepts ?? []).map((c) => c.term),
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
        <p className="text-body" style={{ maxWidth: 640 }}>{concept.definition}</p>
      </section>

      <section className={styles.section}>
        <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Contexte historique</h2>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>{concept.historicalContext}</p>
      </section>

      {concept.origin && (
        <div className={styles.originBlock}>
          <p className="text-label" style={{ marginBottom: 6 }}>Origine</p>
          <p className="text-body-sm">{concept.origin}</p>
        </div>
      )}

      <GenesisChain target={{ type: 'concept', id: concept.id }} />

      {psychologists && psychologists.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Personnes associées</h2>
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
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Théories associées</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {theories.map((t) => (
              <RelationshipCard key={t.id} to={`/theories/${t.id}`} icon={<Sparkles size={18} />} title={t.name} subtitle={t.tagline} />
            ))}
          </div>
        </section>
      )}

      {relatedConcepts && relatedConcepts.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Concepts connexes</h2>
          <div className="chip-row">
            {relatedConcepts.map((c) => (
              <ConceptChip key={c.id} concept={c} />
            ))}
          </div>
        </section>
      )}

      {methods && methods.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Méthodes associées</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {methods.map((m) => (
              <RelationshipCard key={m.id} to={`/methodes/${m.id}`} icon={<Microscope size={18} />} title={m.name} subtitle={m.shortDefinition} />
            ))}
          </div>
        </section>
      )}

      <Link
        to={`/comparaison?type=concepts&id=${concept.id}`}
        className="text-body-sm text-accent"
        style={{ display: 'inline-block', marginTop: 'var(--space-2)', fontWeight: 600 }}
      >
        Comparer avec un autre concept →
      </Link>
      <Link
        to={`/carte?mode=ego&type=concept&id=${concept.id}`}
        className="text-body-sm text-accent"
        style={{ display: 'block', marginTop: 'var(--space-2)', marginBottom: 'var(--space-8)', fontWeight: 600 }}
      >
        Explorer autour de {concept.term} →
      </Link>
    </div>
  );
}
