import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';
import { Container, Grid, Stack } from '@mui/material';
import { UserProfileHeader } from './components/user-profile-header/UserProfileHeader';
import { UserProfileInfo } from './components/user-profile-info/UserProfileInfo';
import { UserProfilePostsList } from './components/user-profile-posts-list/UserProfilePostsList';
import { useUser } from '../../hooks/api/use-user/useUser';
import { useUserPosts } from '../../hooks/api/use-user-posts/useUserPosts';

export const UserProfilePage = () => {
  const { data: user } = useUser({ id: 1 });
  const { data: posts } = useUserPosts();

  if (!user || !posts) return null;

  return (
    <SidebarLayout>
      <Container maxWidth={'lg'}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <UserProfileHeader user={user} />
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <UserProfileInfo user={user} />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={2}>
              <UserProfilePostsList posts={posts} user={user} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SidebarLayout>
  )
}