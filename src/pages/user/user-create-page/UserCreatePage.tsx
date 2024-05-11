import { Container } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { UserForm } from '../components/user-form/UserForm';

export const UserCreatePage = () => {
  return (
    <Container maxWidth={'lg'}>
      <PageHeader title={'Create new user'} breadcrumbs={['User', 'Create']} />
      <UserForm submitButtonText={'Create account'} />
    </Container>
  );
};
