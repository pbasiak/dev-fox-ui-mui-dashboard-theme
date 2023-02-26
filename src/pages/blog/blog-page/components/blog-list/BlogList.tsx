import { BlogPost } from '../../types/blogPost';
import { BlogListPost } from '../blog-list-post/BlogListPost';
import { Grid, Stack } from '@mui/material';

interface Props {
  posts: BlogPost[];
  columns?: 1 | 2 | 3;
}

const mdConfig = {
  1: 12,
  2: 6,
  3: 4
}

export const BlogList = ({posts, columns = 1}: Props) => {
  const postsList = posts.map((post) => {
    return (
      <Grid item xs={12} md={mdConfig[columns]} key={post.id}>
        <BlogListPost post={post} key={post.id} size={columns === 3 ? 'small' : 'medium'} />
      </Grid>
    )
  });

  return (
    <Stack spacing={6}>
      <Grid container spacing={4}>
        {postsList}
      </Grid>
    </Stack>
  )
}