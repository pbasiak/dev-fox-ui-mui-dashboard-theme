import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { BlogPostFieldsNames, BlogPostForm, blogPostFormSchema } from './utils/blogPostForms';
import { useCallback, useRef } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { routes } from '../../../contants/routes';
import { useNavigate } from 'react-router-dom';
import { SlateEditor } from '../../../components/slate-editor/SlateEditor.tsx';
import { Descendant } from 'slate';

const initialValue: Descendant[] = [
  {
    type: 'heading-one',
    children: [
      {
        text: 'Heading 1',
      },
    ],
  },
  {
    type: 'heading-two',
    children: [
      {
        text: 'Heading 2',
      },
    ],
  },
  {
    type: 'heading-three',
    children: [
      {
        text: 'Heading 3',
      },
    ],
  },
  {
    type: 'heading-four',
    children: [
      {
        text: 'Heading 4',
      },
    ],
  },
  {
    type: 'heading-five',
    children: [
      {
        text: 'Heading 5',
      },
    ],
  },
  {
    type: 'heading-six',
    children: [
      {
        text: 'Heading 6',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: 'block-quote',
    children: [
      {
        text: 'A wise quote.',
      },
    ],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [
      {
        text: 'Try it out for yourself!',
      },
    ],
  },
];

export const EditPostBlogPage = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<BlogPostForm>({
    resolver: yupResolver(blogPostFormSchema),
    defaultValues: {
      title: 'New opportunity for developers & product engineers',
      description: 'We are looking for a developer to join our team. You will be working on a new project.',
      content: initialValue,
    },
  });

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
  ];

  const categoriesList = categories.map((category) => (
    <FormGroup key={category.id} aria-label='position' row>
      <FormControlLabel control={<Checkbox />} label={category.name} />
    </FormGroup>
  ));

  const handleCreatePost = useCallback((data: BlogPostForm) => {
    console.log(data);
  }, []);

  const handlePublish = useCallback(() => {
    formRef.current && formRef.current.requestSubmit();
  }, []);

  return (
    <Container maxWidth={'xl'}>
      <PageHeader
        title={'New opportunity for developers & product engineers'}
        breadcrumbs={['Blog', 'New opportunity for developers & product engineers']}
        renderRight={
          <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
            <Button variant={'outlined'} onClick={() => navigate(routes.blog)}>
              Cancel
            </Button>
            <Button variant={'contained'} onClick={handlePublish}>
              Update
            </Button>
          </Stack>
        }
      />

      <form ref={formRef} onSubmit={handleSubmit(handleCreatePost)}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper sx={{ padding: 4 }}>
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <TextField label={'Post title'} {...register(BlogPostFieldsNames.title)} />
                  {errors.title && <Typography color={'error'}>{errors.title.message}</Typography>}
                </FormControl>

                <FormControl fullWidth>
                  <TextField label={'Post description'} multiline {...register(BlogPostFieldsNames.description)} />
                  {errors.description && <Typography color={'error'}>{errors.description.message}</Typography>}
                </FormControl>

                <Controller
                  render={({ fieldState, field: { onChange, value } }) => (
                    <>
                      <SlateEditor onChange={onChange} placeholder={'Post content'} initialValue={value} />
                      {fieldState.error && <Typography color={'error'}>{fieldState.error.message}</Typography>}
                    </>
                  )}
                  name={BlogPostFieldsNames.content}
                  control={control}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                <Typography>General</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2} justifyContent={'flex-start'}>
                  <FormControl component='fieldset'>
                    <FormGroup aria-label='position' row>
                      <FormControlLabel control={<Switch />} label={'Public post'} />
                    </FormGroup>
                    <FormGroup aria-label='position' row>
                      <FormControlLabel control={<Checkbox />} label={'Pin to the top'} />
                    </FormGroup>
                    <FormGroup aria-label='position' row>
                      <FormControlLabel control={<Checkbox />} label={'Waiting for the review'} />
                    </FormGroup>
                  </FormControl>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel2a-content' id='panel2a-header'>
                <Typography>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <TextField placeholder={'Search categories'} size={'small'} />
                  <Stack>{categoriesList}</Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
