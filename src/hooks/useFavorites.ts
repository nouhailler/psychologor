import { useLiveQuery } from 'dexie-react-hooks';
import { useCallback } from 'react';
import type { EntityKind } from '../models/types';
import { addFavorite, db, removeFavorite } from '../services/db';

export function useIsFavorite(entityId: string, entityType: EntityKind) {
  const record = useLiveQuery(
    () => db.favorites.where('[entityId+entityType]').equals([entityId, entityType]).first(),
    [entityId, entityType],
  );
  return Boolean(record);
}

export function useToggleFavorite(entityId: string, entityType: EntityKind) {
  const isFavorite = useIsFavorite(entityId, entityType);

  const toggle = useCallback(async () => {
    if (isFavorite) {
      await removeFavorite(entityId, entityType);
    } else {
      await addFavorite(entityId, entityType);
    }
  }, [entityId, entityType, isFavorite]);

  return { isFavorite, toggle };
}

export function useFavoritesList() {
  return useLiveQuery(() => db.favorites.orderBy('createdAt').reverse().toArray(), [], []);
}
