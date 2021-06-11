import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmailStep = () => {
  return (
    <View>
      <Text style={styles.title}>Your Email</Text>
      <Text style={styles.description}>
        Please enter your email address that you would like to use for GoldX
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default EmailStep;
