import { BlogPost } from '../../types/blogPost';
import { IconButton, Paper, Stack, Typography, Link } from '@mui/material';
import { ArrowForward, CalendarMonth, Comment, Favorite, Person, Share } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { routes } from '../../../../../contants/routes';

interface Props {
  post: BlogPost;
  size?: 'small' | 'medium';
}
export const BlogListPost = ({ post, size = 'medium' }: Props) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={8}>
      <Stack padding={2}>
        <Stack
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '6px',
            boxShadow: '2px 4px 8px 0px rgba(12, 29, 98, 0.1)',
          }}
        >
          <img src={post.image} alt={post.title} style={{ maxWidth: '100%' }} />
        </Stack>
        <Stack spacing={2} mt={2}>
          <Link
            component={RouterLink}
            to={routes.blogPost}
            sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}
          >
            <Typography
              component={'span'}
              fontWeight={'fontWeightMedium'}
              fontSize={size === 'medium' ? 36 : 18}
              lineHeight={1}
            >
              {post.title}
            </Typography>
          </Link>

          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography fontSize={14} color={'text.secondary'} alignItems={'center'} display={'flex'}>
              <Person /> {post.author.name}
            </Typography>
            <Typography fontSize={14} color={'text.secondary'} alignItems={'center'} display={'flex'}>
              <CalendarMonth /> {post.date}
            </Typography>
          </Stack>
          <Typography variant={'body1'}>{post.content}</Typography>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={1} pt={1}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <IconButton size={'small'} color={'inherit'}>
                <Favorite fontSize={'small'} />
              </IconButton>
              <IconButton size={'small'} color={'inherit'}>
                <Share fontSize={'small'} />
              </IconButton>
              <IconButton size={'small'} color={'inherit'}>
                <Comment fontSize={'small'} />
              </IconButton>
            </Stack>
            <IconButton size={'small'} color={'primary'} onClick={() => navigate(routes.blogPost)}>
              <ArrowForward fontSize={'small'} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
