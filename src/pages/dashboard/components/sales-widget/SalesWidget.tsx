import { Widget } from '../../../../components/widget/Widget';
import features from './world.json';

import { ResponsiveChoropleth } from '@nivo/geo';
import { salesData } from './salesData.ts';
import { alpha, useTheme } from '@mui/material';

export const SalesWidget = () => {
  const theme = useTheme();

  return (
    <Widget title={'Sales summary'} contentHeight={'350px'}>
      <ResponsiveChoropleth
        data={salesData}
        features={features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={[
          alpha(theme.palette.primary.main, 0.6),
          alpha(theme.palette.primary.main, 0.4),
          alpha(theme.palette.primary.main, 0.2),
        ]}
        domain={[0, 1000000]}
        unknownColor='#666666'
        label='properties.name'
        valueFormat='.2s'
        projectionScale={162}
        projectionTranslation={[0.5, 0.7]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor='#dddddd'
        borderWidth={0.5}
        borderColor='#152538'
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Widget>
  );
};
