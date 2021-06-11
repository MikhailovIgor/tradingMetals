import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

import CustomButtonsBox from '../components/CustomButtonsBox';
import {COLORS} from '../constants/colors';

const LoginScreen = () => {
  const initialValues = {firstName: '', lastName: ''};
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('first name is required'),
    lastName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('last name is required'),
  });

  const handleSubmit = (values, {resetForm}) => {
    console.log('users name is:', values);
    resetForm(initialValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.headerText}>Log in</Text>
        </View>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          resetForm,
          values,
          touched,
          errors,
        }) => (
          <KeyboardAvoidingView behavior="height" style={styles.inputsBox}>
            <Input
              label="First Name"
              placeholder="Your First Name"
              inputContainerStyle={styles.inputContainer}
            />
            <Input
              label="Last Name"
              placeholder="Your Last Name"
              inputContainerStyle={styles.inputContainer}
            />
            <Button
              type="solid"
              title="Log in"
              buttonStyle={styles.loginButton}
              titleStyle={styles.loginButtonText}
              onPress={() => null}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>

      <View style={styles.mainButtons}></View>

      <CustomButtonsBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleContainer: {
    flex: 0.25,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleBox: {
    marginLeft: '7%',
    height: '55%',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  inputsBox: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 6,
    width: 320,
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    width: 320,
    height: 50,
    marginTop: 1,
  },
  loginButtonText: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
});

export default LoginScreen;
