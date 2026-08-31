import { Clock, Info, Laptop, Moon, Star, Sun, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { getPsychologistSync, getTheorySync, getConceptSync } from '../services/repository';
import { useFavoritesList } from '../hooks/useFavorites';
import { useHistoryList } from '../hooks/useHistory';
import { clearAllLocalData } from '../services/db';
import { useTheme, type TextSize } from '../store/ThemeContext';
import styles from './Profile.module.css';

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

function resolveEntity(entityId: string, entityType: string) {
  if (entityType === 'psychologist') return getPsychologistSync(entityId);
  if (entityType === 'theory') return getTheorySync(entityId);
  if (entityType === 'concept') return getConceptSync(entityId);
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
  const { theme, setTheme, textSize, setTextSize } = useTheme();
  const [confirmClear, setConfirmClear] = useState(false);

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
                    : `/concepts/${h.entityId}`;
              const name = 'name' in entity ? entity.name : 'term' in entity ? entity.term : '';
              const accent = 'accentColor' in entity ? entity.accentColor : 'var(--color-primary)';
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
              <p className="text-h4">Psychologor</p>
              <p className="text-caption">Version 1.0 · Encyclopédie interactive de la psychologie, disponible hors ligne</p>
            </span>
          </span>
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
