import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

const SignUpItem = ({item, handleSubmit}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View handleSubmit={handleSubmit} style={styles.componentContainer}>
        {item.component}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  textContainer: {
    width: '86%',
    height: '36%',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  titleText: {
    color: COLORS.black,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    width: '80%',
  },
  componentContainer: {
    height: '50%',
    width: '86%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default SignUpItem;
