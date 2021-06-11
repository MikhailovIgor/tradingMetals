import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';
import CountryStep from '../components/signUpSteps/CountryStep';
import NameStep from '../components/signUpSteps/NameStep';
import EmailStep from '../components/signUpSteps/EmailStep';
import PasswordStep from '../components/signUpSteps/PasswordStep';
import MobileVerStep from '../components/signUpSteps/MobileVerStep';
import MobileCodeStep from '../components/signUpSteps/MobileCodeStep';

const allSteps = [
  {name: 'step1', component: CountryStep},
  {name: 'step2', component: NameStep},
  {name: 'step3', component: EmailStep},
  {name: 'step4', component: PasswordStep},
  {name: 'step5', component: MobileVerStep},
  {name: 'step6', component: MobileCodeStep},
];

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CountryStep />
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
