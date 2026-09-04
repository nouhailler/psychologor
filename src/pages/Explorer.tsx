import { LayoutGrid, List, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PersonCard } from '../components/cards/PersonCard';
import { TheoryCard } from '../components/cards/TheoryCard';
import { SchoolCard } from '../components/cards/SchoolCard';
import { WorkCard } from '../components/cards/WorkCard';
import { ExperimentCard } from '../components/cards/ExperimentCard';
import { MethodCard } from '../components/cards/MethodCard';
import { ApproachCard } from '../components/cards/ApproachCard';
import { EmptyState } from '../components/ui/EmptyState';
import { ListRowSkeleton } from '../components/ui/Skeleton';
import { METHOD_CATEGORY_LABELS } from '../data/methods';
import { useAsync } from '../hooks/useAsync';
import { getPsychologistSync } from '../services/repository';
import { repository } from '../services/repository';
import { normalizeForSearch } from '../utils/slug';
import styles from './Explorer.module.css';

interface ExplorerProps {
  initialTab?: 'psychologues' | 'theories' | 'courants' | 'oeuvres' | 'experiences' | 'methodes' | 'approches';
}

type SortOrder = 'name' | 'date';

export default function Explorer({ initialTab }: ExplorerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<
    'psychologues' | 'theories' | 'courants' | 'oeuvres' | 'experiences' | 'methodes' | 'approches'
  >(initialTab ?? 'psychologues');
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState<SortOrder>('name');
  const activeSchool = searchParams.get('courant');

  const { data: psychologists, loading: loadingPeople } = useAsync(() => repository.getAllPsychologists(), []);
  const { data: theories, loading: loadingTheories } = useAsync(() => repository.getAllTheories(), []);
  const { data: schools, loading: loadingSchools } = useAsync(() => repository.getAllSchools(), []);
  const { data: works, loading: loadingWorks } = useAsync(() => repository.getAllWorks(), []);
  const { data: experimentsData, loading: loadingExperiments } = useAsync(() => repository.getAllExperiments(), []);
  const { data: methodsData, loading: loadingMethods } = useAsync(() => repository.getAllMethods(), []);
  const { data: approachesData, loading: loadingApproaches } = useAsync(() => repository.getAllApproaches(), []);

  const filteredPsychologists = useMemo(() => {
    let list = psychologists ?? [];
    if (activeSchool) list = list.filter((p) => p.schoolIds.includes(activeSchool));
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((p) => normalizeForSearch(`${p.name} ${p.nationality}`).includes(q));
    }
    return [...list].sort((a, b) =>
      sort === 'name' ? a.name.localeCompare(b.name) : Number(a.birth) - Number(b.birth),
    );
  }, [psychologists, activeSchool, query, sort]);

  const filteredTheories = useMemo(() => {
    let list = theories ?? [];
    if (activeSchool) list = list.filter((t) => t.schoolIds.includes(activeSchool));
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((t) => normalizeForSearch(`${t.name} ${t.tagline}`).includes(q));
    }
    return [...list].sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : a.period.localeCompare(b.period)));
  }, [theories, activeSchool, query, sort]);

  const filteredSchools = useMemo(() => {
    let list = schools ?? [];
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((s) => normalizeForSearch(`${s.name} ${s.summary}`).includes(q));
    }
    return [...list].sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : a.period.localeCompare(b.period)));
  }, [schools, query, sort]);

  const filteredWorks = useMemo(() => {
    let list = works ?? [];
    if (activeSchool) {
      list = list.filter((w) => w.psychologistIds.some((pid) => getPsychologistSync(pid)?.schoolIds.includes(activeSchool)));
    }
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((w) => normalizeForSearch(`${w.title} ${w.originalTitle ?? ''} ${w.description ?? ''}`).includes(q));
    }
    return [...list].sort((a, b) => (sort === 'name' ? a.title.localeCompare(b.title) : a.year.localeCompare(b.year)));
  }, [works, activeSchool, query, sort]);

  const filteredExperiments = useMemo(() => {
    let list = experimentsData ?? [];
    if (activeSchool) {
      list = list.filter((e) => e.psychologistIds.some((pid) => getPsychologistSync(pid)?.schoolIds.includes(activeSchool)));
    }
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((e) => normalizeForSearch(`${e.title} ${e.researchers} ${e.summary}`).includes(q));
    }
    return [...list].sort((a, b) => (sort === 'name' ? a.title.localeCompare(b.title) : a.year.localeCompare(b.year)));
  }, [experimentsData, activeSchool, query, sort]);

  const filteredMethods = useMemo(() => {
    let list = methodsData ?? [];
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((m) => normalizeForSearch(`${m.name} ${m.shortDefinition}`).includes(q));
    }
    return [...list].sort((a, b) =>
      sort === 'name'
        ? a.name.localeCompare(b.name)
        : METHOD_CATEGORY_LABELS[a.category].localeCompare(METHOD_CATEGORY_LABELS[b.category]) || a.name.localeCompare(b.name),
    );
  }, [methodsData, query, sort]);

  const filteredApproaches = useMemo(() => {
    let list = approachesData ?? [];
    if (query.trim()) {
      const q = normalizeForSearch(query);
      list = list.filter((a) => normalizeForSearch(`${a.name} ${a.shortDefinition}`).includes(q));
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [approachesData, query]);

  const toggleSchool = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (activeSchool === id) next.delete('courant');
    else next.set('courant', id);
    setSearchParams(next, { replace: true });
  };

  const loading =
    tab === 'psychologues'
      ? loadingPeople
      : tab === 'theories'
        ? loadingTheories
        : tab === 'courants'
          ? loadingSchools
          : tab === 'oeuvres'
            ? loadingWorks
            : tab === 'experiences'
              ? loadingExperiments
              : tab === 'methodes'
                ? loadingMethods
                : loadingApproaches;
  const isEmpty =
    tab === 'psychologues'
      ? filteredPsychologists.length === 0
      : tab === 'theories'
        ? filteredTheories.length === 0
        : tab === 'courants'
          ? filteredSchools.length === 0
          : tab === 'oeuvres'
            ? filteredWorks.length === 0
            : tab === 'experiences'
              ? filteredExperiments.length === 0
              : tab === 'methodes'
                ? filteredMethods.length === 0
                : filteredApproaches.length === 0;

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Explorer
        </h1>
        <p className="text-body-sm">Parcourez l'ensemble des psychologues, des théories, des courants, des œuvres, des expériences, des méthodes et des approches de la base.</p>
      </div>

      <div className={styles.tabs} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'psychologues'}
          className={`${styles.tab} ${tab === 'psychologues' ? styles.active : ''}`}
          onClick={() => setTab('psychologues')}
        >
          Psychologues
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'theories'}
          className={`${styles.tab} ${tab === 'theories' ? styles.active : ''}`}
          onClick={() => setTab('theories')}
        >
          Théories
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'courants'}
          className={`${styles.tab} ${tab === 'courants' ? styles.active : ''}`}
          onClick={() => setTab('courants')}
        >
          Courants
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'oeuvres'}
          className={`${styles.tab} ${tab === 'oeuvres' ? styles.active : ''}`}
          onClick={() => setTab('oeuvres')}
        >
          Œuvres
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'experiences'}
          className={`${styles.tab} ${tab === 'experiences' ? styles.active : ''}`}
          onClick={() => setTab('experiences')}
        >
          Expériences
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'methodes'}
          className={`${styles.tab} ${tab === 'methodes' ? styles.active : ''}`}
          onClick={() => setTab('methodes')}
        >
          Méthodes
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'approches'}
          className={`${styles.tab} ${tab === 'approches' ? styles.active : ''}`}
          onClick={() => setTab('approches')}
        >
          Approches
        </button>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.searchRow}>
          <Search size={18} color="var(--color-text-tertiary)" />
          <input
            type="search"
            placeholder={
              tab === 'psychologues'
                ? 'Rechercher un psychologue…'
                : tab === 'theories'
                  ? 'Rechercher une théorie…'
                  : tab === 'courants'
                    ? 'Rechercher un courant…'
                    : tab === 'oeuvres'
                      ? 'Rechercher une œuvre…'
                      : tab === 'experiences'
                        ? 'Rechercher une expérience…'
                        : tab === 'methodes'
                          ? 'Rechercher une méthode…'
                          : 'Rechercher une approche…'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Rechercher"
          />
        </div>

        <div className={styles.filterRow}>
          {tab !== 'courants' && tab !== 'methodes' && tab !== 'approches' && (
            <div className={styles.chips}>
              {(schools ?? []).map((school) => (
                <button
                  key={school.id}
                  type="button"
                  onClick={() => toggleSchool(school.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: 32,
                    padding: '0 12px',
                    borderRadius: 999,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    whiteSpace: 'nowrap',
                    border: '1px solid var(--color-border)',
                    background: activeSchool === school.id ? 'var(--color-primary)' : 'var(--color-surface-elevated)',
                    color: activeSchool === school.id ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
                  }}
                >
                  {school.shortName}
                </button>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexShrink: 0 }}>
            {tab !== 'approches' && (
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
                aria-label="Trier"
                style={{
                  height: 34,
                  borderRadius: 999,
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                  color: 'var(--color-text-secondary)',
                  padding: '0 var(--space-3)',
                  fontSize: '0.8125rem',
                }}
              >
                <option value="name">Nom (A–Z)</option>
                <option value="date">
                  {tab === 'psychologues'
                    ? 'Date de naissance'
                    : tab === 'oeuvres' || tab === 'experiences'
                      ? 'Année'
                      : tab === 'methodes'
                        ? 'Catégorie'
                        : 'Période'}
                </option>
              </select>
            )}
            <div className={styles.viewToggle}>
              <button
                type="button"
                className={`${styles.viewButton} ${view === 'grid' ? styles.active : ''}`}
                onClick={() => setView('grid')}
                aria-label="Affichage grille"
                aria-pressed={view === 'grid'}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                type="button"
                className={`${styles.viewButton} ${view === 'list' ? styles.active : ''}`}
                onClick={() => setView('list')}
                aria-label="Affichage liste"
                aria-pressed={view === 'list'}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className={styles.resultsList}>
          {Array.from({ length: 5 }).map((_, i) => (
            <ListRowSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && isEmpty && (
        <EmptyState
          icon={<Search size={24} />}
          title="Aucun résultat"
          description={
            tab === 'courants' || tab === 'methodes' || tab === 'approches'
              ? 'Essayez de modifier votre recherche.'
              : 'Essayez de modifier votre recherche ou vos filtres de courant.'
          }
        />
      )}

      {!loading && !isEmpty && tab === 'psychologues' && (
        <div className={view === 'grid' ? styles.resultsGrid : styles.resultsList}>
          {filteredPsychologists.map((p) => (
            <PersonCard key={p.id} psychologist={p} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'theories' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredTheories.map((t) => (
            <TheoryCard key={t.id} theory={t} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'courants' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredSchools.map((s) => (
            <SchoolCard key={s.id} school={s} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'oeuvres' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredWorks.map((w) => (
            <WorkCard key={w.id} work={w} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'experiences' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredExperiments.map((e) => (
            <ExperimentCard key={e.id} experiment={e} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'methodes' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredMethods.map((m) => (
            <MethodCard key={m.id} method={m} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}

      {!loading && !isEmpty && tab === 'approches' && (
        <div className={view === 'grid' ? styles.resultsGridTheories : styles.resultsList}>
          {filteredApproaches.map((a) => (
            <ApproachCard key={a.id} approach={a} layout={view === 'grid' ? 'grid' : 'list'} />
          ))}
        </div>
      )}
    </div>
  );
}
