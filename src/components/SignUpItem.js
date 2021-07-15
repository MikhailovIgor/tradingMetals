import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet, ImageStore} from 'react-native';

import {COLORS} from '../constants/colors';

const SignUpItem = ({item, handleSubmit}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>
          {item.title}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <View handleSubmit={handleSubmit} style={styles.componentContainer}>
          {item.component}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 87,
    width: '100%',
    justifyContent: 'center',
  },
  componentContainer: {
    backgroundColor: 'tomato',
    width: '100%',
    paddingTop: 60,
  },
  titleText: {
    color: COLORS.titlesText,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 10,
  },
  description: {
    color: COLORS.ordinaryText,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
});

export default SignUpItem;
