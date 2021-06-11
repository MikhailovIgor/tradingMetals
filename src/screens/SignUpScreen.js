import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.button}>Sign Up Screen</Text>
      <Button title="Continue" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 45,
    width: 300,
    marginTop: 20,
  },
});

export default SignUpScreen;
