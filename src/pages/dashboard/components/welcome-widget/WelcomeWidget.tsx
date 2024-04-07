import { WelcomeWidgetContainer, WelcomeWidgetContent } from './styled';
import { Button, Typography } from '@mui/material';

interface WelcomeWidgetProps {
  title: string;
  description: string;
}

export const WelcomeWidget = ({ title, description }: WelcomeWidgetProps) => {
  return (
    <WelcomeWidgetContainer>
      <WelcomeWidgetContent>
        <Typography variant={'h3'} fontWeight={'fontWeightBold'}>
          {title}
        </Typography>
        <Typography variant={'body1'} mb={1}>
          {description}
        </Typography>
        <Button color={'primary'} variant={'outlined'} size={'small'}>
          Documentation
        </Button>
      </WelcomeWidgetContent>
    </WelcomeWidgetContainer>
  );
};
