import React from 'react';
import {StatusBar} from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

import MainButton from '@components/MainButton';
import {COLORS} from '../constants/colors';

const ForgotPasswordScreen = ({navigation}) => {
  const initialValues = {email: ''};
  const validationSchema = Yup.object({
    email: Yup.string().email(),
  });

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm(initialValues);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={styles.containerInner}>
        <View>
          <Text style={styles.titleText}>Forgot Password</Text>
          <Text style={styles.description}>
            Enter the email address associated with your account and we'll email
            you a secure link to reset your password.If you do not receive an
            email, please try resubmitting your request or contacting customer
            service at
            {/* <TouchableOpacity
            onPress={() => null}
            style={{backgroundColor: 'red'}}> */}
            <Text
              style={{color: COLORS.primary}}
              onPress={() => console.log('support!!!')}>
              {' '}
              support@goldx.com{' '}
            </Text>
            {/* </TouchableOpacity> */}
            for assistance
          </Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {() => (
            <View style={{marginBottom: 150}}>
              <Input
                label="Email"
                labelStyle={styles.labelStyle}
                placeholder="Your email"
                placeholderTextColor={COLORS.silver}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={{paddingHorizontal: 0}}
              />
            </View>
          )}
        </Formik>

        <MainButton title="Reset Password" onPress={handleSubmit} />
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
    justifyContent: 'space-around',
  },
  titleText: {
    color: COLORS.titlesText,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 10,
    paddingTop: 100,
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
  labelStyle: {
    fontFamily: 'OpenSans-Regular',
    color: '#828282',
    fontWeight: '200',
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 6,
    height: 48,
  },
});

export default ForgotPasswordScreen;
