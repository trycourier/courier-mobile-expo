import { useState } from 'react';

export type GlobalStateViews = 'home' | 'settings' | 'logs';

export interface IGlobalState {
  view: GlobalStateViews;
  expoToken: string;
  logEntry: string;

  goTo: (view: GlobalStateViews) => void;
  registerToken: (token: string) => void;
  addLogEntry: (logEntry: string) => void;
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

    registerToken: (token) => {
      setExpoToken(token);
      setView('settings');
    },

    addLogEntry: (logEntry) => {
      setLogEntry(logEntry);
      setView('logs');
    }
  };
};