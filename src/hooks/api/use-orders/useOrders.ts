import { useQuery } from '@tanstack/react-query';
import orders from '../../../mocks/orders/orders-list.json';
import { OrderType } from './types';

interface Params {
  status?: string;
  customer?: string;
}

export const useOrders = ({ status }: Params = {}): OrderType => {
  return useQuery({
    queryKey: ['orders', status],
    queryFn: () => {
      if (status && status !== 'All') {
        const filteredOrders = orders.orders.filter((order) => order.status === status);
        return { ...orders, orders: filteredOrders };
      }

      return orders;
    },
  });
};
