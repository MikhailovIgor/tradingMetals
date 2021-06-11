import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PasswordStep = () => {
  return (
    <View>
      <Text style={styles.title}>{'Set up your\npassword'}</Text>
      <Text style={styles.description}>
        Think about strong password that includes upper and lower characters,
        special characters and numbers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default PasswordStep;
