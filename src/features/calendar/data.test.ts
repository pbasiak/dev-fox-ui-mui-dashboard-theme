import { describe, expect, it } from 'vitest';
import { createInitialEvents, monthDays } from './data';
import { localDate } from '../../lib/format';
describe('calendar date arithmetic', () => {
  it('creates a Monday-first grid spanning the year boundary', () => {
    const days = monthDays(new Date(2027, 0, 15));
    expect(days).toHaveLength(42);
    expect(days[0].getDay()).toBe(1);
    expect(localDate(days[0])).toBe('2026-12-28');
    expect(days.filter((date) => date.getMonth() === 0)).toHaveLength(31);
  });
  it('includes leap day exactly once', () => {
    expect(monthDays(new Date(2028, 1, 10)).filter((date) => localDate(date) === '2028-02-29')).toHaveLength(1);
  });
  it('seeds upcoming events across month boundaries', () => {
    const events = createInitialEvents(new Date(2026, 11, 30));
    expect(events[0].date).toBe('2026-12-30');
    expect(events[2].date).toBe('2027-01-01');
  });
});
