import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

import TabBg from '../svg/TabBg';
// import centralTab from '../assets/svg/centralTab.svg';

const TabBarCustomButton = ({bgColor, onPress}) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Icon
        name="rocket"
        style={styles.buttonIcon}
      /> */}
        <Text style={styles.buttonIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -84,
    // top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TabBarCustomButton;
