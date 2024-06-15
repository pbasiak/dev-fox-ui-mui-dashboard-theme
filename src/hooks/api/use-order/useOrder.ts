import { useOrders } from '../use-orders/useOrders.ts';

export const useOrder = () => {
  const orders = useOrders();

  return { ...orders, data: orders.data?.orders[0] };
};
