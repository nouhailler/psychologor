import { Check, GitCompare, Minus, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { repository } from '../services/repository';
import { compareEntities, type ComparisonEntityType } from '../services/comparisonEngine';
import type { Concept, Psychologist, School, Theory } from '../models/types';
import styles from './Comparison.module.css';

const MAX_ITEMS = 3;

type Entity = Theory | Concept | Psychologist | School;

const TYPE_TABS: { id: ComparisonEntityType; label: string }[] = [
  { id: 'theories', label: 'Théories' },
  { id: 'concepts', label: 'Concepts' },
  { id: 'psychologists', label: 'Psychologues' },
  { id: 'schools', label: 'Courants' },
];

function getEntityName(type: ComparisonEntityType, entity: Entity): string {
  if (type === 'concepts') return (entity as Concept).term;
  if (type === 'schools') return (entity as School).shortName;
  return (entity as Theory | Psychologist).name;
}

function getEntityHref(type: ComparisonEntityType, id: string): string | undefined {
  if (type === 'theories') return `/theories/${id}`;
  if (type === 'concepts') return `/concepts/${id}`;
  if (type === 'psychologists') return `/psychologues/${id}`;
  return undefined;
}

export default function Comparison() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDesktop = useIsDesktop();

  const initialType = (searchParams.get('type') as ComparisonEntityType) || 'theories';
  const [type, setType] = useState<ComparisonEntityType>(initialType);

  const initialId = searchParams.get('id') ?? searchParams.get('theorie');
  const [selectedIds, setSelectedIds] = useState<string[]>(initialId ? [initialId] : []);

  const { data: theories } = useAsync(() => repository.getAllTheories(), []);
  const { data: concepts } = useAsync(() => repository.getAllConcepts(), []);
  const { data: psychologists } = useAsync(() => repository.getAllPsychologists(), []);
  const { data: schools } = useAsync(() => repository.getAllSchools(), []);

  const allItems: Entity[] = useMemo(() => {
    if (type === 'theories') return theories ?? [];
    if (type === 'concepts') return concepts ?? [];
    if (type === 'psychologists') return psychologists ?? [];
    return schools ?? [];
  }, [type, theories, concepts, psychologists, schools]);

  const itemById = useMemo(() => new Map(allItems.map((e) => [e.id, e])), [allItems]);

  const selected = selectedIds.map((id) => itemById.get(id)).filter(Boolean) as Entity[];
  const available = allItems.filter((e) => !selectedIds.includes(e.id));

  const changeType = (next: ComparisonEntityType) => {
    setType(next);
    setSelectedIds([]);
    setSearchParams({ type: next }, { replace: true });
  };

  const addItem = (id: string) => {
    if (!id || selectedIds.includes(id) || selectedIds.length >= MAX_ITEMS) return;
    setSelectedIds((prev) => [...prev, id]);
  };

  const removeItem = (id: string) => setSelectedIds((prev) => prev.filter((s) => s !== id));

  const result = useMemo(
    () => (selected.length >= 2 ? compareEntities(type, selected, theories ?? []) : null),
    [type, selected, theories],
  );

  const entityLabel = TYPE_TABS.find((t) => t.id === type)!.label;

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Comparaison
        </h1>
        <p className="text-body-sm">
          Sélectionnez jusqu'à trois éléments — théories, concepts, psychologues ou courants — pour les comparer côte à côte.
        </p>
      </div>

      <div className={styles.typeTabs} role="tablist">
        {TYPE_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={type === t.id}
            className={`${styles.typeTab} ${type === t.id ? styles.typeTabActive : ''}`}
            onClick={() => changeType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.picker}>
        <p className={`text-label ${styles.pickerLabel}`}>{entityLabel} sélectionné(e)s</p>
        <div className={styles.slots}>
          {selected.map((item) => (
            <span key={item.id} className={styles.slot}>
              {getEntityName(type, item)}
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                aria-label={`Retirer ${getEntityName(type, item)} de la comparaison`}
              >
                <X size={14} />
              </button>
            </span>
          ))}
          {selectedIds.length < MAX_ITEMS && (
            <select
              className={styles.select}
              value=""
              onChange={(e) => addItem(e.target.value)}
              aria-label={`Ajouter ${entityLabel.toLowerCase()} à comparer`}
            >
              <option value="" disabled>
                + Ajouter {type === 'concepts' ? 'un concept' : type === 'psychologists' ? 'un psychologue' : type === 'schools' ? 'un courant' : 'une théorie'}
              </option>
              {available.map((item) => (
                <option key={item.id} value={item.id}>
                  {getEntityName(type, item)}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {selected.length < 2 || !result ? (
        <EmptyState
          icon={<GitCompare size={24} />}
          title={`Choisissez au moins deux ${entityLabel.toLowerCase()}`}
          description="Ajoutez au moins deux éléments ci-dessus pour lancer la comparaison côte à côte."
        />
      ) : (
        <>
          <p className={`text-label ${styles.tableTitle}`}>Comparaison rapide</p>
          {isDesktop ? (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th></th>
                    {selected.map((item) => {
                      const href = getEntityHref(type, item.id);
                      return (
                        <th key={item.id}>
                          {href ? (
                            <Link to={href} className={styles.headerLink}>
                              {getEntityName(type, item)}
                            </Link>
                          ) : (
                            getEntityName(type, item)
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      {row.values.map((v, i) => (
                        <td key={i}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.stack}>
              {result.rows.map((row) => (
                <div key={row.label} className={styles.criterionBlock}>
                  <p className={`text-label ${styles.criterionLabel}`}>{row.label}</p>
                  {selected.map((item, i) => (
                    <div key={item.id} className={styles.criterionCard}>
                      <p className="text-caption" style={{ fontWeight: 600 }}>
                        {getEntityName(type, item)}
                      </p>
                      <p className="text-body-sm">{row.values[i]}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {result.cross && (
            <>
              <p className={`text-label ${styles.tableTitle}`}>{result.cross.title}</p>
              <div className={styles.tableWrap}>
                <table className={styles.crossTable}>
                  <thead>
                    <tr>
                      <th></th>
                      {selected.map((item) => (
                        <th key={item.id}>{getEntityName(type, item)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.cross.rows.map((row) => (
                      <tr key={row.id}>
                        <th>
                          <Link to={row.href} className={styles.crossRowLink}>
                            {row.label}
                          </Link>
                        </th>
                        {row.present.map((present, i) => (
                          <td key={i} className={styles.crossCell}>
                            {present ? (
                              <Check size={16} className={styles.crossCheck} aria-label="Oui" />
                            ) : (
                              <Minus size={14} className={styles.crossDash} aria-label="Non" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
