import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import MainButton from '../components/MainButton';
import {COLORS} from '../constants/colors';

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
        <Icon name="check" color="#2f80ed" size={80} />
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
    color: COLORS.black,
  },
});

export default VerCompleteScreen;
