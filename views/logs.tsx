import React from 'react';
import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { IGlobalState } from '../lib/use-global-state';
import ShareIcon from '../components/share';

import watermarkSrc from '../assets/watermark/watermark.png';
import robotSrc from '../assets/robot/robot.png';

interface ILogsProps {
  state: IGlobalState;
}

const format = (text: string): string => {
  if (!text || !text.length) {
    return '';
  }

  const json = JSON.parse(text);
  return JSON.stringify(json, null, '  ');
}

const Logs: React.FunctionComponent<ILogsProps> = ({ state }) => {
  const log = format(state.logEntry);

  return (
    <View style={styles.fullscreen}>
      <StatusBar barStyle="light-content" />

      {log && log.length ? <View style={styles.absolute}>
        <ShareIcon background='dark' text={log} style={styles.shareIcon} />
        <Text style={styles.h1}>Most Recent Notification</Text>
        <Text style={styles.json}>{log}</Text>
      </View> : null}

      {!(log && log.length) ? <View style={styles.absolute}>
        <Image source={watermarkSrc} style={styles.watermark} resizeMode='cover' />
        <Text style={styles.robotSpeech}>Send a notification to your token via Courier and click it to see the log here!</Text>
        <Image source={robotSrc} style={styles.robot} />
      </View> : null}
    </View>
  );
};

const monospace = Platform.OS === 'ios' ? 'Courier' : 'monospace';
const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
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

  watermark: {
    position: 'absolute',
    height: '60%',
    top: 150,
    left: -15,
  },
  robotSpeech: {
    // backgroundColor: 'rgba(200, 0, 0, .5)',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 98,
    alignSelf: 'center',
    fontFamily: monospace,
    fontSize: 16,
    bottom: 233,
    width: '70%',
    minHeight: 63,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 13
  },
  robot: {
    position: 'absolute',
    bottom: 100,
    right: -10,
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
