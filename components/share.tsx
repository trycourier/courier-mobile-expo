import React from 'react';
import { Image, Share, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import shareDarkBgSrc from '../assets/share/share-dark-bg.png';
import shareLightBgSrc from '../assets/share/share-light-bg.png';

export type TShareIconBackground = 'light' | 'dark';

export interface IShareIconProps {
  background: TShareIconBackground;
  text: string;
  style?: StyleProp<ViewStyle>
};

const ShareIcon: React.FunctionComponent<IShareIconProps> = ({ background, text, style }) => {
  const onShare = () => {
    Share.share({
      message: text,
      url: undefined
    });
  };

  return (
    <View style={style || styles.view}>
      <TouchableOpacity onPress={onShare}>
        {background === 'light' ? <Image source={shareLightBgSrc} style={styles.image} /> : <Image source={shareDarkBgSrc} style={styles.image} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
  },
  image: {
  }, 
});

export default ShareIcon;
