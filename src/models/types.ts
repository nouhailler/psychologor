export type EntityKind =
  | 'psychologist'
  | 'theory'
  | 'concept'
  | 'school'
  | 'work'
  | 'quote'
  | 'event'
  | 'path';

export type StepEntityKind = 'psychologist' | 'theory' | 'concept';

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
  color: string;
}

export interface Concept {
  id: string;
  term: string;
  shortDefinition: string;
  definition: string;
  origin?: string;
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

export interface SearchResultGroup<T> {
  type: EntityKind;
  label: string;
  items: T[];
}

export interface PathStep {
  id: string;
  entityType: StepEntityKind;
  entityId: string;
  keyTakeaway: string;
  reflectionQuestion?: string;
  workId?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  estimatedMinutes: number;
  steps: PathStep[];
}
