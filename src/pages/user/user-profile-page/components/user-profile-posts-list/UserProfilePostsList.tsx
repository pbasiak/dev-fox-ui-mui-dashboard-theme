import { UserProfilePost } from '../user-profile-post/UserProfilePost';
import { Stack } from '@mui/material';
import { UserPost } from '../../../../../types/user/userPostsTypes';
import { User } from '../../../../../types/user/userTypes';

export const UserProfilePostsList = ({posts, user}: {posts: UserPost[], user: User}) => {
  const postList = posts.map(post => {
    return (
      <UserProfilePost post={post} user={user} />
    );
  });

  return (
    <Stack spacing={2}>
      {postList}
    </Stack>
  );
}