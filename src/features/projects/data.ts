export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  progress: number;
  status: 'In progress' | 'Review' | 'Completed';
  due: string;
  color: string;
  members: string[];
}
export const initialProjects: Project[] = [
  {
    id: 'p1',
    name: 'Website redesign',
    description: 'A fresh home for our next chapter. Research, design, and a thoughtful new experience.',
    category: 'Design',
    progress: 72,
    status: 'In progress',
    due: '2026-09-24',
    color: '#df8752',
    members: ['OR', 'PB', 'LS'],
  },
  {
    id: 'p2',
    name: 'Mobile app',
    description: 'Bring the workspace to everyone, wherever they work. Built for iOS and Android.',
    category: 'Development',
    progress: 48,
    status: 'In progress',
    due: '2026-10-02',
    color: '#748cc7',
    members: ['DC', 'NC'],
  },
  {
    id: 'p3',
    name: 'Brand guidelines',
    description: 'A consistent visual language, from our smallest icon to our biggest ideas.',
    category: 'Branding',
    progress: 90,
    status: 'Review',
    due: '2026-09-16',
    color: '#a184b5',
    members: ['AL', 'DW', 'OR'],
  },
  {
    id: 'p4',
    name: 'Customer onboarding',
    description: 'Make the first five minutes feel effortless with a useful, welcoming introduction.',
    category: 'Product',
    progress: 35,
    status: 'In progress',
    due: '2026-10-10',
    color: '#58998c',
    members: ['LS', 'OD'],
  },
  {
    id: 'p5',
    name: 'Design system v2',
    description: 'Reusable foundations that help the team build with clarity and confidence.',
    category: 'Design',
    progress: 100,
    status: 'Completed',
    due: '2026-09-01',
    color: '#b39755',
    members: ['OR', 'AL'],
  },
  {
    id: 'p6',
    name: 'Autumn campaign',
    description: 'Tell our story through a coordinated launch across email, social, and the web.',
    category: 'Marketing',
    progress: 20,
    status: 'In progress',
    due: '2026-10-15',
    color: '#bc7d92',
    members: ['DW', 'PB'],
  },
];
