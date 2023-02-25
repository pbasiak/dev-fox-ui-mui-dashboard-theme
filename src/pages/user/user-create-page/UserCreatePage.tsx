import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { Container } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { UserForm } from '../components/user-form/UserForm';

export const UserCreatePage = () => {
  return <SidebarLayout>
    <Container maxWidth={'lg'}>
      <PageHeader title={'User create'} breadcrumbs={['User', 'Create']} />
      <UserForm submitButtonText={'Create account'} />
    </Container>
  </SidebarLayout>
}