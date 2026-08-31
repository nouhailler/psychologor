import { Star } from 'lucide-react';
import type { EntityKind } from '../../models/types';
import { useToggleFavorite } from '../../hooks/useFavorites';
import styles from './FavoriteButton.module.css';

interface FavoriteButtonProps {
  entityId: string;
  entityType: EntityKind;
  label?: string;
}

export function FavoriteButton({ entityId, entityType, label = 'entité' }: FavoriteButtonProps) {
  const { isFavorite, toggle } = useToggleFavorite(entityId, entityType);

  return (
    <button
      type="button"
      className={`${styles.button} ${isFavorite ? styles.active : ''}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? `Retirer ${label} des favoris` : `Ajouter ${label} aux favoris`}
    >
      <Star size={20} strokeWidth={2} fill={isFavorite ? 'currentColor' : 'none'} className={styles.icon} />
    </button>
  );
}
