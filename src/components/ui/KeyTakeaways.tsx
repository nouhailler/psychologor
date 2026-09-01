import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './KeyTakeaways.module.css';

interface AssociationItem {
  id: string;
  name: string;
  href: string;
}

interface AssociationGroup {
  label: string;
  items: AssociationItem[];
}

interface KeyTakeawaysProps {
  items: readonly string[];
  accentColor: string;
  keywords: string[];
  associations: AssociationGroup[];
}

/**
 * Bloc « À retenir » : les idées essentielles d'une fiche, pensé pour la
 * révision — mots-clés et entités associées sont dérivés des relations déjà
 * présentes sur l'entité, jamais dupliqués à la main.
 */
export function KeyTakeaways({ items, accentColor, keywords, associations }: KeyTakeawaysProps) {
  const visibleGroups = associations.filter((g) => g.items.length > 0);

  return (
    <div className={styles.card} style={{ '--accent': accentColor } as React.CSSProperties}>
      <div className={styles.header}>
        <Sparkles size={16} />
        <p className={`text-label ${styles.headerTitle}`}>À retenir</p>
      </div>
      <div className={styles.items}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.badge}>{i + 1}</span>
            <p className={styles.itemText}>{item}</p>
          </div>
        ))}
      </div>

      {(keywords.length > 0 || visibleGroups.length > 0) && (
        <div className={styles.footer}>
          {keywords.length > 0 && (
            <div className={styles.footerGroup}>
              <p className={`text-label ${styles.footerLabel}`}>Mots-clés</p>
              <div className={styles.keywordRow}>
                {keywords.map((k) => (
                  <span key={k} className={styles.keyword}>
                    {k}
                  </span>
                ))}
              </div>
            </div>
          )}
          {visibleGroups.map((group) => (
            <div key={group.label} className={styles.footerGroup}>
              <p className={`text-label ${styles.footerLabel}`}>{group.label}</p>
              <div className={styles.associationList}>
                {group.items.map((item) => (
                  <Link key={item.id} to={item.href} className={styles.associationLink}>
                    <ChevronRight size={13} />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
