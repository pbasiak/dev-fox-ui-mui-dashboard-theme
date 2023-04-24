import { Widget, WidgetProps } from '../../../../components/widget/Widget';
import { Stack, Typography } from '@mui/material';

interface StatWidgetProps extends WidgetProps {
  value: string;
}

export const StatWidget = ({ title, value }: StatWidgetProps) => {
  return (
    <Widget title={title} sx={{ minHeight: '120px' }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h4'} component={'p'} fontWeight={'fontWeightBold'}>
          {value}
        </Typography>
      </Stack>
    </Widget>
  );
};
