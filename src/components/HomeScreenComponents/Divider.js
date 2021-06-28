import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'rgba(47, 128, 237, 0.3)',
    width: '88%',
    alignSelf: 'center',
  },
});

export default Divider;
