import { BlogPost } from '../../types/blogPost';
import { BlogListPost } from '../blog-list-post/BlogListPost';
import { Grid } from '@mui/material';
import { BlogView } from '../../types/blogView';

interface Props {
  posts: BlogPost[];
  view: BlogView;
}

export const BlogList = ({ posts, view }: Props) => {
  const mdConfig = view === BlogView.LIST ? 12 : 4;

  const postsList = posts.map((post) => {
    return (
      <Grid item xs={12} md={mdConfig} key={post.id}>
        <BlogListPost post={post} key={post.id} size={view === BlogView.GRID ? 'small' : 'medium'} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={4}>
      {postsList}
    </Grid>
  );
};
