import { Container, Grid } from '@mui/material';
import { UserProfileHeader } from './components/user-profile-header/UserProfileHeader';
import { UserProfileInfo } from './components/user-profile-info/UserProfileInfo';
import { UserProfilePostsList } from './components/user-profile-posts-list/UserProfilePostsList';
import { useUser } from '../../../hooks/api/use-user/useUser';
import { useUserPosts } from '../../../hooks/api/use-user-posts/useUserPosts';
import { UserProfileNewComment } from './components/user-profile-new-comment/UserProfileNewComment';
import { PageHeader } from '../../../components/page-header/PageHeader';

export const UserProfilePage = () => {
  const { data: user } = useUser({ id: 1 });
  const { data: posts } = useUserPosts();

  if (!user || !posts) return null;

  return (
    <Container maxWidth={'lg'}>
      <PageHeader title={'User profile'} breadcrumbs={['User', 'Profile']} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <UserProfileHeader user={user} />
        </Grid>
        <Grid item xs={4}>
          <UserProfileInfo user={user} />
        </Grid>
        <Grid container item xs={8} spacing={2}>
          <Grid item xs={12}>
            <UserProfileNewComment user={user} />
          </Grid>
          <Grid item xs={12}>
            <UserProfilePostsList posts={posts} user={user} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
