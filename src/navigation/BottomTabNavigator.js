import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {COLORS} from '../constants/colors';
import TabBarCustomButton from '../components/TabBarCustomButton';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ActionsScreen from '../screens/ActionsScreen';
import PricesScreen from '../screens/PricesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const activeTintColor = '#2f80ed';
const inActiveTintColor = COLORS.grey;
const iconSize = 28;

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => (
      <View style={styles.navigationContainer}>
        <BottomTabBar {...props} />
        {Platform.OS === 'ios' && <View style={styles.iosFillLine} />}
      </View>
    )}
    tabBarOptions={{
      showIcon: true,
      style: styles.navigator,
      tabStyle: {
        backgroundColor: COLORS.white,
        paddingBottom: 10,
      },
      activeTintColor: activeTintColor,
      inactiveTintColor: inActiveTintColor,
      labelStyle: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name="home"
            size={iconSize}
            color={focused ? activeTintColor : inActiveTintColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Portfolio"
      component={PortfolioScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name="home"
            size={iconSize}
            color={focused ? activeTintColor : inActiveTintColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Actions"
      component={ActionsScreen}
      options={{
        tabBarButton: props => (
          <TabBarCustomButton bgColor={COLORS.primary} {...props} />
        ),
      }}
    />
    <Tab.Screen
      name="Prices"
      component={PricesScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name="settings"
            size={iconSize}
            color={focused ? activeTintColor : inActiveTintColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name="settings"
            size={iconSize}
            color={focused ? activeTintColor : inActiveTintColor}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  iosFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white,
  },
});

export default BottomTabNavigator;
