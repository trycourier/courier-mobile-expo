import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import glyphSrc from '../assets/glyph/glyph.png';

const Glyph: React.FunctionComponent = () => {
  return (
    <View style={styles.view}>
      <Image source={glyphSrc} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    alignItems: 'center'
  },
  image: {
  }, 
});

export default Glyph;
