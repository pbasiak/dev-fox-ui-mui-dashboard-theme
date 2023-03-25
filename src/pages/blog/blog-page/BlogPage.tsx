import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import {
  Button,
  Container,
  FormControl, InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { BlogList } from './components/blog-list/BlogList';
import { useQuery } from '@tanstack/react-query';
import posts from '../../../mocks/blog/blog-posts.json';
import { Loader } from '../../../components/loader/Loader';
import { useState } from 'react';
import { Add, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../contants/routes';

interface Props {
  columns?: 1 | 2 | 3;
}

export const BlogPage = ({ columns = 1 }: Props) => {
  const { data, isLoading } = useQuery({queryKey: ['blog-posts'], queryFn: () => posts.posts});
  const [sort, setSort] = useState('newest');
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  if (!isLoading && !data) return null;

  return (
    <SidebarLayout>
      <Container maxWidth={'lg'}>
        <PageHeader title={'Blog'} breadcrumbs={['Blog', 'List']} renderRight={<Button onClick={() => navigate(routes.blogCreatePost)} startIcon={<Add />} variant={'contained'}>Add post</Button>} />
        <Stack direction={'row'} marginBottom={2} justifyContent={'space-between'} alignItems={'flex-start'}>
          <TextField InputProps={{ startAdornment:  <InputAdornment position="start"><Search color={'inherit'} /></InputAdornment> }} fullWidth={false} size={'small'} variant={'outlined'} placeholder={'Search posts...'} />
          <FormControl>
            <InputLabel id="sort-select-label">Sort</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sort}
              label="Sort"
              size={'small'}
              onChange={handleChange}
            >
              <MenuItem value={'newest'}>Newest</MenuItem>
              <MenuItem value={'most-popular'}>Most popular</MenuItem>
              <MenuItem value={'recommended'}>Recommended</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        { isLoading ? <Loader /> : <BlogList posts={data} columns={columns} /> }
      </Container>
    </SidebarLayout>
  )
}