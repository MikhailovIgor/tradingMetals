import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from './CustomButton';

const CustomButtonsBox = () => (
  <View style={styles.customButtonsBox}>
    <Text style={styles.customButtonsTitle}>Or Login with</Text>
    <CustomButton
      imagePath={require('../assets/images/jimBullion.png')}
      width={122}
      height={22}
    />
    <CustomButton
      imagePath={require('../assets/images/silverLogo.png')}
      width={118}
      height={22}
    />
    <CustomButton
      imagePath={require('../assets/images/provident.png')}
      width={122}
      height={26}
    />
  </View>
);

const styles = StyleSheet.create({
  customButtonsBox: {
    alignItems: 'center',
    paddingTop: 32,
  },
  customButtonsTitle: {
    color: '#333',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 24,
  },
});

export default CustomButtonsBox;
