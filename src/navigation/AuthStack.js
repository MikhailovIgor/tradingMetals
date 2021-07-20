import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreenV2';
import VerCompleteScreen from '../screens/VerCompleteScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="onBoard">
    <Stack.Screen
      name="onBoard"
      component={OnboardingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="forgotPassword"
      component={ForgotPasswordScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="signUp"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="verificationComplete"
      component={VerCompleteScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;
