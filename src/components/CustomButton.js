import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({imagePath, width, height, screenName}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screenName)}>
      <Image source={imagePath} style={{width: width, height: height}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#becbdf',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    height: 42,
    marginTop: 14,
  },
});

export default CustomButton;
