import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';

const VerCompleteScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          flex: 0.6,
          justifyContent: 'space-around',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.title}>Complete</Text>
        </View>
        <Icon name="check" color="#2f80ed" size={80} />
      </View>
      <Button
        buttonStyle={styles.button}
        title="Next"
        onPress={() => console.log('verification complete')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 32,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 45,
    width: 300,
  },
});

export default VerCompleteScreen;
