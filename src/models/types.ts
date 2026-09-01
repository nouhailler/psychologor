export type EntityKind =
  | 'psychologist'
  | 'theory'
  | 'concept'
  | 'school'
  | 'work'
  | 'quote'
  | 'event'
  | 'experiment'
  | 'path';

export type StepEntityKind = 'psychologist' | 'theory' | 'concept' | 'experiment' | 'custom';

export interface DateRange {
  birth?: string;
  death?: string;
  label?: string;
}

export interface PortraitCredit {
  artist: string;
  license: string;
  sourceUrl: string;
}

export interface Quote {
  id: string;
  text: string;
  source: string;
  year?: string;
  psychologistId: string;
}

export interface Work {
  id: string;
  title: string;
  originalTitle?: string;
  year: string;
  psychologistIds: string[];
  description?: string;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  description: string;
  type: 'birth' | 'death' | 'publication' | 'event' | 'institution';
  relatedPsychologistIds: string[];
  relatedTheoryIds: string[];
  relatedSchoolIds: string[];
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  period: string;
  summary: string;
  description: string;
  /** Le climat scientifique et intellectuel dans lequel le courant émerge. */
  historicalContext: string;
  /** Son influence durable sur la psychologie contemporaine et au-delà. */
  legacy: string;
  /** Figure(s) fondatrice(s), distinctes des représentants qui l'ont ensuite développé. */
  founderIds: string[];
  /** Courants contemporains ou ultérieurs avec lesquels une opposition doctrinale est bien documentée. */
  rivalSchoolIds: string[];
  color: string;
}

export interface Concept {
  id: string;
  term: string;
  shortDefinition: string;
  definition: string;
  origin?: string;
  /** Les 3 idées essentielles à retenir, pour la section « À retenir ». */
  keyTakeaways: [string, string, string];
  psychologistIds: string[];
  theoryIds: string[];
  relatedConceptIds: string[];
}

export interface Theory {
  id: string;
  name: string;
  tagline: string;
  period: string;
  schoolIds: string[];
  psychologistIds: string[];
  summary: string;
  principles: string[];
  conceptIds: string[];
  applications: string[];
  evolution: string;
  critiques: string[];
  relatedTheoryIds: string[];
  comparison: {
    objectOfStudy: string;
    keyMethod: string;
  };
}

export interface Psychologist {
  id: string;
  name: string;
  fullName?: string;
  birth: string;
  death?: string;
  nationality: string;
  portraitUrl?: string;
  portraitInitials: string;
  accentColor: string;
  schoolIds: string[];
  summary: string;
  biography: string[];
  /** Les 3 idées essentielles à retenir, pour la section « À retenir ». */
  keyTakeaways: [string, string, string];
  education: string;
  career: string;
  influencedByIds: string[];
  influencedIds: string[];
  theoryIds: string[];
  conceptIds: string[];
  workIds: string[];
  quoteIds: string[];
  timeline: { year: number; label: string }[];
}

/**
 * Une expérience historique majeure — distincte d'une théorie : on y décrit
 * un protocole concret, des résultats précis et leurs limites, plutôt qu'un
 * cadre conceptuel général.
 */
export interface Experiment {
  id: string;
  title: string;
  researchers: string;
  year: string;
  accentColor: string;
  summary: string;
  /** Les 3 idées essentielles à retenir, pour la section « À retenir ». */
  keyTakeaways: [string, string, string];
  protocol: string;
  results: string;
  interpretation: string;
  limitations: string;
  psychologistIds: string[];
  conceptIds: string[];
  theoryIds: string[];
}

export interface SearchResultGroup<T> {
  type: EntityKind;
  label: string;
  items: T[];
}

export interface PathStep {
  id: string;
  entityType: StepEntityKind;
  /** Requis sauf lorsque entityType === 'custom'. */
  entityId?: string;
  /** Titre et description propres à une étape 'custom' (synthèse, comparaison, transition). */
  customTitle?: string;
  customDescription?: string;
  keyTakeaway: string;
  reflectionQuestion?: string;
  workId?: string;
}

export type PathCategory =
  | 'introduction'
  | 'courant'
  | 'psychologue'
  | 'concept'
  | 'debat'
  | 'experience'
  | 'histoire'
  | 'reseau'
  | 'transversal'
  | 'etudiant';

export interface LearningPath {
  id: string;
  category: PathCategory;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  estimatedMinutes: number;
  steps: PathStep[];
}
