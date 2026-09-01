import { BookOpen, Lightbulb, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { search } from '../services/search';
import type { EgoRef } from '../services/egoGraph';
import styles from './EgoEntityPicker.module.css';

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

interface EgoEntityPickerProps {
  onSelect: (ref: EgoRef, label: string) => void;
}

export function EgoEntityPicker({ onSelect }: EgoEntityPickerProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const results = useMemo(() => (query.trim().length > 0 ? search(query, 5) : null), [query]);

  const select = (ref: EgoRef, label: string) => {
    onSelect(ref, label);
    setQuery('');
    setOpen(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inputRow}>
        <Search size={16} color="var(--color-text-tertiary)" />
        <input
          type="search"
          placeholder="Chercher un psychologue, une théorie, un concept…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          aria-label="Choisir l'entité centrale à explorer"
        />
      </div>
      {open && results && results.total > 0 && (
        <div className={styles.dropdown}>
          {results.psychologists.length > 0 && (
            <>
              <p className={`text-label ${styles.groupLabel}`}>Personnes</p>
              {results.psychologists.map((p) => (
                <button key={p.id} type="button" className={styles.option} onMouseDown={() => select({ type: 'psychologist', id: p.id }, p.name)}>
                  <span className={styles.optionAvatar} style={{ background: gradientFor(p.accentColor) }}>
                    {p.portraitUrl ? <img src={p.portraitUrl} alt="" className={styles.optionPhoto} /> : p.portraitInitials}
                  </span>
                  <span className="text-body-sm">{p.name}</span>
                </button>
              ))}
            </>
          )}
          {results.theories.length > 0 && (
            <>
              <p className={`text-label ${styles.groupLabel}`}>Théories</p>
              {results.theories.map((t) => (
                <button key={t.id} type="button" className={styles.option} onMouseDown={() => select({ type: 'theory', id: t.id }, t.name)}>
                  <span className={styles.optionAvatar} style={{ background: '#2E8FA6' }}>
                    <BookOpen size={13} />
                  </span>
                  <span className="text-body-sm">{t.name}</span>
                </button>
              ))}
            </>
          )}
          {results.concepts.length > 0 && (
            <>
              <p className={`text-label ${styles.groupLabel}`}>Concepts</p>
              {results.concepts.map((c) => (
                <button key={c.id} type="button" className={styles.option} onMouseDown={() => select({ type: 'concept', id: c.id }, c.term)}>
                  <span className={styles.optionAvatar} style={{ background: '#C77D3F' }}>
                    <Lightbulb size={13} />
                  </span>
                  <span className="text-body-sm">{c.term}</span>
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
