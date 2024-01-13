import { useQuery } from '@tanstack/react-query';
import orders from '../../../mocks/orders/orders-list.json';
import { OrderType } from './types';

export const useOrders = (): OrderType => {
  return useQuery({ queryKey: ['orders'], queryFn: () => orders});
}