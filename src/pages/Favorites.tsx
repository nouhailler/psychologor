import { Landmark, Star } from 'lucide-react';
import { PersonCard } from '../components/cards/PersonCard';
import { TheoryCard } from '../components/cards/TheoryCard';
import { ConceptChip } from '../components/cards/ConceptChip';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { EmptyState } from '../components/ui/EmptyState';
import { Section } from '../components/ui/Section';
import { useFavoritesList } from '../hooks/useFavorites';
import { getConceptSync, getPsychologistSync, getSchoolSync, getTheorySync } from '../services/repository';
import styles from './Favorites.module.css';

export default function Favorites() {
  const favorites = useFavoritesList();

  const psychologists = (favorites ?? [])
    .filter((f) => f.entityType === 'psychologist')
    .map((f) => getPsychologistSync(f.entityId))
    .filter(Boolean);

  const theories = (favorites ?? [])
    .filter((f) => f.entityType === 'theory')
    .map((f) => getTheorySync(f.entityId))
    .filter(Boolean);

  const concepts = (favorites ?? [])
    .filter((f) => f.entityType === 'concept')
    .map((f) => getConceptSync(f.entityId))
    .filter(Boolean);

  const schools = (favorites ?? [])
    .filter((f) => f.entityType === 'school')
    .map((f) => getSchoolSync(f.entityId))
    .filter(Boolean);

  const isEmpty = psychologists.length === 0 && theories.length === 0 && concepts.length === 0 && schools.length === 0;

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Favoris
        </h1>
        <p className="text-body-sm">Les personnes, théories, concepts et courants que vous avez sauvegardés.</p>
      </div>

      {isEmpty && (
        <EmptyState
          icon={<Star size={24} />}
          title="Aucun favori pour le moment"
          description="Ajoutez des psychologues, théories, concepts ou courants à vos favoris en appuyant sur l'étoile de leur fiche."
        />
      )}

      {psychologists.length > 0 && (
        <Section title="Psychologues" className={styles.section}>
          <div className={styles.grid}>
            {psychologists.map((p) => p && <PersonCard key={p.id} psychologist={p} />)}
          </div>
        </Section>
      )}

      {theories.length > 0 && (
        <Section title="Théories" className={styles.section}>
          <div className={styles.gridTheories}>
            {theories.map((t) => t && <TheoryCard key={t.id} theory={t} />)}
          </div>
        </Section>
      )}

      {concepts.length > 0 && (
        <Section title="Concepts" className={styles.section}>
          <div className="chip-row">
            {concepts.map((c) => c && <ConceptChip key={c.id} concept={c} />)}
          </div>
        </Section>
      )}

      {schools.length > 0 && (
        <Section title="Courants" className={styles.section}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {schools.map(
              (s) =>
                s && (
                  <RelationshipCard key={s.id} to={`/courants/${s.id}`} icon={<Landmark size={18} />} title={s.name} subtitle={s.period} />
                ),
            )}
          </div>
        </Section>
      )}
    </div>
  );
}
