import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';

const MainButton = ({title, onPress, width}) => (
  <Button
    buttonStyle={[styles.button, {width: width}]}
    titleStyle={styles.title}
    title={title}
    onPress={onPress}
  />
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 48,
    marginTop: 20,
  },
  title: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
});

export default MainButton;
