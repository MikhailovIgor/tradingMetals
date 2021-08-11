import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Colors} from '../../constants';
import MainButton from '../MainButton';

const EmailStep = ({handleSubmit}) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {email: ''};
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('The email is required'),
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
            label="Email"
            labelStyle={styles.labelStyle}
            placeholder="Your Email"
            placeholderTextColor={Colors.grey}
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
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
    width: 320,
    height: 47,
    paddingLeft: 10,
    // marginLeft: -10,
  },
  containerStyle: {
    height: 86,
    // backgroundColor: 'yellow',
  },
});

export default EmailStep;
