import React from 'react';
import { Widget } from '../../../../components/widget/Widget';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const getData = ({ backgroundColor }: { backgroundColor: string }) => ({
  labels,
  datasets: [
    {
      label: 'Sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor,
    },
  ],
});

export const SalesWidget = () => {
  const theme = useTheme();
  const data = getData({ backgroundColor: theme.palette.primary.dark })

  return (
    <Widget title={'Sales summary'}>
      <Bar options={options} data={data} />
    </Widget>
  );
}
