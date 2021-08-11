import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import {Colors} from '../../constants';

const MobileVerStep = () => {
  return (
    <Input
      label="Mobile Number"
      labelStyle={styles.labelStyle}
      placeholder="Enter your US phone number"
      placeholderTextColor={Colors.grey}
      inputContainerStyle={styles.inputContainerStyle}
      // onChangeText={handleChange('email')}
      // onBlur={handleBlur('email')}
      // value={values.email}
      // errorStyle={{color: 'red'}}
      containerStyle={styles.containerStyle}
    />
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

export default MobileVerStep;
