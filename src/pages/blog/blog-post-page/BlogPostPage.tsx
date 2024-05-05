import { useBlogPost } from '../../../hooks/api/use-blog-post/useBlogPost';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { Box, Container, Paper } from '@mui/material';

export const BlogPostPage = () => {
  const { data, isLoading } = useBlogPost();

  if (data !== undefined && isLoading) return null;

  return (
    <Container maxWidth='md'>
      <PageHeader title={data?.title || ''} breadcrumbs={['Blog', data?.title || '']} />
      <Box sx={{ borderRadius: '6px', overflow: 'hidden', mb: 2, boxShadow: 5 }}>
        <img src={data?.image} alt={data?.title} style={{ maxWidth: '100%', display: 'block' }} />
      </Box>
      <Paper sx={{ padding: 4 }}></Paper>
    </Container>
  );
};
