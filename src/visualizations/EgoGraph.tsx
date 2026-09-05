import { useMemo } from 'react';
import ReactFlow, { Background, Controls, Handle, MarkerType, Position, type Edge, type Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, FlaskConical, Lightbulb, Map, Microscope, ScrollText, Telescope } from 'lucide-react';
import { buildEgoGraph, layoutRadial, type EgoRef, type GraphNodeType } from '../services/egoGraph';
import styles from './EgoGraph.module.css';

const TYPE_ICONS: Record<Exclude<GraphNodeType, 'psychologist'>, typeof BookOpen> = {
  theory: BookOpen,
  concept: Lightbulb,
  work: ScrollText,
  event: Calendar,
  experiment: FlaskConical,
  method: Microscope,
  approach: Telescope,
  field: Map,
};

const centeredHandleStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  width: 1,
  height: 1,
  minWidth: 0,
  minHeight: 0,
  border: 'none',
  background: 'transparent',
  pointerEvents: 'none',
};

function EgoNodeView({ data }: { data: { label: string; type: GraphNodeType; color: string; initials?: string; photo?: string; isCenter: boolean } }) {
  const Icon = data.type === 'psychologist' ? undefined : TYPE_ICONS[data.type];
  return (
    <div className={`${styles.node} ${data.isCenter ? styles.nodeCenter : ''}`} style={{ '--accent': data.color } as React.CSSProperties}>
      <Handle type="target" position={Position.Top} style={centeredHandleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Bottom} style={centeredHandleStyle} isConnectable={false} />
      {data.type === 'psychologist' ? (
        <span className={styles.avatar} style={{ background: `linear-gradient(155deg, ${data.color}, #1a1230)` }}>
          {data.photo ? <img src={data.photo} alt="" className={styles.avatarPhoto} /> : data.initials}
        </span>
      ) : (
        Icon && (
          <span className={styles.iconBadge}>
            <Icon size={13} />
          </span>
        )
      )}
      <span className={styles.nodeLabel}>{data.label}</span>
    </div>
  );
}

const nodeTypes = { ego: EgoNodeView };

const TYPE_LABELS: Record<GraphNodeType, string> = {
  psychologist: 'Personnes',
  theory: 'Théories',
  concept: 'Concepts',
  work: 'Œuvres',
  event: 'Événements',
  experiment: 'Expériences',
  method: 'Méthodes',
  approach: 'Approches',
  field: 'Domaines',
};

const TYPE_COLORS: Record<GraphNodeType, string> = {
  psychologist: '#6B4EDB',
  theory: '#2E8FA6',
  concept: '#C77D3F',
  work: '#3F9E6D',
  event: '#A64A4A',
  experiment: '#2E6B8A',
  method: '#C4632F',
  approach: '#6B7A3F',
  field: '#4A6FA5',
};

interface EgoGraphProps {
  center: EgoRef;
  depth: number;
  enabledTypes: ReadonlySet<GraphNodeType>;
}

export function EgoGraph({ center, depth, enabledTypes }: EgoGraphProps) {
  const navigate = useNavigate();

  const { nodes, edges } = useMemo(() => {
    const graph = buildEgoGraph(center, depth, enabledTypes);
    const positions = layoutRadial(graph.nodes);

    const flowNodes: Node[] = graph.nodes.map((n) => {
      const pos = positions.get(n.key) ?? { x: 0, y: 0 };
      return {
        id: n.key,
        type: 'ego',
        position: pos,
        data: {
          label: n.name,
          type: n.type,
          color: n.accentColor,
          initials: n.portraitInitials,
          photo: n.portraitUrl,
          isCenter: n.depth === 0,
          href: n.href,
        },
      };
    });

    const flowEdges: Edge[] = graph.edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      type: 'straight',
      style: { stroke: 'var(--color-border-strong)', strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-border-strong)', width: 12, height: 12 },
    }));

    return { nodes: flowNodes, edges: flowEdges };
  }, [center, depth, enabledTypes]);

  const usedTypes = useMemo(() => {
    const set = new Set<GraphNodeType>();
    nodes.forEach((n) => set.add((n.data as { type: GraphNodeType }).type));
    return Array.from(set);
  }, [nodes]);

  const handleNodeClick = (_: unknown, node: Node) => {
    const href = (node.data as { href?: string }).href;
    if (href) navigate(href);
  };

  if (nodes.length <= 1) {
    return null;
  }

  return (
    <div>
      <div className={styles.legend}>
        {usedTypes.map((t) => (
          <span key={t} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: TYPE_COLORS[t] }} />
            {TYPE_LABELS[t]}
          </span>
        ))}
      </div>
      <div className={styles.wrap}>
        <ReactFlow
          key={`${center.type}:${center.id}:${depth}`}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          fitView
          minZoom={0.2}
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
