import { UseQueryResult } from '@tanstack/react-query';

export enum OrderStatus {
  ALL = 'All',
  PENDING = 'Pending',
  PROCESSING = 'Processing',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface Customer {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Product {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Delivery {
  carrier: string;
  tracking_number: string;
  estimated_delivery_date: string;
}

export interface Order {
  id: string;
  date: Date;
  customer: Customer;
  products: Product[];
  total: number;
  payment_method: string;
  status: OrderStatus;
  delivery: Delivery;
  notes: string;
}

interface OrderResponse {
  orders: Order[];
  totalPages: number;
  totalItems: number;
  ordersCount: {
    [key in OrderStatus]: number;
  };
  page: number;
}

export type OrderType = UseQueryResult<OrderResponse>;
