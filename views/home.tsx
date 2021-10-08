import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import Button from '../components/button';
import Glyph from '../components/glyph';
import Hero from '../components/hero';
import registerPushNotifications from '../lib/register-push-notifications';

interface IHomeProps {
  state: IGlobalState;
}

const EnablePushNotifications: React.FunctionComponent<IHomeProps> = ({ state }) => {
  const onPress = async () => {
    state.registerTokens(await registerPushNotifications());
  };

  return (
    <View style={styles.enablePushView}>
      <Text style={styles.enablePushText}>First, we need to enable permissions</Text>

      <TouchableOpacity onPress={onPress}>
        <Button>Enable Push Notifications</Button>
      </TouchableOpacity>
    </View>
  );
}

const Home: React.FunctionComponent<IHomeProps> = ({ state }) => {
  const hasToken = !!(state.expoToken && state.expoToken.length);
  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="dark-content" />
      <Hero isFooterEnabled={hasToken} />
      <Glyph />
      {hasToken ? null : <EnablePushNotifications state={state} />}
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%'
  },

  enablePushView: {
    marginTop: 175,
    alignItems: 'center'
  },

  enablePushText: {
    fontSize: 16,
    color: '#9D3789',
    marginBottom: 15
  }
});

export default Home;
