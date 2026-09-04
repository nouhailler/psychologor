import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { KnowledgeGraph } from '../visualizations/KnowledgeGraph';
import { InfluenceChain } from '../visualizations/InfluenceChain';
import { EgoGraph } from '../visualizations/EgoGraph';
import { EgoExplorerMobile } from '../visualizations/EgoExplorerMobile';
import { EgoEntityPicker } from '../visualizations/EgoEntityPicker';
import type { EgoRef, GraphNodeType } from '../services/egoGraph';
import { EmptyState } from '../components/ui/EmptyState';
import { Compass } from 'lucide-react';
import styles from './KnowledgeMap.module.css';

type Mode = 'global' | 'ego';

const FILTER_TYPES: { id: GraphNodeType; label: string; color: string }[] = [
  { id: 'psychologist', label: 'Personnes', color: '#6B4EDB' },
  { id: 'theory', label: 'Théories', color: '#2E8FA6' },
  { id: 'concept', label: 'Concepts', color: '#C77D3F' },
  { id: 'work', label: 'Œuvres', color: '#3F9E6D' },
  { id: 'event', label: 'Événements', color: '#A64A4A' },
  { id: 'experiment', label: 'Expériences', color: '#2E6B8A' },
  { id: 'method', label: 'Méthodes', color: '#C4632F' },
  { id: 'approach', label: 'Approches', color: '#6B7A3F' },
];

const DEPTH_OPTIONS = [1, 2, 3];

function readCenterFromParams(searchParams: URLSearchParams): EgoRef | null {
  const type = searchParams.get('type') as GraphNodeType | null;
  const id = searchParams.get('id');
  if (!type || !id) return null;
  if (!['psychologist', 'theory', 'concept', 'work', 'event', 'experiment', 'method', 'approach'].includes(type)) return null;
  return { type, id };
}

export default function KnowledgeMap() {
  const isDesktop = useIsDesktop();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCenter = readCenterFromParams(searchParams);
  const [mode, setMode] = useState<Mode>(searchParams.get('mode') === 'ego' || initialCenter ? 'ego' : 'global');
  const [center, setCenter] = useState<EgoRef | null>(initialCenter);
  const [depth, setDepth] = useState(2);
  const [enabledTypes, setEnabledTypes] = useState<Set<GraphNodeType>>(
    new Set(['psychologist', 'theory', 'concept', 'work', 'event', 'experiment', 'method', 'approach']),
  );

  const changeMode = (next: Mode) => {
    setMode(next);
    setSearchParams(next === 'ego' ? { mode: 'ego' } : {}, { replace: true });
  };

  const selectCenter = (ref: EgoRef) => {
    setCenter(ref);
    setSearchParams({ mode: 'ego', type: ref.type, id: ref.id }, { replace: true });
  };

  const toggleType = (type: GraphNodeType) => {
    setEnabledTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-9)' }}>
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Carte des idées
        </h1>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>
          {mode === 'global'
            ? isDesktop
              ? "Visualisez les relations entre psychologues et théories. Déplacez, zoomez et cliquez sur un nœud pour ouvrir sa fiche."
              : 'Choisissez un psychologue pour explorer sa chaîne d’influences, dans les deux sens.'
            : "Choisissez une personne, une théorie ou un concept, puis explorez pas à pas ce qui l'entoure."}
        </p>
      </div>

      <div className={styles.modeTabs} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'global'}
          className={`${styles.modeTab} ${mode === 'global' ? styles.modeTabActive : ''}`}
          onClick={() => changeMode('global')}
        >
          Vue d'ensemble
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'ego'}
          className={`${styles.modeTab} ${mode === 'ego' ? styles.modeTabActive : ''}`}
          onClick={() => changeMode('ego')}
        >
          Explorer autour de…
        </button>
      </div>

      {mode === 'global' ? (
        isDesktop ? (
          <KnowledgeGraph />
        ) : (
          <InfluenceChain />
        )
      ) : (
        <>
          <div className={styles.controls}>
            <div className={styles.controlRow}>
              <EgoEntityPicker onSelect={selectCenter} />
            </div>

            {isDesktop && (
              <div className={styles.controlRow}>
                <span className={`text-label ${styles.controlLabel}`}>Profondeur</span>
                <div className={styles.depthTabs}>
                  {DEPTH_OPTIONS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`${styles.depthTab} ${depth === d ? styles.depthTabActive : ''}`}
                      onClick={() => setDepth(d)}
                    >
                      {d} niveau{d > 1 ? 'x' : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.controlRow}>
              <span className={`text-label ${styles.controlLabel}`}>Filtres</span>
              <div className={styles.filterRow}>
                {FILTER_TYPES.map((f) => {
                  const active = enabledTypes.has(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      className={`${styles.filterChip} ${active ? styles.filterChipActive : ''}`}
                      style={active ? { background: f.color } : undefined}
                      onClick={() => toggleType(f.id)}
                      aria-pressed={active}
                    >
                      <span className={styles.filterDot} />
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {!center ? (
            <EmptyState
              icon={<Compass size={24} />}
              title="Choisissez un point de départ"
              description="Cherchez un psychologue, une théorie ou un concept ci-dessus pour lancer l'exploration."
            />
          ) : isDesktop ? (
            <EgoGraph center={center} depth={depth} enabledTypes={enabledTypes} />
          ) : (
            <EgoExplorerMobile center={center} enabledTypes={enabledTypes} onRecenter={selectCenter} />
          )}
        </>
      )}
    </div>
  );
}
