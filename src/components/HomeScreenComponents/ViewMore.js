import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {ArrowRight} from '../svgComponents';
import {COLORS} from '../../constants/colors';

const ViewMore = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>View More</Text>
      <View style={{justifyContent: 'center'}}>
        <ArrowRight color={COLORS.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '42%',
  },
  text: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    paddingBottom: 2,
  },
});

export default ViewMore;
