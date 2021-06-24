import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {COLORS} from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import NullScreen from '../screens/NullScreen';
import PricesScreen from '../screens/PricesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  HomeIcon,
  PortfolioIcon,
  PricesIcon,
  SettingsIcon,
  TabBarCentralButton,
} from '../components/tabBarComponents';

const Tab = createBottomTabNavigator();
const activeTintColor = COLORS.primary;
const inActiveTintColor = COLORS.grey;

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => (
      <View style={styles.navigatorContainer}>
        <BottomTabBar {...props} />
        {Platform.OS === 'ios' && <View style={styles.iosFillLine} />}
      </View>
    )}
    tabBarOptions={{
      style: styles.navigator,
      tabStyle: {
        backgroundColor: '#fff',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <HomeIcon color={focused ? activeTintColor : inActiveTintColor} />
        ),
      }}
    />
    <Tab.Screen
      name="Portfolio"
      component={PortfolioScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <PortfolioIcon
            color={focused ? activeTintColor : inActiveTintColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Modal"
      component={NullScreen}
      options={{
        tabBarButton: props => (
          <TabBarCentralButton
            bgColor={COLORS.white}
            onPress={() => console.log('central Button pressed')}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Prices"
      component={PricesScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <PricesIcon color={focused ? activeTintColor : inActiveTintColor} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <SettingsIcon color={focused ? activeTintColor : inActiveTintColor} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
    height: 30,
    backgroundColor: '#fff',
  },
});

export default BottomTabNavigator;
