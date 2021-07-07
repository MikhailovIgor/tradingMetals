import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import {COLORS} from '../constants/colors';

const MainButton = ({title, onPress, filled, buttonStyles, ...props}) => {
  const buttonStyle = [
    styles.button,
    filled ? styles.filled : null,
    buttonStyles
  ];
  const titleStyle = [
    styles.title, 
    filled ? styles.filledTitle : null
  ]

  return (
    <Button
      containerStyle={styles.containerStyle}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      title={title}
      onPress={onPress}
      {...props}
    />
  );
};

MainButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  filled: PropTypes.bool,
  buttonStyles: PropTypes.object
};

MainButton.defaultProps = {
  title: 'Main Button',
  onPress: () => {console.log('Main Button click')},
  filled: true,
};


const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
  },
  button: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
  },
  filled: {
    backgroundColor: COLORS.primary,
  },
  title: {
    color: COLORS.primary,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    lineHeight: 22,
  },
  filledTitle: {
    color: COLORS.white
  }
});

export default MainButton;
