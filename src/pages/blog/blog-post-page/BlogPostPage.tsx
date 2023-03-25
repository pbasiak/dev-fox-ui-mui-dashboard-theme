import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { useBlogPost } from '../../../hooks/api/use-blog-post/useBlogPost';
import { PageHeader } from '../../../components/page-header/PageHeader';
import ReactQuill from 'react-quill';
import { Container, Paper } from '@mui/material';

export const BlogPostPage = () => {
  const { data, isLoading } = useBlogPost();

  if (data !== undefined && isLoading) return null;

  return (
    <SidebarLayout>
      <Container maxWidth='lg'>
        <PageHeader title={data?.title || ''} breadcrumbs={['Blog', data?.title || '']} />
        <Paper sx={{ padding: 4 }}>
          <ReactQuill
            value={data?.content}
            readOnly={true}
            theme={"bubble"}
          />
        </Paper>
      </Container>
    </SidebarLayout>
  )
}