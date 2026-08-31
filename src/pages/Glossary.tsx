import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { repository } from '../services/repository';
import { normalizeForSearch } from '../utils/slug';
import styles from './Glossary.module.css';

export default function Glossary() {
  const { data: concepts } = useAsync(() => repository.getAllConcepts(), []);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const list = concepts ?? [];
    if (!query.trim()) return list;
    const q = normalizeForSearch(query);
    return list.filter((c) => normalizeForSearch(`${c.term} ${c.shortDefinition}`).includes(q));
  }, [concepts, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const concept of [...filtered].sort((a, b) => a.term.localeCompare(b.term))) {
      const letter = concept.term[0]?.toUpperCase() ?? '#';
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(concept);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Glossaire
        </h1>
        <p className="text-body-sm">Les concepts fondamentaux de la psychologie, expliqués et reliés entre eux.</p>
      </div>

      <div className={styles.searchRow}>
        <Search size={18} color="var(--color-text-tertiary)" />
        <input
          type="search"
          placeholder="Rechercher un concept…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Rechercher un concept"
        />
      </div>

      {grouped.length === 0 && (
        <EmptyState icon={<Search size={24} />} title="Aucun concept trouvé" description={`Aucun terme ne correspond à « ${query} ».`} />
      )}

      {grouped.map(([letter, items]) => (
        <div key={letter} className={styles.letterGroup}>
          <h2 className={`text-h3 ${styles.letter}`}>{letter}</h2>
          <div className={styles.termGrid}>
            {items.map((concept) => (
              <Link key={concept.id} to={`/concepts/${concept.id}`} className={styles.termCard}>
                <p className="text-h4" style={{ marginBottom: 4 }}>
                  {concept.term}
                </p>
                <p className="text-body-sm">{concept.shortDefinition}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
