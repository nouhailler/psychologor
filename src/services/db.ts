import Dexie, { type Table } from 'dexie';
import type { EntityKind } from '../models/types';

export interface FavoriteRecord {
  id?: number;
  entityId: string;
  entityType: EntityKind;
  createdAt: number;
}

export interface HistoryRecord {
  id?: number;
  entityId: string;
  entityType: EntityKind;
  visitedAt: number;
}

export interface RecentSearchRecord {
  id?: number;
  query: string;
  searchedAt: number;
}

export interface CustomListRecord {
  id?: number;
  name: string;
  entityIds: string[];
  createdAt: number;
}

export interface PreferenceRecord {
  key: string;
  value: string;
}

class PsychologorDB extends Dexie {
  favorites!: Table<FavoriteRecord, number>;
  history!: Table<HistoryRecord, number>;
  recentSearches!: Table<RecentSearchRecord, number>;
  lists!: Table<CustomListRecord, number>;
  preferences!: Table<PreferenceRecord, string>;

  constructor() {
    super('psychologor');
    this.version(1).stores({
      favorites: '++id, entityId, entityType, createdAt, [entityId+entityType]',
      history: '++id, entityId, entityType, visitedAt, [entityId+entityType]',
      recentSearches: '++id, query, searchedAt',
      lists: '++id, name, createdAt',
      preferences: '&key',
    });
  }
}

export const db = new PsychologorDB();

export async function addFavorite(entityId: string, entityType: EntityKind) {
  const existing = await db.favorites.where('[entityId+entityType]').equals([entityId, entityType]).first();
  if (existing) return;
  await db.favorites.add({ entityId, entityType, createdAt: Date.now() });
}

export async function removeFavorite(entityId: string, entityType: EntityKind) {
  await db.favorites.where('[entityId+entityType]').equals([entityId, entityType]).delete();
}

export async function isFavorite(entityId: string, entityType: EntityKind) {
  const existing = await db.favorites.where('[entityId+entityType]').equals([entityId, entityType]).first();
  return Boolean(existing);
}

export async function recordVisit(entityId: string, entityType: EntityKind) {
  const existing = await db.history.where('[entityId+entityType]').equals([entityId, entityType]).first();
  if (existing?.id !== undefined) {
    await db.history.update(existing.id, { visitedAt: Date.now() });
  } else {
    await db.history.add({ entityId, entityType, visitedAt: Date.now() });
  }
}

export async function recordSearch(query: string) {
  const trimmed = query.trim();
  if (trimmed.length < 2) return;
  const existing = await db.recentSearches.where('query').equalsIgnoreCase(trimmed).first();
  if (existing?.id !== undefined) {
    await db.recentSearches.update(existing.id, { searchedAt: Date.now() });
  } else {
    await db.recentSearches.add({ query: trimmed, searchedAt: Date.now() });
    const all = await db.recentSearches.orderBy('searchedAt').reverse().toArray();
    const stale = all.slice(10);
    if (stale.length) {
      await db.recentSearches.bulkDelete(stale.map((s) => s.id!).filter(Boolean));
    }
  }
}

export async function clearAllLocalData() {
  await Promise.all([
    db.favorites.clear(),
    db.history.clear(),
    db.recentSearches.clear(),
    db.lists.clear(),
  ]);
}
