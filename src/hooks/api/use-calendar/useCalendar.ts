import { useSuspenseQuery } from '@tanstack/react-query';
import calendarData from '../../../mocks/calendar/calendar.json';
import { CalendarType } from './types';

export const useCalendar = (): CalendarType => {
  return useSuspenseQuery({ queryKey: ['calendar'], queryFn: () => calendarData });
};
