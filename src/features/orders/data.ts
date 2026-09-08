export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Refunded';
}
export const initialOrders: Order[] = [
  {
    id: 'DF-1048',
    customer: 'Olivia Rhye',
    email: 'olivia@acme.design',
    product: 'Studio plan · Annual',
    date: '2026-09-08',
    amount: 249,
    status: 'Paid',
  },
  {
    id: 'DF-1047',
    customer: 'Phoenix Baker',
    email: 'phoenix@layers.design',
    product: 'Pro plan · Monthly',
    date: '2026-09-08',
    amount: 49,
    status: 'Paid',
  },
  {
    id: 'DF-1046',
    customer: 'Lana Steiner',
    email: 'lana@sisyphus.com',
    product: 'Team plan · Annual',
    date: '2026-09-07',
    amount: 599,
    status: 'Pending',
  },
  {
    id: 'DF-1045',
    customer: 'Demi Wilkinson',
    email: 'demi@catalog.studio',
    product: 'Studio plan · Annual',
    date: '2026-09-07',
    amount: 249,
    status: 'Paid',
  },
  {
    id: 'DF-1044',
    customer: 'Drew Cano',
    email: 'drew@circooles.com',
    product: 'Pro plan · Monthly',
    date: '2026-09-06',
    amount: 49,
    status: 'Refunded',
  },
  {
    id: 'DF-1043',
    customer: 'Natali Craig',
    email: 'natali@hourglass.app',
    product: 'Team plan · Annual',
    date: '2026-09-06',
    amount: 599,
    status: 'Paid',
  },
  {
    id: 'DF-1042',
    customer: 'Orlando Diggs',
    email: 'orlando@command.dev',
    product: 'Pro plan · Monthly',
    date: '2026-09-05',
    amount: 49,
    status: 'Pending',
  },
  {
    id: 'DF-1041',
    customer: 'Andi Lane',
    email: 'andi@quotient.co',
    product: 'Studio plan · Annual',
    date: '2026-09-04',
    amount: 249,
    status: 'Paid',
  },
];
