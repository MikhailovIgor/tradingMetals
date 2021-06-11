import React from 'react';
import  { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import COLORS from '../constants/colors';

const OnboardingFooter = ({ onPress }) => (
  <View style={styles.container}>
    <Button
      solid
      title='Next'
      buttonStyle={styles.button}
      titleStyle={color: COLORS.white}
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 45,
    width: 320,
    borderRadius: 5,
  },
});

export default OnboardingFooter;
