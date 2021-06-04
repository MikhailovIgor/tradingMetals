import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';

import CustomButton from '../components/CustomButton';
import {COLORS} from '../constants/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Image source={require('../assets/images/goldX.png')} />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.welcomeText}>to GoldX</Text>
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

      <View style={styles.customButtonsBox}>
        <Text style={styles.customButtonsTitle}>Or Login with</Text>
        <CustomButton
          imagePath={require('../assets/images/jimBullion.png')}
          width={122}
          height={22}
        />
        <CustomButton
          imagePath={require('../assets/images/silverLogo.png')}
          width={122}
          height={22}
        />
        <CustomButton
          imagePath={require('../assets/images/provident.png')}
          width={122}
          height={26}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
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
  customButtonsBox: {
    flex: 0.4,
    marginTop: 20,
    alignItems: 'center',
  },
  welcomeText: {
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
  customButtonsTitle: {
    color: '#333',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
});

export default WelcomeScreen;
