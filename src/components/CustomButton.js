import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomButton = ({imagePath, width, height}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log(width, height)}>
    <Image source={imagePath} style={{width: width, height: height}} />
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
    height: 42,
    marginTop: 14,
  },
});

export default CustomButton;
