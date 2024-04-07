import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { BlogList } from './components/blog-list/BlogList';
import { Loader } from '../../../components/loader/Loader';
import { useCallback, useState } from 'react';
import { Add, GridView, Search, Splitscreen } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../contants/routes';
import { BlogView } from './types/blogView';
import { useBlogPosts } from '../../../hooks/api/use-blog-posts';

export const BlogPage = () => {
  const { isLoading, data } = useBlogPosts();
  const [sort, setSort] = useState('newest');
  const [view, setView] = useState<BlogView>(BlogView.GRID);
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleViewChange = useCallback((view: BlogView) => {
    setView(view);
  }, []);

  if (!isLoading && !data) return null;

  return (
    <Container maxWidth={'lg'}>
      <PageHeader
        title={'Blog'}
        breadcrumbs={['Blog', 'List']}
        renderRight={
          <Button onClick={() => navigate(routes.blogCreatePost)} startIcon={<Add />} variant={'contained'}>
            Add post
          </Button>
        }
      />

      <Stack direction={'row'} marginBottom={2} justifyContent={'space-between'} alignItems={'flex-start'}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search color={'inherit'} />
              </InputAdornment>
            ),
          }}
          fullWidth={false}
          size={'small'}
          variant={'outlined'}
          placeholder={'Search posts...'}
        />
        <Stack direction={'row'} spacing={2}>
          <FormControl>
            <InputLabel id='sort-select-label'>Sort</InputLabel>
            <Select
              labelId='sort-select-label'
              id='sort-select'
              value={sort}
              label='Sort'
              size={'small'}
              onChange={handleChange}
            >
              <MenuItem value={'newest'}>Newest</MenuItem>
              <MenuItem value={'most-popular'}>Most popular</MenuItem>
              <MenuItem value={'recommended'}>Recommended</MenuItem>
            </Select>
          </FormControl>

          <ButtonGroup variant={'outlined'} color={'primary'}>
            <Button
              onClick={() => handleViewChange(BlogView.GRID)}
              variant={view === BlogView.GRID ? 'contained' : 'outlined'}
              size={'small'}
            >
              <GridView />
            </Button>
            <Button
              onClick={() => handleViewChange(BlogView.LIST)}
              variant={view === BlogView.LIST ? 'contained' : 'outlined'}
              size={'small'}
            >
              <Splitscreen />
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack mt={4} mb={4} spacing={2}>
        <Typography variant={'h4'}>Read latest articles</Typography>
        <Typography variant={'body1'} color={'text.secondary'}>
          Aenean euismod imperdiet tortor, at euismod dolor. Pellentesque mollis lorem lacus, eu suscipit leo hendrerit
          sed. Proin neque ante, malesuada at sagittis sit amet, dignissim sit amet ex. Vivamus consequat ante sed
          laoreet sollicitudin. Donec fermentum enim sit amet leo consectetur, a euismod nunc posuere. Curabitur ipsum
          massa, pellentesque id arcu vitae, finibus accumsan ex. Morbi vel lobortis ligula. Etiam porttitor vel purus
          eu commodo.
        </Typography>
      </Stack>
      {isLoading && <Loader />}
      {!isLoading && data && <BlogList posts={data} view={view} />}
    </Container>
  );
};
