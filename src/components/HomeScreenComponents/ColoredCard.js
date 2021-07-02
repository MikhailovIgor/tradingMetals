import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MainButton from '../MainButton';

const ColoredCard = ({
  title,
  description,
  backgroundColor,
  buttonTitle,
  onPress,
  buttonWidth,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <MainButton title={buttonTitle} onPress={onPress} width={buttonWidth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '88%',
    borderRadius: 5,
    marginTop: 30,
    padding: 26,
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
  },
  description: {
    color: '#333',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default ColoredCard;
