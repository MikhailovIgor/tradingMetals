import React from 'react';
import {ScrollView, StatusBar, Text, View, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';
import LogoGoldX from '../components/LogoGoldX';

const HomeBlueHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 300,
        backgroundColor: COLORS.primary,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '12%',
      }}>
      <LogoGoldX />
      <View>
        <Text
          style={{fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#fff'}}>
          Yor Account Value:
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-SemiBold',
            fontWeight: '800',
            fontSize: 26,
            color: '#fff',
          }}>
          $1,850.40 USD
        </Text>
      </View>
      <View style={{width: '88%', height: 1, backgroundColor: '#6da6f2'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '88%',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 18,
              color: '#fff',
            }}>
            Cash Balance:
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-SemiBold',
              fontWeight: '800',
              fontSize: 22,
              color: '#fff',
            }}>
            $1,084.10 USD
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 18,
              color: '#fff',
            }}>
            Metal Holdings:
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-SemiBold',
              fontWeight: '800',
              fontSize: 22,
              color: '#fff',
            }}>
            $755.30 USD
          </Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <ScrollView style={{width: '100%'}}>
        <HomeBlueHeader />
        <Text>Home Screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default HomeScreen;
