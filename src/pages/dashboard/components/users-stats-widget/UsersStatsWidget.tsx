import { Widget } from '../../../../components/widget/Widget';
import { alpha, useTheme } from '@mui/material';
import { userStatsData } from './chartData.ts';
import { ResponsiveBar } from '@nivo/bar';

export const UsersStatsWidget = () => {
  const theme = useTheme();

  return (
    <Widget title={'Users'} contentHeight={'350px'}>
      <ResponsiveBar
        data={userStatsData}
        keys={['hot dog', 'burger', 'sandwich']}
        indexBy='country'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[
          alpha(theme.palette.primary.main, 0.6),
          alpha(theme.palette.primary.main, 0.4),
          alpha(theme.palette.primary.main, 0.2),
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelTextColor={{
          theme: 'labels.text.fill',
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role='application'
        ariaLabel='Nivo bar chart demo'
        barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
      />
    </Widget>
  );
};
