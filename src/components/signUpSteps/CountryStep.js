import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import {COLORS} from '../../constants/colors';

const CountryStep = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [countryName, setCountryName] = useState('United States');
  // const [callingCode, setCallingCode] = useState('1');

  const onSelect = country => {
    console.log('country is: ', country);
    const {cca2, callingCode} = country;
    setCountryCode(cca2);
    setCountryName(country.name);
    // setCallingCode(callingCode[0]);
  };

  return (
    <View style={styles.container}>
      <View
        style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
        <CountryPicker
          withFilter
          countryCode={countryCode}
          withFlag
          withAlphaFilter={true}
          withCurrencyButton={false}
          withCallingCode
          onSelect={onSelect}
          // visible
        />
      </View>
      <View style={{width: '80%', justifyContent: 'center'}}>
        <Text
          style={{fontSize: 18, fontFamily: 'OpenSans-Regular', color: '#333'}}>
          {countryName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 5,
    width: 320,
    height: 48,
  },
});

export default CountryStep;
