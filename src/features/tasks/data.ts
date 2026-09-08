export interface Task {
  id: string;
  title: string;
  project: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}
export const initialTasks: Task[] = [
  {
    id: 't1',
    title: 'Review the homepage wireframes',
    project: 'Website redesign',
    priority: 'High',
    completed: false,
  },
  {
    id: 't2',
    title: 'Prepare assets for the design handoff',
    project: 'Brand guidelines',
    priority: 'Medium',
    completed: false,
  },
  {
    id: 't3',
    title: 'Write the onboarding welcome email',
    project: 'Customer onboarding',
    priority: 'Medium',
    completed: false,
  },
  { id: 't4', title: 'Test the mobile navigation', project: 'Mobile app', priority: 'High', completed: false },
  { id: 't5', title: 'Document the spacing tokens', project: 'Design system v2', priority: 'Low', completed: true },
  { id: 't6', title: 'Share the campaign moodboard', project: 'Autumn campaign', priority: 'Low', completed: true },
];
