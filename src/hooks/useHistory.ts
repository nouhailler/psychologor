import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import type { EntityKind } from '../models/types';
import { db, recordVisit } from '../services/db';

export function useRecordVisit(entityId: string | undefined, entityType: EntityKind) {
  useEffect(() => {
    if (!entityId) return;
    recordVisit(entityId, entityType);
  }, [entityId, entityType]);
}

export function useHistoryList(limit = 20) {
  return useLiveQuery(
    () => db.history.orderBy('visitedAt').reverse().limit(limit).toArray(),
    [limit],
    [],
  );
}

export function useRecentSearches(limit = 6) {
  return useLiveQuery(
    () => db.recentSearches.orderBy('searchedAt').reverse().limit(limit).toArray(),
    [limit],
    [],
  );
}
