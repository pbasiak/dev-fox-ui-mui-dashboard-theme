export type Period = 'week' | 'month' | 'year';
interface Snapshot {
  orders: number;
  customers: number;
  conversion: string;
  chart: { label: string; current: number; previous: number }[];
}
function summarize(snapshot: Snapshot) {
  const revenue = snapshot.chart.reduce((total, point) => total + point.current, 0);
  const previous = snapshot.chart.reduce((total, point) => total + point.previous, 0);
  return { ...snapshot, revenue, change: `${((revenue / previous - 1) * 100).toFixed(1)}%` };
}
/** Totals and growth come from the chart series so reports always reconcile. */
export const analytics: Record<Period, ReturnType<typeof summarize>> = {
  week: summarize({
    orders: 328,
    customers: 86,
    conversion: '3.42%',
    chart: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label, i) => ({
      label,
      current: [1100, 1600, 1300, 2300, 1900, 2700, 1580][i],
      previous: [900, 1300, 1100, 2000, 1500, 2300, 1500][i],
    })),
  }),
  month: summarize({
    orders: 1429,
    customers: 384,
    conversion: '3.62%',
    chart: Array.from({ length: 12 }, (_, i) => ({
      label: `${i * 2 + 1} Sep`,
      current: [1900, 2450, 2100, 3700, 3300, 4600, 3850, 5400, 4900, 6800, 5800, 7200][i],
      previous: [1400, 1900, 1600, 2600, 2400, 3200, 2600, 3700, 3200, 4600, 4100, 4900][i],
    })),
  }),
  year: summarize({
    orders: 18402,
    customers: 4218,
    conversion: '3.84%',
    chart: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((label, i) => ({
      label,
      current: [22000, 28000, 26000, 32000, 36000, 43000, 38000, 48000, 51000, 62000, 58000, 84000][i],
      previous: [18000, 23000, 20000, 27000, 29000, 32000, 30000, 39000, 41000, 52000, 49000, 61000][i],
    })),
  }),
};
