import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

import CustomButtonsBox from '../components/CustomButtonsBox';
import {COLORS} from '../constants/colors';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Image source={require('../assets/images/goldX.png')} />
          <View>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.headerText}>to GoldX</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainButtons}>
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
      <CustomButtonsBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    flex: 0.35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    width: '80%',
    height: '50%',
    justifyContent: 'space-between',
  },
  mainButtons: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    width: 320,
    height: 46,
  },
  loginButtonText: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
  createAccButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    width: 320,
    height: 46,
    marginTop: 22,
  },
  createAccText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
});

export default WelcomeScreen;
