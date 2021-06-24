import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';

import CentralButtonBackground from './CentralButtonBackground';

const TabBarCentralButton = ({bgColor, onPress}) => (
  <View style={styles.container} pointerEvents="box-none">
    <CentralButtonBackground color={bgColor} style={styles.background} />
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={require('../../assets/images/tabCentralButton.png')} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',

    height: 56,
    width: 56,
    backgroundColor: 'transparent',
  },
});

export default TabBarCentralButton;
