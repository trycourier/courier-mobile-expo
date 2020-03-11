import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

interface IRegisterPushNotificationsResponse {
  token: string;
}

export const SIMULATOR = 'SIMULATOR';

export default async function registerPushNotifications() : Promise<IRegisterPushNotificationsResponse> {
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status === 'undetermined') {
    throw new Error(SIMULATOR);
  } else if (status !== 'granted') {
    throw new Error(`Unexpected status: ${status}`);
  }

  // Get the token that identifies this device
  return {
    token: await Notifications.getExpoPushTokenAsync()
  };
}