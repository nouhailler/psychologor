import { CheckCircle2, Clock, Compass, ListChecks } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { useAllPathProgress } from '../hooks/usePathProgress';
import { getPsychologistSync } from '../services/repository';
import { repository } from '../services/repository';
import type { LearningPath, PathCategory } from '../models/types';
import styles from './Paths.module.css';

function gradientFor(color: string) {
  return `radial-gradient(140% 160% at 15% 0%, ${color} 0%, color-mix(in srgb, ${color} 40%, #120c26) 60%, #0d0920 100%)`;
}

const CATEGORY_LABELS: Record<PathCategory, string> = {
  introduction: 'Pour commencer',
  courant: 'Courants de pensée',
  psychologue: 'Portraits intellectuels',
  concept: 'Autour d’un concept',
  debat: 'Deux théories s’affrontent',
  experience: 'Grandes expériences',
  histoire: 'Histoire de la psychologie',
  reseau: 'Une idée, plusieurs psychologues',
  transversal: 'Regards transversaux',
  etudiant: 'Révision',
};

const CATEGORY_ORDER: PathCategory[] = [
  'introduction',
  'courant',
  'psychologue',
  'concept',
  'debat',
  'experience',
  'histoire',
  'reseau',
  'transversal',
  'etudiant',
];

function StepPreviewAvatars({ path }: { path: LearningPath }) {
  const people = path.steps
    .filter((s) => s.entityType === 'psychologist' && s.entityId)
    .map((s) => getPsychologistSync(s.entityId as string))
    .filter(Boolean)
    .slice(0, 4);

  if (people.length === 0) return null;

  return (
    <div className={styles.stepChips}>
      {people.map(
        (p) =>
          p && (
            <span
              key={p.id}
              className={styles.miniAvatar}
              style={{ background: `linear-gradient(155deg, ${p.accentColor}, #1a1230)` }}
              title={p.name}
            >
              {p.portraitUrl ? (
                <img src={p.portraitUrl} alt="" className={styles.miniAvatarPhoto} />
              ) : (
                p.portraitInitials
              )}
            </span>
          ),
      )}
    </div>
  );
}

function PathCard({ path, progress }: { path: LearningPath; progress?: { currentStepIndex: number; completedStepIds: string[]; completedAt?: number } }) {
  const totalSteps = path.steps.length;
  const completedCount = progress?.completedStepIds.length ?? 0;
  const percent = Math.min(100, Math.round((completedCount / totalSteps) * 100));
  const isCompleted = Boolean(progress?.completedAt);
  const hasStarted = Boolean(progress) && !isCompleted;

  return (
    <Link to={`/parcours/${path.id}`} className={styles.card}>
      <div className={styles.cardTop} style={{ background: gradientFor(path.accentColor) }}>
        <p className={`text-label ${styles.stepCount}`}>
          <ListChecks size={13} />
          {totalSteps} étapes
          <span aria-hidden="true">·</span>
          <Clock size={13} />
          {path.estimatedMinutes} min
        </p>
        <h2 className={`text-h3 ${styles.cardTitle}`}>{path.title}</h2>
        <p className={`text-body-sm ${styles.cardSubtitle}`}>{path.subtitle}</p>
      </div>
      <div className={styles.cardBottom}>
        <p className="text-body-sm">{path.description}</p>
        <StepPreviewAvatars path={path} />
        {(hasStarted || isCompleted) && (
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${isCompleted ? 100 : percent}%`, background: path.accentColor }}
            />
          </div>
        )}
        <div className={styles.cardFooter}>
          {isCompleted ? (
            <span className={styles.badge}>
              <CheckCircle2 size={16} />
              Parcours terminé
            </span>
          ) : hasStarted ? (
            <span className="text-caption">
              Étape {Math.min((progress?.currentStepIndex ?? 0) + 1, totalSteps)}/{totalSteps}
            </span>
          ) : (
            <span className="text-caption">Non commencé</span>
          )}
          <span className="text-body-sm text-accent" style={{ fontWeight: 600 }}>
            {isCompleted ? 'Revoir →' : hasStarted ? 'Reprendre →' : 'Commencer →'}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Paths() {
  const { data: paths, loading } = useAsync(() => repository.getAllPaths(), []);
  const progressList = useAllPathProgress();
  const [activeCategory, setActiveCategory] = useState<PathCategory | 'toutes'>('toutes');

  const progressByPath = new Map((progressList ?? []).map((p) => [p.pathId, p]));

  const grouped = useMemo(() => {
    const map = new Map<PathCategory, LearningPath[]>();
    for (const path of paths ?? []) {
      if (!map.has(path.category)) map.set(path.category, []);
      map.get(path.category)!.push(path);
    }
    return map;
  }, [paths]);

  const categoriesToShow = activeCategory === 'toutes' ? CATEGORY_ORDER : [activeCategory];

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Parcours guidés
        </h1>
        <p className={`text-body-sm ${styles.intro}`}>
          Plutôt que de vous laisser seul face à la base de connaissances, ces parcours vous accompagnent pas à pas à
          travers une question, un courant ou une évolution théorique — avec, à chaque étape, une notion à retenir,
          une question de réflexion et des connexions à explorer.
        </p>
      </div>

      <div className={styles.categoryRow}>
        <button
          type="button"
          className={`${styles.categoryChip} ${activeCategory === 'toutes' ? styles.categoryChipActive : ''}`}
          onClick={() => setActiveCategory('toutes')}
        >
          Tous les parcours
        </button>
        {CATEGORY_ORDER.filter((c) => grouped.has(c)).map((c) => (
          <button
            key={c}
            type="button"
            className={`${styles.categoryChip} ${activeCategory === c ? styles.categoryChipActive : ''}`}
            onClick={() => setActiveCategory(c)}
          >
            {CATEGORY_LABELS[c]}
          </button>
        ))}
      </div>

      {!loading && (!paths || paths.length === 0) && (
        <EmptyState icon={<Compass size={24} />} title="Aucun parcours disponible pour le moment" />
      )}

      {categoriesToShow.map((category) => {
        const items = grouped.get(category);
        if (!items || items.length === 0) return null;
        return (
          <section key={category} className={styles.categorySection}>
            {activeCategory === 'toutes' && <h2 className={`text-h3 ${styles.categoryTitle}`}>{CATEGORY_LABELS[category]}</h2>}
            <div className={styles.grid}>
              {items.map((path) => (
                <PathCard key={path.id} path={path} progress={progressByPath.get(path.id)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
