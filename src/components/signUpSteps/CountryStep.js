import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CountryStep = () => {
  return (
    <View>
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.description}>Choose your counrty residence</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default CountryStep;
