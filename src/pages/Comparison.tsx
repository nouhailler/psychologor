import { GitCompare, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { getPsychologistSync } from '../services/repository';
import { repository } from '../services/repository';
import styles from './Comparison.module.css';

const MAX_THEORIES = 3;

export default function Comparison() {
  const [searchParams] = useSearchParams();
  const { data: theories } = useAsync(() => repository.getAllTheories(), []);
  const isDesktop = useIsDesktop();

  const initial = searchParams.get('theorie');
  const [selectedIds, setSelectedIds] = useState<string[]>(initial ? [initial] : []);

  const selected = useMemo(
    () => selectedIds.map((id) => theories?.find((t) => t.id === id)).filter(Boolean) as NonNullable<typeof theories>,
    [selectedIds, theories],
  );

  const available = (theories ?? []).filter((t) => !selectedIds.includes(t.id));

  const addTheory = (id: string) => {
    if (!id || selectedIds.includes(id) || selectedIds.length >= MAX_THEORIES) return;
    setSelectedIds((prev) => [...prev, id]);
  };

  const removeTheory = (id: string) => setSelectedIds((prev) => prev.filter((s) => s !== id));

  const rows: { label: string; render: (t: NonNullable<typeof theories>[number]) => string }[] = [
    { label: "Objet d'étude", render: (t) => t.comparison.objectOfStudy },
    { label: 'Auteur(s)', render: (t) => t.psychologistIds.map((id) => getPsychologistSync(id)?.name).filter(Boolean).join(', ') },
    { label: 'Méthode clé', render: (t) => t.comparison.keyMethod },
    { label: 'Période', render: (t) => t.period },
    { label: 'Concepts clés', render: (t) => t.conceptIds.length.toString() + ' concept(s)' },
    { label: 'Critiques principales', render: (t) => t.critiques[0] ?? '—' },
  ];

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Comparaison
        </h1>
        <p className="text-body-sm">Sélectionnez jusqu'à trois théories pour comparer leurs principes, méthodes et concepts.</p>
      </div>

      <div className={styles.picker}>
        <p className={`text-label ${styles.pickerLabel}`}>Théories sélectionnées</p>
        <div className={styles.slots}>
          {selected.map((t) => (
            <span key={t.id} className={styles.slot}>
              {t.name}
              <button type="button" onClick={() => removeTheory(t.id)} aria-label={`Retirer ${t.name} de la comparaison`}>
                <X size={14} />
              </button>
            </span>
          ))}
          {selectedIds.length < MAX_THEORIES && (
            <select
              className={styles.select}
              value=""
              onChange={(e) => addTheory(e.target.value)}
              aria-label="Ajouter une théorie à comparer"
            >
              <option value="" disabled>
                + Ajouter une théorie
              </option>
              {available.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {selected.length < 2 ? (
        <EmptyState
          icon={<GitCompare size={24} />}
          title="Choisissez au moins deux théories"
          description="Ajoutez au moins deux théories ci-dessus pour lancer la comparaison côte à côte."
        />
      ) : isDesktop ? (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                {selected.map((t) => (
                  <th key={t.id}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  {selected.map((t) => (
                    <td key={t.id}>{row.render(t)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.stack}>
          {rows.map((row) => (
            <div key={row.label} className={styles.criterionBlock}>
              <p className={`text-label ${styles.criterionLabel}`}>{row.label}</p>
              {selected.map((t) => (
                <div key={t.id} className={styles.criterionCard}>
                  <p className="text-caption" style={{ fontWeight: 600 }}>{t.name}</p>
                  <p className="text-body-sm">{row.render(t)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
