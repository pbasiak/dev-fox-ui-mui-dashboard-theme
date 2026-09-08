import { useCallback, useMemo, useSyncExternalStore } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const memory = new Map<string, string>();
const eventName = 'devfox:storage';
function snapshot(key: string): string | null {
  if (memory.has(key)) return memory.get(key)!;
  try {
    return localStorage.getItem(key);
  } catch {
    return memory.get(key) ?? null;
  }
}
function parse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}
function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === null) memory.clear();
    else memory.delete(event.key);
    callback();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener('storage', onStorage);
  };
}
/** JSON-compatible local state, synchronized across components and browser tabs. */
export function useLocalStorage<T>(key: string, initialValue: T): readonly [T, Dispatch<SetStateAction<T>>] {
  const getSnapshot = useCallback(() => snapshot(key), [key]);
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const value = useMemo(() => parse(raw, initialValue), [raw, initialValue]);
  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (update) => {
      const previous = parse(snapshot(key), initialValue);
      const next = typeof update === 'function' ? (update as (previous: T) => T)(previous) : update;
      const serialized = JSON.stringify(next);
      try {
        localStorage.setItem(key, serialized);
        memory.delete(key);
      } catch {
        memory.set(key, serialized); // Keep the workspace usable when storage is unavailable.
      }
      window.dispatchEvent(new Event(eventName));
    },
    [key, initialValue],
  );
  return [value, setValue] as const;
}
