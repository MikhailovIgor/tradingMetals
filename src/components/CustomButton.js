import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomButton = ({imagePath}) => (
  <TouchableOpacity style={styles.container} onPress={() => null}>
    <Image source={imagePath} style={styles.logoStyle} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#becbdf',
    borderRadius: 5,
    borderWidth: 1,
    width: 320,
    height: 40,
  },
  logoStyle: {
    width: 110,
    height: 26,
  },
});

export default CustomButton;
