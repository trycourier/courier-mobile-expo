import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';

interface ILogsProps {
  state: IGlobalState;
}

const Logs: React.FunctionComponent<ILogsProps> = ({ state }) => {
  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: '#24324B',
    width: '100%',
    height: '100%'
  }
});

export default Logs;
