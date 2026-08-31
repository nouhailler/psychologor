import { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  type Edge,
  type Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useNavigate } from 'react-router-dom';
import { psychologists } from '../data/psychologists';
import { theories } from '../data/theories';
import styles from './KnowledgeGraph.module.css';

const COLUMN_WIDTH = 210;
const ROW_HEIGHT = 130;
const COLUMNS = 6;

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

function PersonNode({ data }: { data: { label: string; color: string; initials: string } }) {
  return (
    <div className={styles.personNode}>
      <span className={styles.avatar} style={{ background: gradientFor(data.color) }}>
        {data.initials}
      </span>
      {data.label}
    </div>
  );
}

function TheoryNode({ data }: { data: { label: string } }) {
  return <div className={styles.theoryNode}>{data.label}</div>;
}

const nodeTypes = { person: PersonNode, theory: TheoryNode };

export function KnowledgeGraph() {
  const navigate = useNavigate();

  const { nodes, edges } = useMemo(() => {
    const sorted = [...psychologists].sort((a, b) => Number(a.birth) - Number(b.birth));

    const personNodes: Node[] = sorted.map((p, i) => ({
      id: p.id,
      type: 'person',
      position: { x: (i % COLUMNS) * COLUMN_WIDTH, y: Math.floor(i / COLUMNS) * ROW_HEIGHT },
      data: { label: p.name, color: p.accentColor, initials: p.portraitInitials },
    }));

    const theoryRowY = Math.ceil(sorted.length / COLUMNS) * ROW_HEIGHT + 80;
    const theoryNodes: Node[] = theories.map((t, i) => ({
      id: `theory-${t.id}`,
      type: 'theory',
      position: { x: (i % COLUMNS) * COLUMN_WIDTH, y: theoryRowY + Math.floor(i / COLUMNS) * 100 },
      data: { label: t.name },
    }));

    const influenceEdges: Edge[] = sorted.flatMap((p) =>
      p.influencedIds.map((targetId) => ({
        id: `inf-${p.id}-${targetId}`,
        source: p.id,
        target: targetId,
        animated: false,
        style: { stroke: 'var(--color-primary)', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-primary)', width: 14, height: 14 },
      })),
    );

    const authorshipEdges: Edge[] = theories.flatMap((t) =>
      t.psychologistIds.map((pid) => ({
        id: `auth-${pid}-${t.id}`,
        source: pid,
        target: `theory-${t.id}`,
        style: { stroke: 'var(--color-border-strong)', strokeWidth: 1, strokeDasharray: '4 3' },
      })),
    );

    return {
      nodes: [...personNodes, ...theoryNodes],
      edges: [...influenceEdges, ...authorshipEdges],
    };
  }, []);

  const handleNodeClick = (_: unknown, node: Node) => {
    if (node.type === 'theory') {
      navigate(`/theories/${node.id.replace('theory-', '')}`);
    } else {
      navigate(`/psychologues/${node.id}`);
    }
  };

  return (
    <div>
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendDotPerson} /> Psychologue
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDotTheory} /> Théorie
        </span>
        <span className={styles.legendItem}>→ Ligne pleine : a influencé</span>
        <span className={styles.legendItem}>┄ Ligne pointillée : a développé</span>
      </div>
      <div className={styles.wrap}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          fitView
          minZoom={0.3}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={24} color="var(--color-border)" />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
