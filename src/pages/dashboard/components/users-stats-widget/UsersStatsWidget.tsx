import { Widget } from '../../../../components/widget/Widget';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
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

const getData = ({ backgroundColor }: { backgroundColor: string }) => ({
  labels,
  datasets: [
    {
      label: 'Users',
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor,
    },
  ],
});

export const UsersStatsWidget = () => {
  const theme = useTheme();
  const data = getData({ backgroundColor: theme.palette.secondary.main });

  return (
    <Widget title={'Users'}>
      <Bar options={options} data={data} />
    </Widget>
  );
};
