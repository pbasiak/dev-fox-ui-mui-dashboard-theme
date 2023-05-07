import { UseQueryResult } from '@tanstack/react-query';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer: string;
  quantity: number;
  items: OrderItem[];
  total: number;
  date: string;
  status: string;
}

interface OrderResponse {
  orders: Order[];
  totalPages: number;
  totalItems: number;
  page: number;
}


export type OrderType = UseQueryResult<OrderResponse>;