import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';

const App = () => {
  return <WelcomeScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
