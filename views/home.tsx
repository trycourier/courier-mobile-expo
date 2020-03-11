import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import Button from '../components/button';
import registerPushNotifications, { SIMULATOR } from '../lib/register-push-notifications';

import bgSrc from '../assets/home/home.png';

interface HomeProps {
  state: IGlobalState;
}

const Home: React.FunctionComponent<HomeProps> = ({ state }) => {
  const onPress = async () => {
    try {
      const { token } = await registerPushNotifications();
      state.registerToken(token);
      alert(`Token: ${token}`);
    } catch (err) {
      if (err.message === SIMULATOR) {
        state.registerToken(SIMULATOR);
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <ImageBackground source={bgSrc} style={styles.full}>
      <View style={styles.container}>
        <Text style={styles.text}>First, we need to enable permissions</Text>

        <TouchableOpacity onPress={onPress}>
          <Button>Enable Push Notifications</Button>
        </TouchableOpacity>
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

export default Home;
