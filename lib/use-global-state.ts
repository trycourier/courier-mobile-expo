import { useState } from 'react';

export type GlobalStateViews = 'home' | 'settings' | 'logs';

interface registerExpoTokenInput {
  token: string;
}

export interface IGlobalState {
  view: GlobalStateViews;
  expoToken: string;
  logEntry: string;

  goTo: (view: GlobalStateViews) => void;
  registerExpoToken: (input: registerExpoTokenInput) => void;
  receiveNotification: (notification: object) => void;
}

export default function (): IGlobalState {
  const [view, setView] = useState<GlobalStateViews>('home');
  const [expoToken, setExpoToken] = useState<string>();
  const [logEntry, setLogEntry] = useState<string>();

  return {
    view,
    expoToken,
    logEntry,

    goTo: (view) => {
      setView(view);
    },

    registerExpoToken: (input) => {
      setExpoToken(input.token);
      setView('settings');
    },

    receiveNotification: (notif) => {
      const logEntry = JSON.stringify(notif);
      setLogEntry(logEntry);
      setView('logs');
    }
  };
};