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
    flex: 0.4,
    marginTop: 20,
    alignItems: 'center',
  },
  customButtonsTitle: {
    color: '#333',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
});

export default CustomButtonsBox;
