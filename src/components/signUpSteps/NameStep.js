import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

const NameStep = ({handleSubmit}) => {
  const initialValues = {firstName: '', lastName: ''};

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('first name is required'),
    lastName: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('first name is required'),
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
        <View>
          <Input
            label="First Name"
            labelStyle={styles.labelStyle}
            placeholder="Your First Name"
            placeholderTextColor="#95ACCA"
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
          <Input
            label="Last Name"
            labelStyle={styles.labelStyle}
            placeholder="Your Last Name"
            placeholderTextColor="#95ACCA"
            inputContainerStyle={styles.inputContainerStyle}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            errorStyle={{color: 'red'}}
            containerStyle={styles.containerStyle}
          />
        </View>
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
  },
  containerStyle: {
    height: 86,
  },
});

export default NameStep;
