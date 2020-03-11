import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import heroSrc from '../assets/home/bg.png';

interface IHeroProps {
  isFooterEnabled: boolean;
}

const Hero: React.FunctionComponent<IHeroProps> = ({ isFooterEnabled }) => {
  return (
    <View style={isFooterEnabled ? styles.viewWithFooter : styles.view}>
      <Image source={heroSrc} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    bottom: -50,
    left: -10
  },
  viewWithFooter: {
    position: 'absolute',
    bottom: 20,
    left: -10
  },
  image: {
  }, 
});

export default Hero;
