import { useBlogPost } from '../../../hooks/api/use-blog-post/useBlogPost';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { Box, Container, Paper } from '@mui/material';
import { SlateEditor } from '../../../components/slate-editor/SlateEditor.tsx';
import { Descendant } from 'slate';

const initialValue: Descendant[] = [
  {
    type: 'heading-one',
    children: [
      {
        text: 'Heading 1',
      },
    ],
  },
  {
    type: 'heading-two',
    children: [
      {
        text: 'Heading 2',
      },
    ],
  },
  {
    type: 'heading-three',
    children: [
      {
        text: 'Heading 3',
      },
    ],
  },
  {
    type: 'heading-four',
    children: [
      {
        text: 'Heading 4',
      },
    ],
  },
  {
    type: 'heading-five',
    children: [
      {
        text: 'Heading 5',
      },
    ],
  },
  {
    type: 'heading-six',
    children: [
      {
        text: 'Heading 6',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: 'block-quote',
    children: [
      {
        text: 'A wise quote.',
      },
    ],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [
      {
        text: 'Try it out for yourself!',
      },
    ],
  },
];

export default function BlogPostPage() {
  const { data, isLoading } = useBlogPost();

  if (data !== undefined && isLoading) return null;

  return (
    <Container maxWidth='md'>
      <PageHeader title={data?.title || ''} breadcrumbs={['Blog', data?.title || '']} />
      <Box sx={{ borderRadius: '6px', overflow: 'hidden', mb: 2, boxShadow: 5 }}>
        <img src={data?.image} alt={data?.title} style={{ maxWidth: '100%', display: 'block' }} />
      </Box>
      <Paper sx={{ padding: 4 }}>
        <SlateEditor readOnly={true} initialValue={initialValue} />
      </Paper>
    </Container>
  );
}
