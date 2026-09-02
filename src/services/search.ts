import { psychologists } from '../data/psychologists';
import { theories } from '../data/theories';
import { concepts } from '../data/concepts';
import { schools } from '../data/schools';
import { works } from '../data/works';
import { events } from '../data/events';
import type { Concept, HistoricalEvent, Psychologist, School, Theory, Work } from '../models/types';
import { normalizeForSearch } from '../utils/slug';

export interface SearchResults {
  psychologists: Psychologist[];
  theories: Theory[];
  concepts: Concept[];
  schools: School[];
  works: Work[];
  events: HistoricalEvent[];
  total: number;
}

const EMPTY: SearchResults = {
  psychologists: [],
  theories: [],
  concepts: [],
  schools: [],
  works: [],
  events: [],
  total: 0,
};

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

  const matchedSchools = schools
    .filter((s) => normalizeForSearch(`${s.name} ${s.summary}`).includes(query))
    .slice(0, limitPerGroup);

  const matchedWorks = works
    .filter((w) => normalizeForSearch(`${w.title} ${w.originalTitle ?? ''} ${w.description ?? ''}`).includes(query))
    .slice(0, limitPerGroup);

  const matchedEvents = events
    .filter((e) => normalizeForSearch(`${e.title} ${e.description}`).includes(query))
    .slice(0, limitPerGroup);

  return {
    psychologists: matchedPsychologists,
    theories: matchedTheories,
    concepts: matchedConcepts,
    schools: matchedSchools,
    works: matchedWorks,
    events: matchedEvents,
    total:
      matchedPsychologists.length +
      matchedTheories.length +
      matchedConcepts.length +
      matchedSchools.length +
      matchedWorks.length +
      matchedEvents.length,
  };
}
