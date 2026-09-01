import { motion } from 'motion/react';
import { Clock, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { search as runSearch } from '../../services/search';
import { recordSearch } from '../../services/db';
import { useRecentSearches } from '../../hooks/useHistory';
import { PersonCard } from '../cards/PersonCard';
import { TheoryCard } from '../cards/TheoryCard';
import { SchoolCard } from '../cards/SchoolCard';
import { ConceptChip } from '../cards/ConceptChip';
import { EmptyState } from './EmptyState';
import styles from './SearchOverlay.module.css';

interface SearchOverlayProps {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const recentSearches = useRecentSearches();

  const results = useMemo(() => runSearch(query), [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (value: string) => {
    if (value.trim().length >= 2) recordSearch(value);
  };

  const goToConcept = (id: string) => {
    handleSubmit(query);
    navigate(`/concepts/${id}`);
    onClose();
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
    >
      <div className={styles.top}>
        <div className={styles.inputWrap}>
          <Search size={20} color="var(--color-text-tertiary)" />
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Rechercher une personne, une théorie ou un concept…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit(query);
            }}
            aria-label="Champ de recherche"
          />
        </div>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fermer la recherche">
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          {query.trim().length === 0 && (
            <>
              {recentSearches && recentSearches.length > 0 && (
                <div className={styles.group}>
                  <p className={`text-label ${styles.groupTitle}`}>Recherches récentes</p>
                  {recentSearches.map((r) => (
                    <button key={r.id} type="button" className={styles.recentRow} onClick={() => setQuery(r.query)}>
                      <Clock size={16} />
                      {r.query}
                    </button>
                  ))}
                </div>
              )}
              <EmptyState
                icon={<Search size={24} />}
                title="Explorez la psychologie"
                description="Recherchez un psychologue, une théorie, un courant ou un concept — par exemple « Freud », « conditionnement » ou « archétype »."
              />
            </>
          )}

          {query.trim().length > 0 && (
              <motion.div
                key={query}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {results.total === 0 ? (
                  <EmptyState
                    icon={<Search size={24} />}
                    title="Aucun résultat"
                    description={`Aucune entrée ne correspond à « ${query} ». Essayez un autre terme.`}
                  />
                ) : (
                  <>
                    {results.psychologists.length > 0 && (
                      <div className={styles.group}>
                        <p className={`text-label ${styles.groupTitle}`}>Personnes</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {results.psychologists.map((p) => (
                            <div key={p.id} onClick={onClose}>
                              <PersonCard psychologist={p} layout="list" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {results.theories.length > 0 && (
                      <div className={styles.group}>
                        <p className={`text-label ${styles.groupTitle}`}>Théories</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {results.theories.map((t) => (
                            <div key={t.id} onClick={onClose}>
                              <TheoryCard theory={t} layout="list" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {results.concepts.length > 0 && (
                      <div className={styles.group}>
                        <p className={`text-label ${styles.groupTitle}`}>Concepts</p>
                        <div className={styles.conceptRow}>
                          {results.concepts.map((c) => (
                            <div key={c.id} onClick={() => goToConcept(c.id)}>
                              <ConceptChip concept={c} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {results.schools.length > 0 && (
                      <div className={styles.group}>
                        <p className={`text-label ${styles.groupTitle}`}>Courants</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {results.schools.map((s) => (
                            <div key={s.id} onClick={onClose}>
                              <SchoolCard school={s} layout="list" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
