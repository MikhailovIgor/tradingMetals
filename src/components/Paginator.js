import React from 'react';
import {StyleSheet, View} from 'react-native';

import {COLORS} from '../constants/colors';

function Paginator({data, currentSlide}) {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const dashBackgroundColor =
          i === currentSlide ? COLORS.primary : '#C8D4E5';
        return (
          <View
            style={[styles.dash, {backgroundColor: dashBackgroundColor}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 10,
  },
  dash: {
    height: 4,
    width: 28,
    borderRadius: 2,
    margin: 3,
  },
  activeDash: {
    height: 4,
    width: 28,
    borderRadius: 2,
    margin: 3,
  },
});

export default Paginator;
