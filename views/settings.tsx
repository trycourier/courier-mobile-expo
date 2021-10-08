import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import Button from '../components/button';
import Glyph from '../components/glyph';
import ShareIcon from '../components/share';

interface ITokenRowProps {
  title: string;
  token: string;
};

const PUSH_SERVICE = Platform.OS === 'ios' ? 'APN' : Platform.OS === 'android' ? 'FCM' : 'Device';

const parseToken = (token: string): string => {
  if (!token || !token.length || !token.startsWith('ExponentPushToken[')) {
    return token;
  }
  const REGEX = /ExponentPushToken\[(.*)\]/;
  return token.match(REGEX)[1];
}

const TokenRow: React.FunctionComponent<ITokenRowProps> = ({ title, token }) => {
  return (
    <View style={styles.tokenRow}>
      <Text style={styles.h2}>{title}</Text>
      <Text style={styles.token}>{parseToken(token)}</Text>
      <ShareIcon background='light' text={token} style={styles.shareIcon} />
    </View>
  );
}

interface ISettingsProps {
  state: IGlobalState;
}

const Settings: React.FunctionComponent<ISettingsProps> = ({ state }) => {
  const reset = () => {
    state.reset();
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="dark-content" />
      <Glyph />
      <View style={styles.text}>
        <Text style={styles.h1}>Push Tokens</Text>
        <TokenRow title="Expo" token={state.expoToken} />
        <TokenRow title={PUSH_SERVICE} token={state.deviceToken} />
      </View>

      <View style={styles.resetView}>
        <TouchableOpacity onPress={reset}>
          <Button>Clear Storage</Button>
        </TouchableOpacity>
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
    right: -10,
    zIndex: 99
  },

  resetView: {
    marginTop: 175,
    alignItems: 'center'
  },
});

export default Settings;
