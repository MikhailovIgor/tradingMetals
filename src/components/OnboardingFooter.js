import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import Colors from '../constants';

const OnboardingFooter = ({onPress}) => (
  <View style={styles.container}>
    <Button
      solid
      title="Next"
      buttonStyle={styles.button}
      titleStyle={{color: Colors.white}}
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    height: 45,
    width: 320,
    borderRadius: 5,
  },
});

export default OnboardingFooter;
