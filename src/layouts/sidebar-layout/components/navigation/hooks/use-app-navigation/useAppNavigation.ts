import { useAppDispatch, useAppSelector } from '../../../../../../store/hooks';
import { toggleNavigationIdAction, toggleSidebarAction } from '../../../../../../store/sidebar/navigationSlice';
import { useCallback } from 'react';

export const useAppNavigation = () => {
  const navigation = useAppSelector((state) => state.navigation.openNavigationIds);
  const isSidebarOpen = useAppSelector((state) => state.navigation.isSidebarOpen);
  const dispatch = useAppDispatch();

  const toggleNavigationId = useCallback((id: string) => dispatch(toggleNavigationIdAction(id)), [dispatch]);
  const getIsOpen = useCallback((id: string) => navigation.includes(id), [navigation]);
  const toggleSidebar = useCallback(() => dispatch(toggleSidebarAction(!isSidebarOpen)), [dispatch, isSidebarOpen]);

  return { getIsOpen, isSidebarOpen, toggleNavigationId, toggleSidebar };
};
