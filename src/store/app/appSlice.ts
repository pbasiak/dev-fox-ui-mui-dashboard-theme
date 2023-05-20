import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  messageCount: number;
}

const initialState: InitialState = {
  messageCount: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessageCount: (state, action: PayloadAction<number>) => {
      return { ...state, messageCount: action.payload }
    },
  }
});

// TODO: replace with messages slice 

export const { setMessageCount } = appSlice.actions;
export const { reducer: appReducer } = appSlice;