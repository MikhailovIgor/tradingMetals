import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';

import {Colors} from '../constants';

const SignUpItem = ({item, handleSubmit}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View handleSubmit={handleSubmit} style={styles.componentContainer}>
        {item.component}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  componentContainer: {
    backgroundColor: 'tomato',
    width: '100%',
    paddingTop: 60,
  },
  titleText: {
    color: Colors.titleText,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 36,
    lineHeight: 44,
    marginBottom: 10,
  },
  description: {
    color: Colors.contentText,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 20,
  },
});

export default SignUpItem;
