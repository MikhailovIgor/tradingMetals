import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={{height: '35%', width: '86%'}}>
        <Image source={require('../assets/images/goldX-white.png')} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={{height: '65%'}}>
        <Image source={item.image} style={{bottom: -50}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 32,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '100',
    fontSize: 16,
    // marginBottom: 15,
  },
});

export default OnboardingItem;
