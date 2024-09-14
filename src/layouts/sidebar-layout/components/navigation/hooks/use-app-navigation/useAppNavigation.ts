import { useCallback } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { isSidebarOpenAtom, openNavigationsIdsAtom, toggleNavigationsIdsAtom } from '../../state/navigationAtom.ts';

export const useAppNavigation = () => {
  const openNavigationIds = useAtomValue(openNavigationsIdsAtom);
  const setOpenedNavigationIds = useSetAtom(toggleNavigationsIdsAtom);
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);
  const setIsSidebarOpen = useSetAtom(isSidebarOpenAtom);

  const toggleNavigationId = useCallback((id: string) => setOpenedNavigationIds(id), []);
  const getIsOpen = useCallback((id: string) => openNavigationIds.includes(id), [openNavigationIds]);
  const toggleSidebar = useCallback(() => setIsSidebarOpen(!isSidebarOpen), [isSidebarOpen]);

  return { getIsOpen, isSidebarOpen, toggleNavigationId, toggleSidebar };
};
