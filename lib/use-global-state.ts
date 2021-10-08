import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export type GlobalStateViews = 'home' | 'settings' | 'logs';

export interface ITokens {
  expo?: string;
  device?: string;
};

export interface IGlobalState {
  view: GlobalStateViews;
  expoToken: string;
  deviceToken: string;
  logEntry: string;

  load: () => Promise<void>;
  reset: () => Promise<void>;

  goTo: (view: GlobalStateViews) => void;
  registerTokens: (tokens: ITokens) => Promise<void>;
  receiveNotification: (event: Notifications.Notification) => Promise<void>;
}

export default function (): IGlobalState {
  const [view, setView] = useState<GlobalStateViews>('home');
  const [storedTokens, setStoredTokens] = useState<ITokens | undefined>();
  const [logEntry, setLogEntry] = useState<string>();

  return {
    view,
    expoToken: (storedTokens ? storedTokens.expo : null) ?? "",
    deviceToken: (storedTokens ? storedTokens.device : null) ?? "",
    logEntry,

    load: async () => {
      const expo = await AsyncStorage.getItem('tokens:expo');
      const device = await AsyncStorage.getItem('tokens:device');
      const logEntry = await AsyncStorage.getItem('logs:latest');

      if (expo && expo.length) {
        setStoredTokens({
          expo,
          device
        });
      }
      if (logEntry && logEntry.length) {
        setLogEntry(logEntry);
      }
    },
    reset: async () => {
      AsyncStorage.removeItem('tokens:expo');
      AsyncStorage.removeItem('logs:latest');
      setStoredTokens(null);
      setLogEntry(null);
      setView('home');
    },

    goTo: (view) => {
      setView(view);
    },

    registerTokens: async (tokens) => {
      await AsyncStorage.setItem('tokens:expo', tokens.expo ?? "");
      await AsyncStorage.setItem('tokens:device', tokens.device ?? "");
      setStoredTokens(tokens);
      setView('settings');
    },

    receiveNotification: async (event) => {
      const logEntry = JSON.stringify(event);
      await AsyncStorage.setItem('logs:latest', logEntry);
      setLogEntry(logEntry);
      setView('logs');
    }
  };
};