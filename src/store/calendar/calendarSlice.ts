import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarData } from '../../hooks/api/use-calendar/types';

type InitialState = CalendarData[];

const initialState: InitialState = [];

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSingleData: (state, action: PayloadAction<CalendarData>) => {
      const date = action.payload;
      // return array with new date
      return [...state, date];
    },
  },
});

export const { setSingleData } = calendarSlice.actions;
export const { reducer: calendarReducer } = calendarSlice;
