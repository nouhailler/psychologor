import { psychologists } from '../data/psychologists';
import { theories } from '../data/theories';
import { concepts } from '../data/concepts';
import { schools } from '../data/schools';
import { works } from '../data/works';
import { quotes } from '../data/quotes';
import { events } from '../data/events';
import type {
  Concept,
  HistoricalEvent,
  Psychologist,
  Quote,
  School,
  Theory,
  Work,
} from '../models/types';

/**
 * Couche de repository : point d'accès unique aux données.
 * La V1 lit des données locales, mais toute page/composant passe par ces
 * fonctions plutôt que d'importer les fichiers de `data/` directement — ce
 * qui permet de remplacer la source (API, CMS, backend) sans toucher à l'UI.
 */

const psychologistById = new Map(psychologists.map((p) => [p.id, p]));
const theoryById = new Map(theories.map((t) => [t.id, t]));
const conceptById = new Map(concepts.map((c) => [c.id, c]));
const schoolById = new Map(schools.map((s) => [s.id, s]));
const workById = new Map(works.map((w) => [w.id, w]));
const quoteById = new Map(quotes.map((q) => [q.id, q]));
const eventById = new Map(events.map((e) => [e.id, e]));

function delay<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}

export const repository = {
  // ---- Psychologues ----
  getAllPsychologists: () => delay(psychologists),
  getPsychologist: (id: string) => delay(psychologistById.get(id) ?? null),
  getPsychologistsByIds: (ids: string[]) => delay(ids.map((id) => psychologistById.get(id)).filter(Boolean) as Psychologist[]),
  getPsychologistsBySchool: (schoolId: string) => delay(psychologists.filter((p) => p.schoolIds.includes(schoolId))),

  // ---- Théories ----
  getAllTheories: () => delay(theories),
  getTheory: (id: string) => delay(theoryById.get(id) ?? null),
  getTheoriesByIds: (ids: string[]) => delay(ids.map((id) => theoryById.get(id)).filter(Boolean) as Theory[]),
  getTheoriesBySchool: (schoolId: string) => delay(theories.filter((t) => t.schoolIds.includes(schoolId))),

  // ---- Concepts ----
  getAllConcepts: () => delay(concepts),
  getConcept: (id: string) => delay(conceptById.get(id) ?? null),
  getConceptsByIds: (ids: string[]) => delay(ids.map((id) => conceptById.get(id)).filter(Boolean) as Concept[]),

  // ---- Courants ----
  getAllSchools: () => delay(schools),
  getSchool: (id: string) => delay(schoolById.get(id) ?? null),

  // ---- Œuvres ----
  getWorksByIds: (ids: string[]) => delay(ids.map((id) => workById.get(id)).filter(Boolean) as Work[]),

  // ---- Citations ----
  getQuotesByIds: (ids: string[]) => delay(ids.map((id) => quoteById.get(id)).filter(Boolean) as Quote[]),

  // ---- Événements / chronologie ----
  getAllEvents: () => delay([...events].sort((a, b) => a.year - b.year)),
  getEvent: (id: string) => delay(eventById.get(id) ?? null),
};

export function getPsychologistSync(id: string): Psychologist | undefined {
  return psychologistById.get(id);
}

export function getTheorySync(id: string): Theory | undefined {
  return theoryById.get(id);
}

export function getConceptSync(id: string): Concept | undefined {
  return conceptById.get(id);
}

export function getSchoolSync(id: string): School | undefined {
  return schoolById.get(id);
}

export function getEventSync(id: string): HistoricalEvent | undefined {
  return eventById.get(id);
}
