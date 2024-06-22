import { useSuspenseQuery } from '@tanstack/react-query';
import ordersCount from '../../../mocks/orders/orders-count.json';

export const useOrdersCount = () => {
  return useSuspenseQuery({
    queryKey: ['orders-count'],
    queryFn: () => ordersCount,
  });
};
