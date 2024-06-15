import { UseQueryResult } from '@tanstack/react-query';
import { Order, OrderStatus } from '../use-orders/types.ts';

interface OrderResponse {
  orders: Order;
  totalPages: number;
  totalItems: number;
  ordersCount: {
    [key in OrderStatus]: number;
  };
  page: number;
}

export type OrderType = UseQueryResult<OrderResponse>;
