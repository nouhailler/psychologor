import { BookOpen, ChevronDown, Lightbulb, Sparkles } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { buildGenesisChain, type GenesisTarget } from '../../services/genesis';
import styles from './GenesisChain.module.css';

interface GenesisChainProps {
  target: GenesisTarget;
}

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

export function GenesisChain({ target }: GenesisChainProps) {
  const chain = useMemo(
    () => buildGenesisChain(target),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [target.type, target.id],
  );

  if (chain.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className="text-h2" style={{ marginBottom: 'var(--space-2)' }}>
        Genèse de l'idée
      </h2>
      <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', maxWidth: 560 }}>
        Comment est-on arrivé à cette idée ? Un chemin d'influences, du plus ancien au plus récent.
      </p>
      <div className={styles.chain}>
        {chain.map((node, i) => {
          const isTarget = i === chain.length - 1;
          const content = (
            <>
              <span
                className={styles.itemIcon}
                style={node.kind === 'psychologist' ? { background: gradientFor(node.accentColor) } : { background: node.accentColor }}
              >
                {node.kind === 'psychologist' ? (
                  node.portraitUrl ? (
                    <img src={node.portraitUrl} alt="" className={styles.itemPhoto} />
                  ) : (
                    node.portraitInitials
                  )
                ) : node.kind === 'theory' ? (
                  <BookOpen size={15} />
                ) : (
                  <Lightbulb size={15} />
                )}
              </span>
              <span className={styles.itemLabel}>{node.name}</span>
              {isTarget && (
                <span className={styles.itemBadge}>
                  <Sparkles size={11} />
                  Cette page
                </span>
              )}
            </>
          );

          return (
            <div key={`${node.kind}-${node.id}`} className={styles.step}>
              {i > 0 && <ChevronDown size={16} className={styles.connector} aria-hidden="true" />}
              {isTarget ? (
                <div className={`${styles.item} ${styles.itemTarget}`}>{content}</div>
              ) : (
                <Link to={node.href} className={styles.item}>
                  {content}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
