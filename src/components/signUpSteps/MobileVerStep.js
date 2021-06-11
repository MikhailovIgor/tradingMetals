import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MobileVerStep = () => {
  return (
    <View>
      <Text style={styles.title}>{'Mobile\nVerification'}</Text>
      <Text style={styles.description}>
        In order to protect the security of your account, we will send you a ONE
        time SMS message with a verification code to your number
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default MobileVerStep;
