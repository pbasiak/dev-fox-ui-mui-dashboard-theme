import { Container, Paper, Stack, Typography } from '@mui/material';
import Buttons from './components/Buttons';
import { DocBox } from '../components/doc-box/DocBox';
import TextButtons from './components/TextButtons';
import ContainedButtons from './components/ContainedButtons';
import OutlinedButtons from './components/OutlinedButtons';
import ColorButtons from './components/ColorButtons';
import ButtonSizes from './components/ButtonSizes';
import IconButtons from './components/IconButtons';
import IconLabelButtons from './components/IconLabelButtons';
import IconButtonColors from './components/IconButtonColors';
import IconButtonSizes from './components/IconButtonSizes';
import UploadButtons from './components/UploadButtons';

export const ButtonPage = () => {
  const componentsList = [
    {
      name: 'Button',
      component: <Buttons />,
    },
    {
      name: 'Text button',
      component: <TextButtons />,
    },
    {
      name: 'Contained button',
      component: <ContainedButtons />,
    },
    {
      name: 'Outlined button',
      component: <OutlinedButtons />,
    },
    {
      name: 'Color',
      component: <ColorButtons />,
    },
    {
      name: 'Size',
      component: <ButtonSizes />,
    },
    {
      name: 'Icon',
      component: <IconButtons />,
    },
    {
      name: 'Icon button',
      component: <IconLabelButtons />,
    },
    {
      name: 'Icon color',
      component: <IconButtonColors />,
    },
    {
      name: 'Icon size',
      component: <IconButtonSizes />,
    },
    {
      name: 'Upload',
      component: <UploadButtons />,
    },
  ];

  const components = componentsList.map((item, index) => (
    <DocBox key={index} title={item.name}>
      {item.component}
    </DocBox>
  ));

  return (
    <Container maxWidth={'md'}>
      <Typography variant={'h4'}>Button</Typography>
      <Paper sx={{ padding: 4, marginTop: 2 }} variant={'outlined'}>
        <Stack spacing={2} direction={'column'} flexWrap={'wrap'} flexBasis={'50%'}>
          {components}
        </Stack>
      </Paper>
    </Container>
  );
};
