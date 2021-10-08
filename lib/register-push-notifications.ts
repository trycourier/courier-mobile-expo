import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

interface IRegisterPushNotificationsResponse {
  token: string;
}

export const SIMULATOR = 'SIMULATOR';

export default async function registerPushNotifications() : Promise<IRegisterPushNotificationsResponse> {
  let token: string = null;
  
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      throw new Error(`Unexpected status: ${status}`);
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    this.setState({ expoPushToken: token });
  } else {
    throw new Error(SIMULATOR);
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return { token };
}