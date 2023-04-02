import { WelcomeWidgetContainer, WelcomeWidgetContent } from './styled';
import { Typography } from '@mui/material';

interface WelcomeWidgetProps {
  title: string;
  description: string;
}

export const WelcomeWidget = ({ title, description }: WelcomeWidgetProps) => {
  return (
    <WelcomeWidgetContainer>
      <WelcomeWidgetContent>
        <Typography variant={'h4'} fontWeight={'bold'}>{title}</Typography>
        <Typography variant={'body1'}>{description}</Typography>
      </WelcomeWidgetContent>
    </WelcomeWidgetContainer>
  );
}