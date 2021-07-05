import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStack from './navigation/AuthStack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const App = () => {
  const auth = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth ? <BottomTabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
