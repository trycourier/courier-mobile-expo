import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import Glyph from '../components/glyph';

interface ISettingsProps {
  state: IGlobalState;
}

const Settings: React.FunctionComponent<ISettingsProps> = ({ state }) => {
  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="dark-content" />
      <Glyph />
      <View style={styles.text}>
        <Text style={styles.h1}>Push Tokens</Text>
        <Text style={styles.h2}>Expo</Text>
        <Text style={styles.token}>{state.expoToken}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%'
  },

  text: {
    marginTop: 40,
    marginHorizontal: 35
  },

  h1: {
    marginBottom: 35,
    fontSize: 20,
    color: '#AD9DD1'
  },
  h2: {
    fontSize: 20,
    color: '#9D3789'
  },
  token: {
    fontSize: 16,
    color: '#344563'
  }
});

export default Settings;
