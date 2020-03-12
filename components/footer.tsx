import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IGlobalState, GlobalStateViews } from '../lib/use-global-state';

import navHomeSrc from '../assets/nav/home.png';
import navLogsSrc from '../assets/nav/logs.png';
import navSettingsSrc from '../assets/nav/settings.png';
import navHomeOnSrc from '../assets/nav/home-on.png';
import navLogsOnSrc from '../assets/nav/logs-on.png';
import navSettingsOnSrc from '../assets/nav/settings-on.png';

interface IFooterProps {
  state: IGlobalState;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ state }) => {
  const goTo = (view: GlobalStateViews) => () => {
    state.goTo(view);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={goTo('home')}>
        {state.view === 'home' ? <Image source={navHomeOnSrc} /> : <Image source={navHomeSrc} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={goTo('logs')}>
        {state.view === 'logs' ? <Image source={navLogsOnSrc} /> : <Image source={navLogsSrc} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={goTo('settings')}>
        {state.view === 'settings' ? <Image source={navSettingsOnSrc} /> : <Image source={navSettingsSrc} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default Footer;
