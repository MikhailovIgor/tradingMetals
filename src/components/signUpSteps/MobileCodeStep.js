import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MobileCodeStep = () => {
  return (
    <View>
      <Text style={styles.title}>{'Mobile\nVerification'}</Text>
      <Text style={styles.description}>
        Check a message with a verification code that we sent
      </Text>
      <Text>ENTER THE CODE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  description: {},
});

export default MobileCodeStep;
