import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
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
      <View style={styles.containerInner}>

        <View style={styles.containerHeader}>
          <Image source={require('../assets/images/goldX.png')} />
            <Text style={styles.headerText}>{`Welcome\nto GoldX`}</Text>
        </View>

        <View>
          <MainButton
            title="Log in"
            onPress={() => navigation.navigate('login')}
          />
          <Button
            type="outline"
            title="Create New Account"
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
            uncheckedColor={COLORS.primary}
            checkedColor={COLORS.primary}
          />
          <View style={styles.agreementInfo}>
            <Text style={styles.agreementText}>
              By creating this account, you agree to our <Text style={styles.redirectText} onPress={() => console.log("User Agreement")}>User Agreement</Text> and <Text style={styles.redirectText} onPress={() => console.log("Privacy Policy")}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>

        <CustomButtonsBox />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white, 
  },
  containerInner: {
    height: '100%',
    paddingHorizontal: 38,
    justifyContent: 'center',
  },
  containerHeader: {
    paddingBottom: 40,
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    color: COLORS.titlesText,
    lineHeight: 44, 
    paddingVertical: 10,
  },
  createAccButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    height: 46,
    marginTop: 20,
  },
  createAccText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  agreementContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  agreementInfo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  agreementText: {
    color: '#333',
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    lineHeight: 22,
  },
  redirectText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  checkBoxContainer: {
    padding: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  }
});

export default WelcomeScreen;
