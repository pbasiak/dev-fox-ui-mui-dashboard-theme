import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import notifications from './../../../mocks/notifications/notifications.json';

export enum NotificationType {
  Message = 'message',
  Alert = 'alert',
  Reminder = 'reminder',
}

export enum NotificationStatus {
  Read = 'read',
  Unread = 'unread',
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  status: NotificationStatus;
  type: NotificationType;
}

interface Response {
  notifications: Notification[];
}

type UseNotifications = UseSuspenseQueryResult<Response>;

export const useNotifications = (): UseNotifications => {
  return useSuspenseQuery({ queryKey: ['notifications'], queryFn: () => notifications });
};
