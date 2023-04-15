import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { ReactNode } from 'react';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
  sx?: any;
}

export const Widget = ({ title, children, sx }: WidgetProps) => {
  return (
    <WidgetContainer sx={sx}>
      <WidgetTitleContainer>
        <WidgetTitle>{title}</WidgetTitle>
      </WidgetTitleContainer>
      <div>
        {children}
      </div>
    </WidgetContainer>
  );
};
