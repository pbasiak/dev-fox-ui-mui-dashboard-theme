import { useQuery } from '@tanstack/react-query';
import ordersCount from '../../../mocks/orders/orders-count.json';

export const useOrdersCount = () => {
  return useQuery({
    queryKey: ['orders-count'],
    queryFn: () => ordersCount,
  });
};
