import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Colors} from '../../constants';

const NameStep = ({handleSubmit}) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {password: '', confirmPassword: ''};
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(9, 'at least 9 characters')
      .max(20, 'must be 20 or less')
      .required('password is required'),
    confirmPassword: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('password is required'),
  });
  return (
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
        <>
          <Input
            label="Password"
            labelStyle={styles.labelStyle}
            placeholder="Enter password"
            placeholderTextColor={Colors.grey}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
          <Input
            label="Confirm Password"
            labelStyle={styles.labelStyle}
            placeholder="Confirm password"
            placeholderTextColor={Colors.grey}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.confirmPassword}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: '#828282',
    fontFamily: 'OpenSans-Regular',
    paddingBottom: 5,
  },
  inputContainerStyle: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 47,
    paddingLeft: 10,
  },
  containerStyle: {
    height: 86,
  },
});

export default NameStep;
