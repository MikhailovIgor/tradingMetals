import React from 'react';
import {
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomButtonsBox from '@components/CustomButtonsBox';
import MainButton from '@components/MainButton';
import { COLORS } from '@constants/colors';

const LoginScreen = () => {

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email(),
    password: Yup.string()
      .min(9, 'at least 9 Characters')
      .max(20, 'must be 20 or less')
      .required('password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm(initialValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.containerInner}>

        <Text style={styles.headerText}>Log in</Text>

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
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.inputsBox}
            >
              <View style={styles.inputsBox}>
                <Input
                  label='Email'
                  labelStyle={styles.labelStyle}
                  placeholder="Your email"
                  placeholderTextColor={COLORS.silver}
                  inputContainerStyle={styles.inputContainerStyle}
                  containerStyle={{paddingHorizontal: 0}}
                />
                <Input
                  label='Password'
                  labelStyle={styles.labelStyle}
                  placeholder="Your password"
                  placeholderTextColor={COLORS.silver}
                  inputContainerStyle={styles.inputContainerStyle}
                  containerStyle={{paddingHorizontal: 0}}
                />
                <TouchableOpacity onPress={() => console.log('forgot password')}>
                  <Text style={styles.redirectText}>Forgot your password?</Text>
                </TouchableOpacity>
                <MainButton title="Log in" onPress={() => null} />
              </View>

            </KeyboardAvoidingView>
          )}
        </Formik>

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
  inputsBox: {
    width: '100%',
    paddingTop: 20,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 6,
    height: 48,
  },
  titleContainer: {
    width: '100%',
    
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
  },
  redirectText: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginBottom: 10
  },
  labelStyle: {
    fontFamily: 'OpenSans-Regular',
    color: '#828282',
    fontWeight: '200'

  },
});

export default LoginScreen;
