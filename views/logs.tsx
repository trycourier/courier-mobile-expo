import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import ShareIcon from '../components/share';

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
  const log = format(state.logEntry);

  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="light-content" />
      <ShareIcon background='dark' text={log} style={styles.shareIcon} />
      <Text style={styles.h1}>Most Recent Notification</Text>
      <Text style={styles.json}>{log}</Text>
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

  shareIcon: {
    position: 'absolute',
    top: 45,
    right: 10,
    zIndex: 99
  },

  h1: {
    marginLeft: 35,
    marginTop: 60,
    fontSize: 20,
    color: '#AD9DD1'
  },
  json: {
    marginHorizontal: 35,
    marginTop: 20,
    color: '#fff',
    fontSize: 22,
    fontFamily: monospace,
    zIndex: 1
  }
});

export default Logs;
