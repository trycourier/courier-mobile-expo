import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import Glyph from '../components/glyph';
import ShareIcon from '../components/share';

interface ITokenRowProps {
  title: string;
  token: string;
};

const TokenRow: React.FunctionComponent<ITokenRowProps> = ({ title, token }) => {
  return (
    <View style={styles.tokenRow}>
      <Text style={styles.h2}>{title}</Text>
      <Text style={styles.token}>{token}</Text>
      <ShareIcon background='light' text={token} style={styles.shareIcon} />
    </View>
  );
}

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
        <TokenRow title="Expo" token={state.expoToken} />
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
    fontSize: 20,
    color: '#AD9DD1'
  },

  tokenRow: {
    marginTop: 35,
  },
  h2: {
    fontSize: 20,
    color: '#9D3789'
  },
  token: {
    fontSize: 16,
    color: '#344563'
  },
  shareIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 99
  }
});

export default Settings;
