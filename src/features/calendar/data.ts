import { localDate } from '../../lib/format';
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Meeting' | 'Focus time' | 'Milestone';
}
export function createInitialEvents(today = new Date()): CalendarEvent[] {
  const inDays = (offset: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() + offset);
    return localDate(date);
  };
  return [
    { id: 'e1', title: 'Design team standup', date: inDays(0), time: '09:30', category: 'Meeting' },
    { id: 'e2', title: 'A little room to create', date: inDays(0), time: '14:00', category: 'Focus time' },
    { id: 'e3', title: 'Website design review', date: inDays(2), time: '11:00', category: 'Meeting' },
    { id: 'e4', title: 'Brand guidelines handoff', date: inDays(5), time: '15:00', category: 'Milestone' },
    { id: 'e5', title: 'Product planning', date: inDays(7), time: '10:00', category: 'Meeting' },
    { id: 'e6', title: 'Customer conversations', date: inDays(9), time: '13:00', category: 'Meeting' },
  ];
}
/** Monday-first grid; local calendar arithmetic avoids UTC and daylight-saving shifts. */
export function monthDays(month: Date) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const offset = (first.getDay() + 6) % 7;
  return Array.from({ length: 42 }, (_, index) => new Date(month.getFullYear(), month.getMonth(), index - offset + 1));
}
