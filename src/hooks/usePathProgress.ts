import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../services/db';

export function usePathProgress(pathId: string) {
  return useLiveQuery(() => db.pathProgress.get(pathId), [pathId]);
}

export function useAllPathProgress() {
  return useLiveQuery(() => db.pathProgress.toArray(), [], []);
}
