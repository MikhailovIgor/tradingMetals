import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {COLORS} from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
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

const BottomTabNavigator = ({barColor = 'transparent'}) => (
  <Tab.Navigator
    tabBar={props => (
      <View style={styles.navigatorContainer}>
        <BottomTabBar {...props} />
        {Platform.OS === 'ios' && (
          <View style={[styles.iosFillLine, {backgroundColor: barColor}]} />
        )}
      </View>
    )}
    tabBarOptions={{
      showIcon: true,
      style: styles.navigator,
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
      component={HomeScreen}
      options={{
        tabBarButton: props => <TabBarCentralButton />,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 30,
  },
  iosFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});

export default BottomTabNavigator;
