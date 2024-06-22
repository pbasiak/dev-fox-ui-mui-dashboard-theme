import { Box, Container } from '@mui/material';
import { DemoTypography } from './styled';

export default function TypographyPage() {
  return (
    <Container>
      <Box>
        <DemoTypography variant='h1'>h1. Heading</DemoTypography>
        <DemoTypography variant='h2'>h2. Heading</DemoTypography>
        <DemoTypography variant='h3'>h3. Heading</DemoTypography>
        <DemoTypography variant='h4'>h4. Heading</DemoTypography>
        <DemoTypography variant='h5'>h5. Heading</DemoTypography>
        <DemoTypography variant='h6'>h6. Heading</DemoTypography>
        <DemoTypography variant='subtitle1'>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </DemoTypography>
        <DemoTypography variant='subtitle2'>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </DemoTypography>
        <DemoTypography variant='body1'>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </DemoTypography>
        <DemoTypography variant='body2'>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </DemoTypography>
        <DemoTypography variant='button'>button text</DemoTypography>
        <DemoTypography variant='caption'>caption text</DemoTypography>
        <DemoTypography variant='overline'>overline text</DemoTypography>
      </Box>
    </Container>
  );
}
