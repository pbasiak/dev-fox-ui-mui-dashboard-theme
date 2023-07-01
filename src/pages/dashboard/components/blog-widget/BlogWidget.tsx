import { BlogWidgetContainer, BlogWidgetContent } from './styled';
import { Button, Typography } from '@mui/material';
import { useBlogPosts } from '../../../../hooks/api/use-blog-posts';

export const BlogWidget = () => {
  const { data , isLoading } = useBlogPosts();

  if (isLoading || !data) return null;

  return (
    <BlogWidgetContainer>
      <BlogWidgetContent>
        <Typography variant={'body2'} textTransform={'uppercase'}>Latest blog post</Typography>
        <Typography variant={'h4'} fontWeight={'fontWeightBold'}>{data[0].title}</Typography>
        <Typography variant={'body1'} mb={1}>{data[0].content}</Typography>
        <Button color={'info'} variant={'outlined'} size={'small'}>Read more</Button>
      </BlogWidgetContent>
    </BlogWidgetContainer>
  );
}