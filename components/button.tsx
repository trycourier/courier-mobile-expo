import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import buttonSrc from '../assets/button/button.png';

const Button: React.FunctionComponent = ({
  children
}) => {
  return (
    <View style={styles.button}>
      <Image source={buttonSrc} />
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    position: 'absolute',
    top: 29,
    left: 0,
    textAlign: 'center',
    width: '100%'
  }, 
});

export default Button;
