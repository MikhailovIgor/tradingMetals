import React from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
      <View>
        <Text style={styles.welcomeText}>Welcome to GoldX</Text>
        <IconEntypo name="500px" size={50} color="#000" />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    // fontFamily: 'OpenSans',
    fontSize: 36,
  },
};

export default WelcomeScreen;
