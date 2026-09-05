import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ChevronRight, FlaskConical, Lightbulb, Map as MapIcon, Microscope, ScrollText, Telescope } from 'lucide-react';
import { buildEgoGraph, type EgoNode, type EgoRef, type GraphNodeType } from '../services/egoGraph';
import { EmptyState } from '../components/ui/EmptyState';
import styles from './EgoExplorerMobile.module.css';

const TYPE_ICONS: Record<Exclude<GraphNodeType, 'psychologist'>, typeof BookOpen> = {
  theory: BookOpen,
  concept: Lightbulb,
  work: ScrollText,
  event: Calendar,
  experiment: FlaskConical,
  method: Microscope,
  approach: Telescope,
  field: MapIcon,
};

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

interface EgoExplorerMobileProps {
  center: EgoRef;
  enabledTypes: ReadonlySet<GraphNodeType>;
  onRecenter: (ref: EgoRef) => void;
}

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

export function EgoExplorerMobile({ center, enabledTypes, onRecenter }: EgoExplorerMobileProps) {
  const { nodes } = useMemo(() => buildEgoGraph(center, 1, enabledTypes), [center, enabledTypes]);

  const centerNode = nodes.find((n) => n.depth === 0);
  const connections = nodes.filter((n) => n.depth === 1);

  const grouped = useMemo(() => {
    const map = new Map<GraphNodeType, EgoNode[]>();
    connections.forEach((n) => {
      if (!map.has(n.type)) map.set(n.type, []);
      map.get(n.type)!.push(n);
    });
    return map;
  }, [connections]);

  if (!centerNode) return null;

  return (
    <div>
      <div className={styles.centerCard}>
        <span className={styles.avatar} style={{ background: gradientFor(centerNode.accentColor) }}>
          {centerNode.portraitUrl ? (
            <img src={centerNode.portraitUrl} alt="" className={styles.avatarPhoto} />
          ) : (
            centerNode.portraitInitials ?? centerNode.name[0]
          )}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="text-h4">{centerNode.name}</p>
          {centerNode.href && (
            <Link to={centerNode.href} className={styles.centerLink}>
              Voir la fiche →
            </Link>
          )}
        </div>
      </div>

      {connections.length === 0 ? (
        <EmptyState
          icon={<Lightbulb size={22} />}
          title="Aucune connexion trouvée"
          description="Essayez d'activer d'autres filtres ci-dessus pour voir les entités liées."
        />
      ) : (
        Array.from(grouped.entries()).map(([type, items]) => {
          const Icon = type === 'psychologist' ? undefined : TYPE_ICONS[type];
          return (
            <div key={type} className={styles.group}>
              <p className={`text-label ${styles.groupTitle}`}>
                {Icon && <Icon size={13} />}
                {TYPE_LABELS[type]}
              </p>
              {items.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={styles.row}
                  onClick={() => onRecenter({ type: item.type, id: item.id })}
                >
                  <span className={styles.rowIcon} style={{ background: TYPE_COLORS[type] }}>
                    {type === 'psychologist' && item.portraitUrl ? (
                      <img src={item.portraitUrl} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    ) : type === 'psychologist' ? (
                      <span style={{ fontSize: '0.6875rem', fontWeight: 700 }}>{item.portraitInitials}</span>
                    ) : (
                      Icon && <Icon size={14} />
                    )}
                  </span>
                  <span className={`text-body-sm ${styles.rowLabel}`} style={{ fontWeight: 600 }}>
                    {item.name}
                  </span>
                  <ChevronRight size={16} color="var(--color-text-tertiary)" />
                </button>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
}
