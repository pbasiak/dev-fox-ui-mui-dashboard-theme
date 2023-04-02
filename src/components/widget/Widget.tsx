import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { ReactNode } from 'react';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
}

export const Widget = ({ title, children }: WidgetProps) => {
  return (
    <WidgetContainer>
      <WidgetTitleContainer>
        <WidgetTitle>{title}</WidgetTitle>
      </WidgetTitleContainer>
      <div>
        {children}
      </div>
    </WidgetContainer>
  );
};
