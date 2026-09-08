export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'Published' | 'Draft';
  date: string;
  color: string;
  motif: number;
}
export const initialArticles: Article[] = [
  {
    id: 'a1',
    title: 'Less noise. More room for good ideas.',
    excerpt: 'Why the best workspaces give your attention somewhere to land.',
    content:
      'A good workspace begins with a simple question: what deserves your attention?\n\nWe designed DevFox around the things that help you move forward. Clear navigation. Honest feedback. A little breathing room between ideas.\n\nStart with one thing\n\nChoose the task that matters most today. Give it a place, a next step, and the space it needs. Progress rarely arrives all at once. It is built from small, thoughtful decisions.\n\nMake it your own\n\nThe best tools adapt to you. Keep the pieces that help, simplify the rest, and build a space that feels like yours.',
    category: 'Design',
    status: 'Published',
    date: '2026-09-06',
    color: '#c97b54',
    motif: 0,
  },
  {
    id: 'a2',
    title: 'A design system that grows with you',
    excerpt: 'Small, reusable foundations for a more consistent product.',
    content:
      'Consistency is a gift to both the people building a product and the people using it.\n\nStart with a shared language: colors, type, spacing, and interaction states. Let components carry those decisions into every page.\n\nKeep the foundations simple\n\nA reusable card should not need to know about your API. A page header should not depend on your business model. Small boundaries make big changes easier.\n\nBuild the smallest useful abstraction, document it with a real example, and let your system evolve with your product.',
    category: 'Engineering',
    status: 'Published',
    date: '2026-09-04',
    color: '#768d80',
    motif: 1,
  },
  {
    id: 'a3',
    title: 'The quiet art of making progress',
    excerpt: 'A more thoughtful approach to planning your team’s next chapter.',
    content:
      'Progress does not always need a bigger plan. Sometimes it needs a clearer next step.\n\nKeep your projects visible, your priorities honest, and your tasks small enough to finish. A shared view helps everyone understand where their work fits.\n\nCelebrate the small things\n\nA useful conversation. A finished draft. A problem understood. These are the moments that move a project forward. Make room to notice them.',
    category: 'Productivity',
    status: 'Published',
    date: '2026-09-02',
    color: '#8980a8',
    motif: 2,
  },
  {
    id: 'a4',
    title: 'Building a warmer welcome',
    excerpt: 'How thoughtful onboarding turns a first visit into a good beginning.',
    content:
      'First impressions are made of details. A useful empty state. A clear next action. A friendly explanation when something goes wrong.\n\nGive new people a small success early. Show them what is possible, then let them explore at their own pace.',
    category: 'Product',
    status: 'Draft',
    date: '2026-09-01',
    color: '#698eb2',
    motif: 1,
  },
  {
    id: 'a5',
    title: 'Color with a little more purpose',
    excerpt: 'Balancing personality, clarity, and contrast in every theme.',
    content:
      'Color does more than decorate a screen. It helps people understand what is important, what is interactive, and what has changed.\n\nA good palette works in light and dark environments. Test the text, surfaces, focus states, and semantic colors together. Personality and readability can share the same space.',
    category: 'Design',
    status: 'Published',
    date: '2026-08-28',
    color: '#b7965c',
    motif: 2,
  },
  {
    id: 'a6',
    title: 'From a template to something yours',
    excerpt: 'A practical starting point for your next useful product.',
    content:
      'Begin with the feature closest to your idea. Read its public interface, copy the shared components it needs, and replace the demo data when you are ready.\n\nKeep your first version small. A clear, useful feature is a better foundation than a long list of unfinished possibilities.',
    category: 'Engineering',
    status: 'Draft',
    date: '2026-08-25',
    color: '#b17e90',
    motif: 0,
  },
];
