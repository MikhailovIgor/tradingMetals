import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({width}) => <View style={[styles.divider, {width: width}]} />;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'rgba(47, 128, 237, 0.3)',
    alignSelf: 'center',
  },
});

export default Divider;
