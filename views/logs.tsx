import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';

import bgSrc from '../assets/home/home.png';

interface LogsProps {
  state: IGlobalState;
}

const Logs: React.FunctionComponent<LogsProps> = ({ state }) => {
  return (
    <ImageBackground source={bgSrc} style={styles.full}>
      <View style={styles.container}>
        <Text style={styles.text}>Logs</Text>
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

export default Logs;
