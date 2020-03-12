import React from 'react';
import { Platform, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';

const FAKE_JSON = {
  origin: 'selected',
  data: {
    example: 'test1',
    isCool: true,
    someNum: 42
  },
  remote: true
};

interface ILogsProps {
  state: IGlobalState;
}

const format = (text: string): string => {
  const json = text ? JSON.parse(text) : FAKE_JSON; // TODO
  return JSON.stringify(json, null, '  ');
}

const Logs: React.FunctionComponent<ILogsProps> = ({ state }) => {
  const shareLog = (log: string) => async () => {
    Share.share({
      message: log,
      url: undefined
    });
  };

  const log = format(state.logEntry);

  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={shareLog(log)}>
        <Text style={styles.text}>{log}</Text>
      </TouchableOpacity>
    </View>
  );
}

const monospace = Platform.OS === 'ios' ? 'Courier' : 'monospace';
const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: '#24324B',
    width: '100%',
    height: '100%'
  },

  text: {
    margin: 35,
    marginTop: 70,
    color: '#fff',
    fontSize: 22,
    fontFamily: monospace
  }
});

export default Logs;
