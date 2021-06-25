import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {COLORS} from '../../constants/colors';
import LogoGoldX from '../svgComponents/LogoGoldX';
import TriangleRedDown from '../svgComponents/TriangleRedDown';

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
        <View style={{justifyContent: 'space-around', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 12,
              color: '#fff',
            }}>
            Since last purchase
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              height: 28,
              borderRadius: 44,
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                flex: 0.7,
                fontFamily: 'OpenSans-SemiBold',
                fontWeight: '600',
                fontSize: 14,
                color: '#050f19',
              }}>
              -4.76 %
            </Text>
            <TriangleRedDown />
          </View>
        </View>
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

const styles = StyleSheet.create({});

export default HomeBlueHeader;
