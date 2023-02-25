import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { Container } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { BlogList } from './components/blog-list/BlogList';
import { useQuery } from '@tanstack/react-query';
import posts from '../../../mocks/blog/blog-posts.json';
import { Loader } from '../../../components/loader/Loader';

export const BlogPage = () => {
  const { data, isLoading } = useQuery({queryKey: ['blog-posts'], queryFn: () => posts.posts});

  if (!isLoading && !data) return null;

  return (
    <SidebarLayout>
      <Container maxWidth={'lg'}>
        <PageHeader title={'Blog'} breadcrumbs={['Blog', 'List']} />
        { isLoading ? <Loader /> : <BlogList posts={data} /> }
      </Container>
    </SidebarLayout>
  )
}