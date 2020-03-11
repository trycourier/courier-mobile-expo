import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IGlobalState, GlobalStateViews } from '../lib/use-global-state';

import navHomeSrc from '../assets/nav/home.png';
import navLogsSrc from '../assets/nav/logs.png';
import navSettingsSrc from '../assets/nav/settings.png';

interface IFooterProps {
  state: IGlobalState;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ state }) => {
  const goTo = (view: GlobalStateViews) => () => {
    state.goTo(view);
  };

  return (
    <View style={styles.footer}>
      <View style={state.view === 'settings' ? styles.barSettings : state.view === 'logs' ? styles.barLogs : styles.barHome} />
      <TouchableOpacity onPress={goTo('home')}>
        <Image source={navHomeSrc} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goTo('logs')}>
        <Image source={navLogsSrc} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goTo('settings')}>
        <Image source={navSettingsSrc} />
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
  },

  barHome: {
    width: 54,
    height: 4,
    backgroundColor: '#ad9ed1',
    position: 'absolute',
    top: 0,
    left: 63
  },

  barLogs: {
    width: 54,
    height: 4,
    backgroundColor: '#ad9ed1',
    position: 'absolute',
    top: 0,
    left: 179
  },

  barSettings: {
    width: 54,
    height: 4,
    backgroundColor: '#ad9ed1',
    position: 'absolute',
    top: 0,
    left: 295
  }
});

export default Footer;
