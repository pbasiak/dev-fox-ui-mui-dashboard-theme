import { atom } from 'jotai';

export const isSidebarOpenAtom = atom(true);

export const openNavigationsIdsAtom = atom<string[]>([]);
export const toggleNavigationsIdsAtom = atom(
  (get) => get(openNavigationsIdsAtom),
  (get, set, id: string) => {
    const selectedIds = get(openNavigationsIdsAtom);
    if (selectedIds.includes(id)) {
      set(
        openNavigationsIdsAtom,
        selectedIds.filter((selectedId) => selectedId !== id),
      );
    } else {
      set(openNavigationsIdsAtom, [...selectedIds, id]);
    }
  },
);


