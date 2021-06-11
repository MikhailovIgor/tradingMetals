import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NameStep = () => {
  return (
    <View>
      <Text style={styles.title}>{'Your Name\nand Last Name'}</Text>
      <Text style={styles.description}>
        Please enter your legal name that will be associated with your account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default NameStep;
