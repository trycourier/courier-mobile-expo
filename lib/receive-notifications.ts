import { Notifications } from 'expo';

export type TNotificationOrigin = 'selected' | 'received';

export interface INotification {
  origin: TNotificationOrigin;
  data: any;
  remote: boolean;
}

export default function (fn: (notification: INotification) => any) {
  return Notifications.addListener(fn);
};