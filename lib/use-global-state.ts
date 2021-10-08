import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export type GlobalStateViews = 'home' | 'settings' | 'logs';

interface registerExpoTokenInput {
  token: string;
}

export interface IGlobalState {
  view: GlobalStateViews;
  expoToken: string;
  logEntry: string;

  load: () => Promise<void>;
  reset: () => Promise<void>;

  goTo: (view: GlobalStateViews) => void;
  registerExpoToken: (input: registerExpoTokenInput) => Promise<void>;
  receiveNotification: (event: Notifications.Notification) => Promise<void>;
}

export default function (): IGlobalState {
  const [view, setView] = useState<GlobalStateViews>('home');
  const [expoToken, setExpoToken] = useState<string>();
  const [logEntry, setLogEntry] = useState<string>();

  return {
    view,
    expoToken,
    logEntry,

    load: async () => {
      const token = await AsyncStorage.getItem('tokens:expo');
      const logEntry = await AsyncStorage.getItem('logs:latest');

      if (token && token.length) {
        setExpoToken(token);
      }
      if (logEntry && logEntry.length) {
        setLogEntry(logEntry);
      }
    },
    reset: async () => {
      AsyncStorage.removeItem('tokens:expo');
      AsyncStorage.removeItem('logs:latest');
      setExpoToken(null);
      setLogEntry(null);
      setView('home');
    },

    goTo: (view) => {
      setView(view);
    },

    registerExpoToken: async (input) => {
      const { token } = input;
      await AsyncStorage.setItem('tokens:expo', token);
      setExpoToken(token);
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