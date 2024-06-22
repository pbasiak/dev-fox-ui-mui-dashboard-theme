import { Box, Container, Typography } from '@mui/material';
import { ColorStack } from './styled';

interface ColorBoxProps {
  color: string;
}

export const ColorBox = ({ color }: ColorBoxProps) => {
  return <Box sx={{ padding: 2, backgroundColor: color }}>{color}</Box>;
};

export default function ColorsPage() {
  return (
    <Container maxWidth={false}>
      <ColorStack>
        <Typography marginBottom={1}>Primary</Typography>
        <ColorBox color='primary.light' />
        <ColorBox color='primary.main' />
        <ColorBox color='primary.dark' />
      </ColorStack>
      <ColorStack>
        <Typography marginBottom={1}>Secondary</Typography>
        <ColorBox color='secondary.light' />
        <ColorBox color='secondary.main' />
        <ColorBox color='secondary.dark' />
      </ColorStack>
      <ColorStack>
        <Typography marginBottom={1}>Error</Typography>
        <ColorBox color='error.light' />
        <ColorBox color='error.main' />
        <ColorBox color='error.dark' />
      </ColorStack>
      <ColorStack>
        <Typography marginBottom={1}>Warning</Typography>
        <ColorBox color='warning.light' />
        <ColorBox color='warning.main' />
        <ColorBox color='warning.dark' />
      </ColorStack>
      <ColorStack>
        <Typography marginBottom={1}>Info</Typography>
        <ColorBox color='info.light' />
        <ColorBox color='info.main' />
        <ColorBox color='info.dark' />
      </ColorStack>
      <ColorStack>
        <Typography marginBottom={1}>Success</Typography>
        <ColorBox color='success.light' />
        <ColorBox color='success.main' />
        <ColorBox color='success.dark' />
      </ColorStack>
    </Container>
  );
}
