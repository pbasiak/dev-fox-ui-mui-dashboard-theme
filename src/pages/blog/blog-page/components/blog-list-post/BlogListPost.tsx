import { BlogPost } from '../../types/blogPost';
import { Button, Paper, Stack, Typography } from '@mui/material';

interface Props {
  post: BlogPost;
}
export const BlogListPost = ({post}: Props) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack>
        <Typography fontSize={14} color={'text.secondary'}>{post.date}</Typography>
        <Typography fontWeight={700} variant={'h4'}>{post.title}</Typography>
        <p>{post.content}</p>
        <Stack direction={'row'} justifyContent={'flex-end'} spacing={1}>
          <Button variant={'outlined'}>Read more</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}