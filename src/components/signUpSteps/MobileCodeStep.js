import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const enterTheCode = 'enter the code';

const MobileCodeStep = () => {
  return (
    <View>
      <Text style={styles.codeText}>{enterTheCode.toUpperCase()}</Text>
      <View
        style={{
          height: 2,
          backgroundColor: COLORS.grey,
          marginTop: 70,
          width: 280,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text
          style={{
            color: COLORS.grey,
            fontFamily: 'OpenSans-Regular',
            fontSize: 16,
          }}>
          Didn't get the code?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: 'OpenSans-Regular',
              fontSize: 16,
              paddingLeft: 5,
            }}>
            Send again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: '#050f19',
  },
});

export default MobileCodeStep;
