import type { Psychologist } from '../models/types';
import { getConceptSync, getPsychologistSync, getSchoolSync, getTheorySync } from './repository';

export type GenesisTargetType = 'theory' | 'concept';

export interface GenesisTarget {
  type: GenesisTargetType;
  id: string;
}

export type GenesisNodeKind = 'psychologist' | 'theory' | 'concept';

export interface GenesisNode {
  kind: GenesisNodeKind;
  id: string;
  name: string;
  href: string;
  accentColor: string;
  portraitUrl?: string;
  portraitInitials?: string;
}

const FALLBACK_COLOR = '#6B4EDB';
const MAX_GENERATIONS = 6;

function theoryNode(theoryId: string): GenesisNode | undefined {
  const t = getTheorySync(theoryId);
  if (!t) return undefined;
  const school = t.schoolIds[0] ? getSchoolSync(t.schoolIds[0]) : undefined;
  return { kind: 'theory', id: t.id, name: t.name, href: `/theories/${t.id}`, accentColor: school?.color ?? FALLBACK_COLOR };
}

function conceptNode(conceptId: string): GenesisNode | undefined {
  const c = getConceptSync(conceptId);
  if (!c) return undefined;
  return { kind: 'concept', id: c.id, name: c.term, href: `/concepts/${c.id}`, accentColor: FALLBACK_COLOR };
}

function personNode(p: Psychologist): GenesisNode {
  return {
    kind: 'psychologist',
    id: p.id,
    name: p.name,
    href: `/psychologues/${p.id}`,
    accentColor: p.accentColor,
    portraitUrl: p.portraitUrl,
    portraitInitials: p.portraitInitials,
  };
}

/**
 * Retrace la généalogie intellectuelle d'une théorie ou d'un concept en
 * remontant la chaîne d'influence (influencedByIds) de son fondateur
 * principal, génération après génération. Pour chaque ancêtre, sa propre
 * théorie fondatrice (theoryIds[0]) est insérée quand elle diffère des
 * théories déjà présentes dans la chaîne, faisant alterner personnes et
 * courants — exactement le modèle influencedBy / influenced déjà utilisé
 * par la chaîne d'influences et le graphe « autour de moi ».
 *
 * Ne retourne rien si la théorie/le concept n'a pas de fondateur renseigné,
 * ou si ce fondateur n'a lui-même aucun ancêtre d'influence connu : dans ce
 * cas il n'y a rien d'original à montrer au-delà du lien déjà visible
 * ailleurs sur la fiche.
 */
export function buildGenesisChain(target: GenesisTarget): GenesisNode[] {
  const targetEntity = target.type === 'theory' ? getTheorySync(target.id) : getConceptSync(target.id);
  if (!targetEntity) return [];

  const founderId = targetEntity.psychologistIds[0];
  if (!founderId) return [];

  const lineage: Psychologist[] = [];
  const visited = new Set<string>();
  let currentId: string | undefined = founderId;
  while (currentId && lineage.length < MAX_GENERATIONS) {
    const p = getPsychologistSync(currentId);
    if (!p || visited.has(p.id)) break;
    visited.add(p.id);
    lineage.push(p);
    currentId = p.influencedByIds[0];
  }

  if (lineage.length < 2) return [];

  const targetNode = target.type === 'theory' ? theoryNode(target.id) : conceptNode(target.id);
  if (!targetNode) return [];

  const chain: GenesisNode[] = [];
  const usedTheoryIds = new Set<string>([target.id]);

  for (let i = lineage.length - 1; i >= 1; i--) {
    const ancestor = lineage[i];
    chain.push(personNode(ancestor));
    const ancestorTheoryId = ancestor.theoryIds[0];
    if (ancestorTheoryId && !usedTheoryIds.has(ancestorTheoryId)) {
      const node = theoryNode(ancestorTheoryId);
      if (node) {
        chain.push(node);
        usedTheoryIds.add(ancestorTheoryId);
      }
    }
  }

  chain.push(personNode(lineage[0]));
  chain.push(targetNode);

  return chain;
}
