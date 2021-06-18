import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';

const MainButton = ({title, onPress}) => (
  <Button
    buttonStyle={styles.button}
    titleStyle={styles.title}
    title={title}
    onPress={onPress}
  />
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    width: 320,
    height: 48,
    marginTop: 20,
  },
  title: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
});

export default MainButton;
