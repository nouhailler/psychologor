import { Clock, Info, Laptop, Moon, RefreshCw, Route as RouteIcon, Star, Sun, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {
  getApproachSync,
  getFieldSync,
  getPathSync,
  getPsychologistSync,
  getSchoolSync,
  getTheorySync,
  getConceptSync,
  getWorkSync,
  getEventSync,
  getExperimentSync,
  getMethodSync,
} from '../services/repository';
import { useFavoritesList } from '../hooks/useFavorites';
import { useHistoryList } from '../hooks/useHistory';
import { useAllPathProgress } from '../hooks/usePathProgress';
import { usePWAUpdate } from '../hooks/usePWAUpdate';
import { clearAllLocalData } from '../services/db';
import { useTheme, type TextSize } from '../store/ThemeContext';
import styles from './Profile.module.css';

const buildDateLabel = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(__BUILD_DATE__));

function formatCheckedTime(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(date);
}

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

function resolveEntity(entityId: string, entityType: string) {
  if (entityType === 'psychologist') return getPsychologistSync(entityId);
  if (entityType === 'theory') return getTheorySync(entityId);
  if (entityType === 'concept') return getConceptSync(entityId);
  if (entityType === 'school') return getSchoolSync(entityId);
  if (entityType === 'work') return getWorkSync(entityId);
  if (entityType === 'event') return getEventSync(entityId);
  if (entityType === 'experiment') return getExperimentSync(entityId);
  if (entityType === 'method') return getMethodSync(entityId);
  if (entityType === 'approach') return getApproachSync(entityId);
  if (entityType === 'field') return getFieldSync(entityId);
  return undefined;
}

const TEXT_SIZES: { id: TextSize; label: string }[] = [
  { id: 'normal', label: 'Normale' },
  { id: 'large', label: 'Grande' },
  { id: 'x-large', label: 'Très grande' },
];

export default function Profile() {
  const favorites = useFavoritesList();
  const history = useHistoryList(6);
  const pathProgress = useAllPathProgress();
  const inProgressPaths = (pathProgress ?? [])
    .filter((p) => !p.completedAt)
    .map((p) => ({ progress: p, path: getPathSync(p.pathId) }))
    .filter((p) => p.path);
  const { theme, setTheme, textSize, setTextSize } = useTheme();
  const [confirmClear, setConfirmClear] = useState(false);
  const { checking, lastChecked, result, checkForUpdate } = usePWAUpdate();

  const handleClear = async () => {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    await clearAllLocalData();
    setConfirmClear(false);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Profil
        </h1>
        <p className="text-body-sm">Vos favoris, votre historique et les préférences de l'application.</p>
      </div>

      <section className={styles.section}>
        <Link to="/favoris" className={styles.row}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon}>
              <Star size={18} />
            </span>
            <span>
              <p className="text-h4">Favoris</p>
              <p className="text-caption">{favorites?.length ?? 0} élément(s) sauvegardé(s)</p>
            </span>
          </span>
        </Link>
      </section>

      {inProgressPaths.length > 0 && (
        <section className={styles.section}>
          <h2 className={`text-h3 ${styles.sectionTitle}`}>Parcours en cours</h2>
          {inProgressPaths.map(({ path, progress }) => {
            if (!path) return null;
            return (
              <Link key={path.id} to={`/parcours/${path.id}`} className={styles.row}>
                <span className={styles.rowLeft}>
                  <span className={styles.rowIcon} style={{ background: `${path.accentColor}22`, color: path.accentColor }}>
                    <RouteIcon size={18} />
                  </span>
                  <span>
                    <p className="text-h4">{path.title}</p>
                    <p className="text-caption">
                      Étape {Math.min(progress.currentStepIndex + 1, path.steps.length)}/{path.steps.length}
                    </p>
                  </span>
                </span>
              </Link>
            );
          })}
        </section>
      )}

      <section className={styles.section}>
        <h2 className={`text-h3 ${styles.sectionTitle}`}>Historique récent</h2>
        {history && history.length > 0 ? (
          <div>
            {history.map((h) => {
              const entity = resolveEntity(h.entityId, h.entityType);
              if (!entity) return null;
              const to =
                h.entityType === 'psychologist'
                  ? `/psychologues/${h.entityId}`
                  : h.entityType === 'theory'
                    ? `/theories/${h.entityId}`
                    : h.entityType === 'school'
                      ? `/courants/${h.entityId}`
                      : h.entityType === 'work'
                        ? `/oeuvres/${h.entityId}`
                        : h.entityType === 'event'
                          ? `/evenements/${h.entityId}`
                          : h.entityType === 'experiment'
                            ? `/experiences/${h.entityId}`
                            : h.entityType === 'method'
                              ? `/methodes/${h.entityId}`
                              : h.entityType === 'approach'
                                ? `/approches/${h.entityId}`
                                : h.entityType === 'field'
                                  ? `/domaines/${h.entityId}`
                                  : `/concepts/${h.entityId}`;
              const name = 'name' in entity ? entity.name : 'term' in entity ? entity.term : 'title' in entity ? entity.title : '';
              const accent = 'accentColor' in entity ? entity.accentColor : 'color' in entity ? entity.color : 'var(--color-primary)';
              const initials = 'portraitInitials' in entity ? entity.portraitInitials : name.slice(0, 2).toUpperCase();
              return (
                <Link key={`${h.entityType}-${h.entityId}`} to={to} className={styles.historyItem}>
                  <span
                    className={styles.historyAvatar}
                    style={{ background: gradientFor(String(accent).startsWith('#') ? String(accent) : '#6B4EDB') }}
                  >
                    {initials}
                  </span>
                  <span className="text-body-sm">{name}</span>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            <Clock size={14} style={{ verticalAlign: -2, marginRight: 6 }} />
            Aucune fiche consultée pour le moment.
          </p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={`text-h3 ${styles.sectionTitle}`}>Apparence</h2>
        <div className={styles.row}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon}>
              {theme === 'dark' ? <Moon size={18} /> : theme === 'light' ? <Sun size={18} /> : <Laptop size={18} />}
            </span>
            <span>
              <p className="text-h4">Thème</p>
              <p className="text-caption">Clair, sombre ou automatique</p>
            </span>
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {(['light', 'system', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setTheme(mode)}
                className={`${styles.textSizeButton} ${theme === mode ? styles.active : ''}`}
                style={{ padding: '0 var(--space-3)', height: 34 }}
              >
                {mode === 'light' ? 'Clair' : mode === 'dark' ? 'Sombre' : 'Auto'}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.row} style={{ flexWrap: 'wrap' }}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon}>Aa</span>
            <span>
              <p className="text-h4">Taille du texte</p>
              <p className="text-caption">Adaptez le confort de lecture</p>
            </span>
          </span>
          <div className={styles.textSizeOptions}>
            {TEXT_SIZES.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setTextSize(size.id)}
                className={`${styles.textSizeButton} ${textSize === size.id ? styles.active : ''}`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`text-h3 ${styles.sectionTitle}`}>À propos</h2>
        <div className={styles.row}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon}>
              <Info size={18} />
            </span>
            <span>
              <p className="text-h4">Psychologor — version {__APP_VERSION__}</p>
              <p className="text-caption">Publiée le {buildDateLabel} · disponible hors ligne</p>
            </span>
          </span>
        </div>

        <div className={styles.row} style={{ flexWrap: 'wrap' }}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon}>
              <RefreshCw size={18} className={checking ? styles.spinning : ''} />
            </span>
            <span>
              <p className="text-h4">Mises à jour</p>
              <p className="text-caption">
                {checking
                  ? 'Vérification en cours…'
                  : result === 'updating'
                    ? 'Nouvelle version trouvée, installation puis rechargement automatique…'
                    : result === 'up-to-date'
                      ? `Vous avez déjà la dernière version${lastChecked ? ` · vérifié à ${formatCheckedTime(lastChecked)}` : ''}`
                      : result === 'unsupported'
                        ? 'Vérification indisponible sur cet appareil'
                        : 'Installées automatiquement en arrière-plan'}
              </p>
            </span>
          </span>
          <Button variant="secondary" size="sm" onClick={checkForUpdate} disabled={checking}>
            {checking ? 'Vérification…' : 'Forcer la mise à jour'}
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`text-h3 ${styles.sectionTitle}`}>Données locales</h2>
        <div className={`${styles.row} ${styles.dangerRow}`}>
          <span className={styles.rowLeft}>
            <span className={styles.rowIcon} style={{ background: 'color-mix(in srgb, var(--color-danger) 15%, transparent)', color: 'var(--color-danger)' }}>
              <Trash2 size={18} />
            </span>
            <span>
              <p className="text-h4">Effacer mes données locales</p>
              <p className="text-caption">Favoris, historique et recherches récentes seront supprimés de cet appareil.</p>
            </span>
          </span>
          <Button variant={confirmClear ? 'primary' : 'secondary'} size="sm" onClick={handleClear}>
            {confirmClear ? 'Confirmer' : 'Effacer'}
          </Button>
        </div>
      </section>
    </div>
  );
}
