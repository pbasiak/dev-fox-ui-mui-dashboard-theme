import { UserForm } from '../components/user-form/UserForm.tsx';
import { Container } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader.tsx';
import { useCurrentUser } from '../../../hooks/api/use-current-user/useCurrentUser.ts';

export const UserEditPage = () => {
  // Get the user data (replace with your own)
  const { data: user } = useCurrentUser();

  const defaultValues = user
    ? {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        username: user.username,
        image: user.image,
        age: user.age,
        birthDate: user.birthDate,
      }
    : undefined;

  return (
    <Container maxWidth={'lg'}>
      <PageHeader
        title={`${user?.firstName} ${user?.lastName}`}
        breadcrumbs={['User', `${user?.firstName} ${user?.lastName}`]}
      />
      <UserForm submitButtonText={'Save changes'} defaultValues={defaultValues} />
    </Container>
  );
};
