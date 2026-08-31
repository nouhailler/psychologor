import { psychologists } from '../data/psychologists';
import { theories } from '../data/theories';
import { concepts } from '../data/concepts';
import type { Concept, Psychologist, Theory } from '../models/types';
import { normalizeForSearch } from '../utils/slug';

export interface SearchResults {
  psychologists: Psychologist[];
  theories: Theory[];
  concepts: Concept[];
  total: number;
}

const EMPTY: SearchResults = { psychologists: [], theories: [], concepts: [], total: 0 };

/**
 * Recherche tolérante et multi-entités : compare le terme normalisé (sans
 * accents, insensible à la casse) aux principaux champs textuels de chaque
 * entité, puis regroupe les résultats par type.
 */
export function search(rawQuery: string, limitPerGroup = 6): SearchResults {
  const query = normalizeForSearch(rawQuery);
  if (query.length < 1) return EMPTY;

  const matchedPsychologists = psychologists
    .filter((p) => normalizeForSearch(`${p.name} ${p.summary} ${p.nationality}`).includes(query))
    .slice(0, limitPerGroup);

  const matchedTheories = theories
    .filter((t) => normalizeForSearch(`${t.name} ${t.tagline} ${t.summary}`).includes(query))
    .slice(0, limitPerGroup);

  const matchedConcepts = concepts
    .filter((c) => normalizeForSearch(`${c.term} ${c.shortDefinition} ${c.definition}`).includes(query))
    .slice(0, limitPerGroup);

  return {
    psychologists: matchedPsychologists,
    theories: matchedTheories,
    concepts: matchedConcepts,
    total: matchedPsychologists.length + matchedTheories.length + matchedConcepts.length,
  };
}
