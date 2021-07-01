import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import Divider from './Divider';

const MetalPersonalInfoCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.info}>
        <Text
          style={{
            color: '#ffbd00',
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 18,
            fontWeight: '800',
          }}>
          Gold
        </Text>
        <Text
          style={{
            color: '#050f19',
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 18,
            fontWeight: '800',
          }}>
          $1,853.21 USD
        </Text>
      </View>

      <Divider width="88%" />

      <View style={styles.info}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.infoText}>Balance in Ounce</Text>
          <Text style={styles.infoNumbers}>0.24 oz</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.infoText}>Balance in USD</Text>
          <Text style={styles.infoNumbers}>$1,234</Text>
        </View>
      </View>

      <View style={styles.info}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.infoText}>% Change</Text>
          <Text style={styles.infoNumbers}>+ 0.12%</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.infoText}>$ Change</Text>
          <Text style={styles.infoNumbers}>+ $12.34</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '88%',
    height: 204,
    borderColor: 'rgba(47, 128, 237, 0.3)',
    borderWidth: 1.5,
    borderRadius: 5,
    marginTop: 20,
  },
  info: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  infoText: {
    color: '#828282',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  infoNumbers: {
    color: '#333',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});

export default MetalPersonalInfoCard;
