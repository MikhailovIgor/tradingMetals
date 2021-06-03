import React from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
      <View>
        <Text style={styles.welcomeText}>Welcome to GoldX</Text>
      </View>
      <View>
        <Button
          type="solid"
          title="Log in"
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
          onPress={() => null}
        />
        <Button
          type="outline"
          title="Create account"
          buttonStyle={styles.createAccButton}
          titleStyle={styles.createAccText}
          onPress={() => null}
        />
      </View>
      <View>
        <Text style={styles.nextLoginTitle}>Or Login with</Text>
        <CustomButton imagePath={require('../assets/images/provident.png')} />
      </View>
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
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
  },
  loginButton: {
    backgroundColor: '#2f80ed',
    borderRadius: 5,
    width: 320,
    height: 46,
  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
  createAccButton: {
    backgroundColor: '#e5e5e5',
    borderColor: '#2f80ed',
    borderWidth: 1,
    borderRadius: 5,
    width: 320,
    height: 46,
  },
  createAccText: {
    color: '#2f80ed',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
  nextLoginTitle: {
    color: '#333',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
};

export default WelcomeScreen;
