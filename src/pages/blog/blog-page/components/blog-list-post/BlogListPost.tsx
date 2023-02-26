import { BlogPost } from '../../types/blogPost';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { CalendarMonth, Comment, Person } from '@mui/icons-material';

interface Props {
  post: BlogPost;
  size?: 'small' | 'medium';
}
export const BlogListPost = ({post, size = 'medium'}: Props) => {
  return (
    <Paper elevation={8}>
      <Stack>
        <Stack sx={{position: 'relative', overflow: 'hidden', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}>
          <img src={post.image} alt={post.title} style={{ maxWidth: '100%'}}/>
          <Box sx={{ boxShadow: 'inset 0px -40px 80px rgba(0,0,0,0.4)', position: 'absolute', bottom: 0, padding: 2, display: 'flex', alignItems: 'flex-end', height: '100%', width: '100%' }}>
            <Typography color={'grey.50'} fontWeight={700} fontSize={size === 'medium' ? 36 : 24} sx={{ textShadow: '2px 2px 2px rgba(0,0,0, 0.6)' }}>{post.title}</Typography>
          </Box>
        </Stack>
        <Stack padding={2} spacing={2}>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography fontSize={14} color={'text.secondary'} alignItems={'center'} display={'flex'}>
              <Person /> {post.author.name}
            </Typography>
            <Typography fontSize={14} color={'text.secondary'} alignItems={'center'} display={'flex'}>
              <CalendarMonth /> {post.date}
            </Typography>
            <Typography fontSize={14} color={'text.secondary'} alignItems={'center'} display={'flex'}>
              <Comment sx={{ marginRight: 1}} /> {post.commentsCount}
            </Typography>
          </Stack>
          <Typography variant={'body1'}>{post.content}</Typography>
          <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'} spacing={1}>
            <Button variant={'contained'} size={size === 'small' ? 'small' : 'medium'}>Read more</Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}