import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.textContainer}>
        <Image source={require('../assets/images/goldX-white.png')} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  textContainer: {
    flex: 0.4, 
    paddingHorizontal: 37,
    // flex: 1, paddingHorizontal: 37, justifyContent: "center",
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
  },
  imageContainer: {
    flex: 0.65,
    // flex: 1, 
  },
  imageStyle: {
    bottom: -50
  }
});

export default OnboardingItem;
