import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  openNavigationIds: string[];
  isSidebarOpen: boolean;
};

const initialState: InitialState = {
  openNavigationIds: [],
  isSidebarOpen: true,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleNavigationIdAction: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.openNavigationIds.includes(id)) {
        return {
          ...state,
          openNavigationIds: state.openNavigationIds.filter((item) => item !== id),
        };
      } else {
        return {
          ...state,
          openNavigationIds: [...state.openNavigationIds, id]
        };
      }
    },
    // toggleSidebar with boolean
    toggleSidebarAction: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    }
  }
});

export const { toggleNavigationIdAction, toggleSidebarAction } = navigationSlice.actions;
export const { reducer: navigationReducer } = navigationSlice;