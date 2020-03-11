import React from 'react';
import useGlobalState from './lib/use-global-state';
import delaySplashScreen from './lib/delay-splash-screen';
import Home from './views/home';
import Logs from './views/logs';
import Settings from './views/settings';

delaySplashScreen();

const App: React.FunctionComponent = () => {
  const state = useGlobalState();
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
};

export default App;
