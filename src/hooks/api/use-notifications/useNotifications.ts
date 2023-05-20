import { useQuery, UseQueryResult } from '@tanstack/react-query';
import notifications from './../../../mocks/notifications/notifications.json';

interface NotificationType {
  id: string;
  title: string;
  message: string;
  timestamp: string;
}

interface Response {
  notifications: NotificationType[];
}

type UseNotifications = UseQueryResult<Response>

export const useNotifications = (): UseNotifications => {
  return useQuery({queryKey: ['notifications'], queryFn: () => notifications});
}