import { UseSuspenseQueryResult } from '@tanstack/react-query';

export interface CalendarEvent {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
}

export interface CalendarData {
  date: Date;
  events: CalendarEvent[];
}

export type CalendarType = UseSuspenseQueryResult<CalendarData[]>;
