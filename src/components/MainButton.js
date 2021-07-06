import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import {COLORS} from '../constants/colors';
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const MainButton = ({title, onPress, width, ...props}) => (
  <Button
    containerStyle={styles.containerStyle}
    buttonStyle={[styles.button, {width: width}]}
    titleStyle={styles.title}
    title={title}
    onPress={onPress}
    {...props}
  />
);

MainButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

MainButton.defaultProps = {
  title: 'Main Button',
  onPress: () => {console.log('Main Button click')}
};


const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 48,
    marginTop: 20,
  },
  title: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
});

export default MainButton;
