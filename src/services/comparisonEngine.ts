import type { Concept, Psychologist, School, Theory } from '../models/types';
import { getConceptSync, getPsychologistSync, getSchoolSync, getTheorySync } from './repository';

export type ComparisonEntityType = 'theories' | 'concepts' | 'psychologists' | 'schools';

export interface ComparisonRow {
  label: string;
  values: string[];
}

export interface ComparisonCrossRow {
  id: string;
  label: string;
  href: string;
  present: boolean[];
}

export interface ComparisonCrossTable {
  title: string;
  rows: ComparisonCrossRow[];
}

export interface ComparisonResult {
  rows: ComparisonRow[];
  cross?: ComparisonCrossTable;
}

function names(ids: string[], resolve: (id: string) => { name: string } | undefined): string {
  const list = ids.map((id) => resolve(id)?.name).filter(Boolean) as string[];
  return list.length > 0 ? list.join(', ') : '—';
}

function buildCrossTable(
  title: string,
  ids: string[][],
  hrefPrefix: string,
  resolve: (id: string) => { name: string } | undefined,
): ComparisonCrossTable | undefined {
  const allIds = Array.from(new Set(ids.flat()));
  const rows = allIds
    .map((id) => {
      const entity = resolve(id);
      if (!entity) return null;
      return {
        id,
        label: entity.name,
        href: `${hrefPrefix}${id}`,
        present: ids.map((list) => list.includes(id)),
      };
    })
    .filter(Boolean) as ComparisonCrossRow[];
  rows.sort((a, b) => a.label.localeCompare(b.label));
  return rows.length > 0 ? { title, rows } : undefined;
}

function compareTheories(items: Theory[]): ComparisonResult {
  return {
    rows: [
      { label: "Objet d'étude", values: items.map((t) => t.comparison.objectOfStudy) },
      { label: 'Auteur(s)', values: items.map((t) => names(t.psychologistIds, getPsychologistSync)) },
      { label: 'Méthode clé', values: items.map((t) => t.comparison.keyMethod) },
      { label: 'Période', values: items.map((t) => t.period) },
      { label: 'Critique principale', values: items.map((t) => t.critiques[0] ?? '—') },
    ],
    cross: buildCrossTable(
      'Concepts clés',
      items.map((t) => t.conceptIds),
      '/concepts/',
      (id) => {
        const c = getConceptSync(id);
        return c ? { name: c.term } : undefined;
      },
    ),
  };
}

function compareConcepts(items: Concept[]): ComparisonResult {
  return {
    rows: [
      { label: 'Définition courte', values: items.map((c) => c.shortDefinition) },
      { label: 'Origine', values: items.map((c) => c.origin ?? '—') },
      { label: 'Théorie(s) associée(s)', values: items.map((c) => names(c.theoryIds, getTheorySync)) },
    ],
    cross: buildCrossTable(
      'Personnes associées',
      items.map((c) => c.psychologistIds),
      '/psychologues/',
      (id) => {
        const p = getPsychologistSync(id);
        return p ? { name: p.name } : undefined;
      },
    ),
  };
}

function compareSchoolName(id: string) {
  const s = getSchoolSync(id);
  return s ? { name: s.shortName } : undefined;
}

function comparePsychologists(items: Psychologist[]): ComparisonResult {
  return {
    rows: [
      { label: 'Dates', values: items.map((p) => `${p.birth}–${p.death ?? ''}`) },
      { label: 'Nationalité', values: items.map((p) => p.nationality) },
      { label: 'Courant(s)', values: items.map((p) => names(p.schoolIds, compareSchoolName)) },
      { label: 'Théorie(s)', values: items.map((p) => names(p.theoryIds, getTheorySync)) },
    ],
    cross: buildCrossTable(
      'Concepts majeurs',
      items.map((p) => p.conceptIds),
      '/concepts/',
      (id) => {
        const c = getConceptSync(id);
        return c ? { name: c.term } : undefined;
      },
    ),
  };
}

function compareSchools(items: School[], allTheories: Theory[]): ComparisonResult {
  const theoryIdsBySchool = items.map((s) => allTheories.filter((t) => t.schoolIds.includes(s.id)).map((t) => t.id));
  return {
    rows: [
      { label: 'Période', values: items.map((s) => s.period) },
      { label: 'Résumé', values: items.map((s) => s.summary) },
      { label: 'Nombre de théories', values: theoryIdsBySchool.map((ids) => `${ids.length} théorie(s)`) },
    ],
    cross: buildCrossTable('Théories rattachées', theoryIdsBySchool, '/theories/', getTheorySync),
  };
}

export function compareEntities(
  type: ComparisonEntityType,
  items: (Theory | Concept | Psychologist | School)[],
  allTheories: Theory[],
): ComparisonResult {
  if (type === 'theories') return compareTheories(items as Theory[]);
  if (type === 'concepts') return compareConcepts(items as Concept[]);
  if (type === 'psychologists') return comparePsychologists(items as Psychologist[]);
  return compareSchools(items as School[], allTheories);
}
