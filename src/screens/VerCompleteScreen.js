import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainButton from '../components/MainButton';
import {Colors} from '../constants';

const VerCompleteScreen = ({navigation}) => {
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
        <Icon name="checkmark-circle" color={Colors.primary} size={90} />
      </View>
      <MainButton title="Next" onPress={() => null} />
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
    color: Colors.black,
  },
});

export default VerCompleteScreen;
