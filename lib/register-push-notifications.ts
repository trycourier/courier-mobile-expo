import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

interface ITokens {
  expo?: string;
  device?: string;
}

export default async function registerPushNotifications() : Promise<ITokens> {
  const tokens: ITokens = {
    expo: null,
    device: null
  };

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      throw new Error(`Unexpected status: ${finalStatus}`);
    }

    tokens.expo = (await Notifications.getExpoPushTokenAsync()).data;
    tokens.device = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(tokens);
    
    return tokens;
  } else {
    return {
      expo: 'SIMULATOR-EXPO',
      device: 'SIMULATOR-DEV'
    };
  }
}