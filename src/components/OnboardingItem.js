import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      {/* <View style={{flex: 1, paddingHorizontal: 37, justifyContent: "center"}}> */}
      <View style={{flex: 0.35, paddingHorizontal: 37}}>
        <Image source={require('../assets/images/goldX-white.png')} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {/* <View style={{flex: 1}}> */}
      <View style={{flex: 0.65}}>
        <Image source={item.image} style={{bottom: -50}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
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
