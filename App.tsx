import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Notifications from 'expo-notifications';

import useGlobalState from './lib/use-global-state';
import delaySplashScreen from './lib/delay-splash-screen';
import Home from './views/home';
import Logs from './views/logs';
import Settings from './views/settings';
import Footer from './components/footer';

delaySplashScreen();

const App: React.FunctionComponent = () => {
  const state = useGlobalState();

  // https://github.com/expo/fyi/blob/master/LegacyNotifications-to-ExpoNotifications.md#legacynotificationsaddlistener
  useEffect(() => {
    const listener = Notifications.addNotificationReceivedListener(state.receiveNotification);
    state.load();

    return () => {
      listener.remove();
    }
  }, []);

  const ActiveView = () => {
    switch (state.view) {
      case 'home':
        return (
          <Home state={state} />
        );
      case 'logs':
        return (
          <Logs state={state} />
        );
      case 'settings':
        return (
          <Settings state={state} />
        );
    }
  }

  return (
    <View>
      <ActiveView />
      {state.expoToken && state.expoToken.length ? <Footer state={state} /> : null}
    </View>
  );
};

export default App;
