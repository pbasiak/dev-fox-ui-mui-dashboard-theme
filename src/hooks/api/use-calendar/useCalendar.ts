import { useQuery } from '@tanstack/react-query';
import calendarData from '../../../mocks/calendar/calendar.json';
import { CalendarType } from './types';

export const useCalendar = (): CalendarType => {
  return useQuery({ queryKey: ['calendar'], queryFn: () => calendarData });
};
