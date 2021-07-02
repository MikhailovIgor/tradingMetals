import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const App = () => {
  const auth = true;

  return (
    <NavigationContainer>
      {auth ? <BottomTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
