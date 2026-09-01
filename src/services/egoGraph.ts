import { events } from '../data/events';
import { experiments } from '../data/experiments';
import {
  getConceptSync,
  getEventSync,
  getExperimentSync,
  getPsychologistSync,
  getSchoolSync,
  getTheorySync,
  getWorkSync,
} from './repository';

export type GraphNodeType = 'psychologist' | 'theory' | 'concept' | 'work' | 'event' | 'experiment';

export interface EgoRef {
  type: GraphNodeType;
  id: string;
}

export interface EgoNode {
  key: string;
  type: GraphNodeType;
  id: string;
  depth: number;
  parentKey?: string;
  name: string;
  href?: string;
  accentColor: string;
  portraitUrl?: string;
  portraitInitials?: string;
}

export interface EgoEdge {
  id: string;
  source: string;
  target: string;
}

export interface EgoGraphResult {
  nodes: EgoNode[];
  edges: EgoEdge[];
}

const FALLBACK_COLOR = '#6B4EDB';

// ---- Index inversés : ces entités ne référencent pas directement leurs
// psychologues / concepts / théories liés dans l'autre sens. ----
const eventsByPsychologist = new Map<string, string[]>();
const eventsByTheory = new Map<string, string[]>();
for (const e of events) {
  for (const pid of e.relatedPsychologistIds) {
    if (!eventsByPsychologist.has(pid)) eventsByPsychologist.set(pid, []);
    eventsByPsychologist.get(pid)!.push(e.id);
  }
  for (const tid of e.relatedTheoryIds) {
    if (!eventsByTheory.has(tid)) eventsByTheory.set(tid, []);
    eventsByTheory.get(tid)!.push(e.id);
  }
}

const experimentsByPsychologist = new Map<string, string[]>();
const experimentsByConcept = new Map<string, string[]>();
const experimentsByTheory = new Map<string, string[]>();
for (const x of experiments) {
  for (const pid of x.psychologistIds) {
    if (!experimentsByPsychologist.has(pid)) experimentsByPsychologist.set(pid, []);
    experimentsByPsychologist.get(pid)!.push(x.id);
  }
  for (const cid of x.conceptIds) {
    if (!experimentsByConcept.has(cid)) experimentsByConcept.set(cid, []);
    experimentsByConcept.get(cid)!.push(x.id);
  }
  for (const tid of x.theoryIds) {
    if (!experimentsByTheory.has(tid)) experimentsByTheory.set(tid, []);
    experimentsByTheory.get(tid)!.push(x.id);
  }
}

function key(ref: EgoRef): string {
  return `${ref.type}:${ref.id}`;
}

function toNode(ref: EgoRef, depth: number, parentKey?: string): EgoNode | undefined {
  if (ref.type === 'psychologist') {
    const p = getPsychologistSync(ref.id);
    if (!p) return undefined;
    return {
      key: key(ref),
      type: ref.type,
      id: ref.id,
      depth,
      parentKey,
      name: p.name,
      href: `/psychologues/${p.id}`,
      accentColor: p.accentColor,
      portraitUrl: p.portraitUrl,
      portraitInitials: p.portraitInitials,
    };
  }
  if (ref.type === 'theory') {
    const t = getTheorySync(ref.id);
    if (!t) return undefined;
    const school = t.schoolIds[0] ? getSchoolSync(t.schoolIds[0]) : undefined;
    return {
      key: key(ref),
      type: ref.type,
      id: ref.id,
      depth,
      parentKey,
      name: t.name,
      href: `/theories/${t.id}`,
      accentColor: school?.color ?? FALLBACK_COLOR,
    };
  }
  if (ref.type === 'concept') {
    const c = getConceptSync(ref.id);
    if (!c) return undefined;
    return {
      key: key(ref),
      type: ref.type,
      id: ref.id,
      depth,
      parentKey,
      name: c.term,
      href: `/concepts/${c.id}`,
      accentColor: FALLBACK_COLOR,
    };
  }
  if (ref.type === 'experiment') {
    const x = getExperimentSync(ref.id);
    if (!x) return undefined;
    return {
      key: key(ref),
      type: ref.type,
      id: ref.id,
      depth,
      parentKey,
      name: x.title,
      href: `/experiences/${x.id}`,
      accentColor: x.accentColor,
    };
  }
  if (ref.type === 'work') {
    const w = getWorkSync(ref.id);
    if (!w) return undefined;
    const author = w.psychologistIds[0] ? getPsychologistSync(w.psychologistIds[0]) : undefined;
    return {
      key: key(ref),
      type: ref.type,
      id: ref.id,
      depth,
      parentKey,
      name: w.title,
      href: author ? `/psychologues/${author.id}` : undefined,
      accentColor: FALLBACK_COLOR,
    };
  }
  // event
  const e = getEventSync(ref.id);
  if (!e) return undefined;
  const linkedPsychologist = e.relatedPsychologistIds[0] ? getPsychologistSync(e.relatedPsychologistIds[0]) : undefined;
  const linkedTheory = e.relatedTheoryIds[0] ? getTheorySync(e.relatedTheoryIds[0]) : undefined;
  return {
    key: key(ref),
    type: ref.type,
    id: ref.id,
    depth,
    parentKey,
    name: `${e.title} (${e.year})`,
    href: linkedPsychologist ? `/psychologues/${linkedPsychologist.id}` : linkedTheory ? `/theories/${linkedTheory.id}` : undefined,
    accentColor: FALLBACK_COLOR,
  };
}

function getConnections(ref: EgoRef): EgoRef[] {
  const out: EgoRef[] = [];
  const push = (type: GraphNodeType, ids: string[]) => ids.forEach((id) => out.push({ type, id }));

  if (ref.type === 'psychologist') {
    const p = getPsychologistSync(ref.id);
    if (!p) return out;
    push('theory', p.theoryIds);
    push('concept', p.conceptIds);
    push('work', p.workIds);
    push('psychologist', p.influencedByIds);
    push('psychologist', p.influencedIds);
    push('event', eventsByPsychologist.get(ref.id) ?? []);
    push('experiment', experimentsByPsychologist.get(ref.id) ?? []);
  } else if (ref.type === 'theory') {
    const t = getTheorySync(ref.id);
    if (!t) return out;
    push('psychologist', t.psychologistIds);
    push('concept', t.conceptIds);
    push('theory', t.relatedTheoryIds);
    push('event', eventsByTheory.get(ref.id) ?? []);
    push('experiment', experimentsByTheory.get(ref.id) ?? []);
  } else if (ref.type === 'concept') {
    const c = getConceptSync(ref.id);
    if (!c) return out;
    push('psychologist', c.psychologistIds);
    push('theory', c.theoryIds);
    push('concept', c.relatedConceptIds);
    push('experiment', experimentsByConcept.get(ref.id) ?? []);
  } else if (ref.type === 'work') {
    const w = getWorkSync(ref.id);
    if (!w) return out;
    push('psychologist', w.psychologistIds);
  } else if (ref.type === 'event') {
    const e = getEventSync(ref.id);
    if (!e) return out;
    push('psychologist', e.relatedPsychologistIds);
    push('theory', e.relatedTheoryIds);
  } else if (ref.type === 'experiment') {
    const x = getExperimentSync(ref.id);
    if (!x) return out;
    push('psychologist', x.psychologistIds);
    push('concept', x.conceptIds);
    push('theory', x.theoryIds);
  }
  return out;
}

/**
 * Construit un arbre d'exploration centré sur une entité : chaque nœud
 * n'est ajouté qu'une seule fois (premier chemin trouvé), pour produire une
 * arborescence lisible plutôt qu'un maillage complexe.
 */
export function buildEgoGraph(
  center: EgoRef,
  maxDepth: number,
  enabledTypes: ReadonlySet<GraphNodeType>,
): EgoGraphResult {
  const centerNode = toNode(center, 0);
  if (!centerNode) return { nodes: [], edges: [] };

  const nodes: EgoNode[] = [centerNode];
  const edges: EgoEdge[] = [];
  const visited = new Set<string>([centerNode.key]);

  let frontier: EgoRef[] = [center];
  for (let depth = 1; depth <= maxDepth && frontier.length > 0; depth++) {
    const nextFrontier: EgoRef[] = [];
    for (const parentRef of frontier) {
      const parentKey = key(parentRef);
      for (const conn of getConnections(parentRef)) {
        if (!enabledTypes.has(conn.type)) continue;
        const k = key(conn);
        if (visited.has(k)) continue;
        const node = toNode(conn, depth, parentKey);
        if (!node) continue;
        visited.add(k);
        nodes.push(node);
        edges.push({ id: `${parentKey}->${k}`, source: parentKey, target: k });
        nextFrontier.push(conn);
      }
    }
    frontier = nextFrontier;
  }

  return { nodes, edges };
}

export interface RadialPosition {
  x: number;
  y: number;
}

const RADIUS_STEP = 230;

/** Dispose les nœuds en cercles concentriques, triés par l'angle du parent pour limiter les croisements. */
export function layoutRadial(nodes: EgoNode[]): Map<string, RadialPosition> {
  const positions = new Map<string, RadialPosition>();
  const angleOf = new Map<string, number>();
  if (nodes.length === 0) return positions;

  const center = nodes.find((n) => n.depth === 0);
  if (!center) return positions;
  positions.set(center.key, { x: 0, y: 0 });
  angleOf.set(center.key, 0);

  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  for (let depth = 1; depth <= maxDepth; depth++) {
    const level = nodes
      .filter((n) => n.depth === depth)
      .sort((a, b) => (angleOf.get(a.parentKey ?? '') ?? 0) - (angleOf.get(b.parentKey ?? '') ?? 0));
    const count = level.length;
    level.forEach((node, i) => {
      const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
      angleOf.set(node.key, angle);
      const r = depth * RADIUS_STEP;
      positions.set(node.key, { x: r * Math.cos(angle), y: r * Math.sin(angle) });
    });
  }

  return positions;
}
