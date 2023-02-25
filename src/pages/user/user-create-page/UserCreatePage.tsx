import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { Container } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';

export const UserCreatePage = () => {
  return <SidebarLayout>
    <Container maxWidth={'lg'}>
      <PageHeader title={'User create'} breadcrumbs={['User', 'Create']} />
    </Container>
  </SidebarLayout>
}