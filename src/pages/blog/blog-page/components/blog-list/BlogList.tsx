import { BlogPost } from '../../types/blogPost';
import { BlogListPost } from '../blog-list-post/BlogListPost';
import { Stack } from '@mui/material';

interface Props {
  posts: BlogPost[];
}

export const BlogList = ({posts}: Props) => {
  const postsList = posts.map((post) => {
    return (
      <BlogListPost post={post} key={post.id} />
    )
  });

  return (
    <div>
      <h1>BlogList</h1>

      <Stack spacing={4}>
        {postsList}
      </Stack>
    </div>
  )
}