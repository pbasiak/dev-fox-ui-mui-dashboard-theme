export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  status: 'Active' | 'Inactive';
  joined: string;
  color: string;
}
export const initialCustomers: Customer[] = [
  {
    id: 'c1',
    name: 'Olivia Rhye',
    email: 'olivia@acme.design',
    company: 'Acme',
    role: 'Admin',
    status: 'Active',
    joined: '2026-08-12',
    color: '#8b6fbe',
  },
  {
    id: 'c2',
    name: 'Phoenix Baker',
    email: 'phoenix@layers.design',
    company: 'Layers',
    role: 'Editor',
    status: 'Active',
    joined: '2026-08-14',
    color: '#be835b',
  },
  {
    id: 'c3',
    name: 'Lana Steiner',
    email: 'lana@sisyphus.com',
    company: 'Sisyphus',
    role: 'Member',
    status: 'Active',
    joined: '2026-08-19',
    color: '#5e9990',
  },
  {
    id: 'c4',
    name: 'Demi Wilkinson',
    email: 'demi@catalog.studio',
    company: 'Catalog',
    role: 'Editor',
    status: 'Inactive',
    joined: '2026-08-22',
    color: '#6b8cbd',
  },
  {
    id: 'c5',
    name: 'Drew Cano',
    email: 'drew@circooles.com',
    company: 'Circooles',
    role: 'Member',
    status: 'Active',
    joined: '2026-08-24',
    color: '#b58095',
  },
  {
    id: 'c6',
    name: 'Natali Craig',
    email: 'natali@hourglass.app',
    company: 'Hourglass',
    role: 'Admin',
    status: 'Active',
    joined: '2026-08-26',
    color: '#818f62',
  },
  {
    id: 'c7',
    name: 'Orlando Diggs',
    email: 'orlando@command.dev',
    company: 'Command',
    role: 'Member',
    status: 'Inactive',
    joined: '2026-08-28',
    color: '#9a7b5f',
  },
  {
    id: 'c8',
    name: 'Andi Lane',
    email: 'andi@quotient.co',
    company: 'Quotient',
    role: 'Editor',
    status: 'Active',
    joined: '2026-09-01',
    color: '#7c83b5',
  },
];
