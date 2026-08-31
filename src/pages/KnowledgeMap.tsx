import { useIsDesktop } from '../hooks/useMediaQuery';
import { KnowledgeGraph } from '../visualizations/KnowledgeGraph';
import { InfluenceChain } from '../visualizations/InfluenceChain';

export default function KnowledgeMap() {
  const isDesktop = useIsDesktop();

  return (
    <div className="container" style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-9)' }}>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Carte des idées
        </h1>
        <p className="text-body-sm" style={{ maxWidth: 640 }}>
          {isDesktop
            ? "Visualisez les relations entre psychologues et théories. Déplacez, zoomez et cliquez sur un nœud pour ouvrir sa fiche."
            : 'Choisissez un psychologue pour explorer sa chaîne d’influences, dans les deux sens.'}
        </p>
      </div>

      {isDesktop ? <KnowledgeGraph /> : <InfluenceChain />}
    </div>
  );
}
