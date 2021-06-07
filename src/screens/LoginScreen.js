import React from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
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
          <View>
            <Text style={styles.welcomeText}>Log in</Text>
          </View>
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
        }) => <Input label="First Name" placeholder="Your First Name" />}
      </Formik>

      <View style={styles.mainButtons}>
        <Button
          type="solid"
          title="Log in"
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
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

export default LoginScreen;
