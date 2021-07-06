import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

import CustomButtonsBox from '@components/CustomButtonsBox';
import MainButton from '@components/MainButton';
import { COLORS } from '@constants/colors';

const WelcomeScreen = ({ navigation }) => {

  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.container2}>

        <View style={styles.titleContainer}>
          <Image source={require('../assets/images/goldX.png')} />
          <View style={styles.titleBox}>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.headerText}>to GoldX</Text>
          </View>
        </View>

        <View style={styles.mainButtonsContainer}>
          <MainButton
            title="Log in"
            onPress={() => navigation.navigate('login')}
          />
          <Button
            type="outline"
            title="Create New Account"
            containerStyle={{ width: '100%' }}
            buttonStyle={styles.createAccButton}
            titleStyle={styles.createAccText}
            onPress={() => navigation.navigate('signUp')}
          />
        </View>

        <View style={styles.agreementContainer}>
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
              containerStyle={styles.checkBoxContainer}
            />
          <View style={styles.agreementInfo}>
            <Text style={styles.agreementText}>
              By creating this account, you agree to our
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => console.log('navigate to UserAgreement page')}>
                <Text style={styles.redirectText}>
                  User Agreement
                </Text>
              </TouchableOpacity>
              <Text style={styles.agreementText}> and </Text>
              <TouchableOpacity onPress={() => console.log('navigate to privacyPolicy page')}>
                <Text style={styles.redirectText}>
                  Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <CustomButtonsBox />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
  container2: {
    paddingVertical: 50,
    height: '100%',
    paddingHorizontal: 38,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  titleBox: {
    paddingVertical: 10,
  },
  mainButtonsContainer: {
    width: '100%',
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
  },
  createAccButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    height: 46,
    marginTop: 22,
  },
  createAccText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  agreementContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingTop: 0,
    marginTop: -10,
  },
  agreementInfo: {
    flexDirection: 'column',
    marginLeft: -17,
  },
  agreementText: {
    color: '#333',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
  },
  redirectText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  checkBoxContainer: {
    paddingLeft: 0,
    paddingTop: 0,
    marginLeft: 0,
    marginTop: 0, 
    borderColor: 'blue',
  }
});

export default WelcomeScreen;
