import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';

import bgSrc from '../assets/home/bg-full.png';

interface SettingsProps {
  state: IGlobalState;
}

const Settings: React.FunctionComponent<SettingsProps> = ({ state }) => {
  return (
    <ImageBackground source={bgSrc} style={styles.full}>
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <Text style={styles.text}>Token: {state.expoToken}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    color: '#9D3789',
    marginBottom: 15
  }
});

export default Settings;
