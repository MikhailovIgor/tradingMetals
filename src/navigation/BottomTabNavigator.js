import React, {useState} from 'react';
import {View, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Colors} from '../constants';
import HomeScreen from '@screens/HomeScreen';
import PortfolioScreen from '@screens/PortfolioScreen';
import NullScreen from '@screens/NullScreen';
import PricesScreen from '@screens/PricesScreen';
import SettingsScreen from '@screens/SettingsScreen';
import {
  HomeIcon,
  PortfolioIcon,
  PricesIcon,
  SettingsIcon,
  TabBarCentralButton,
} from '@components/tabBarComponents';
import ButtonMenu from './ButtonMenu';
import {isIphoneX} from '../utils/isIphoneX';

const Tab = createBottomTabNavigator();
const activeTintColor = Colors.primary;
const inActiveTintColor = Colors.grey;

const renderCustomTabBarButton = (props, customStyle) => {
  const newProps = {
    ...props,
    style: [...props.style, customStyle],
    activeOpacity: 1,
  };

  return <TouchableOpacity {...newProps} />;
};

const BottomTabNavigator = () => {
  const [visibleButtonMenu, setVisibleButtonMenu] = useState(false);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
            {isIphoneX && <View style={styles.iosFillLine} />}
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
            tabBarButton: props =>
              renderCustomTabBarButton(props, styles.firstTabBarButton),
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
                bgColor={Colors.white}
                onPress={() => setVisibleButtonMenu(true)}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Prices"
          component={PricesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <PricesIcon
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
              <SettingsIcon
                color={focused ? activeTintColor : inActiveTintColor}
              />
            ),
            tabBarButton: props =>
              renderCustomTabBarButton(props, styles.lastTabBarButton),
          }}
        />
      </Tab.Navigator>
      <ButtonMenu
        visible={visibleButtonMenu}
        close={() => setVisibleButtonMenu(false)}
      />
    </>
  );
};

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
  firstTabBarButton: {
    borderTopLeftRadius: 27,
  },
  lastTabBarButton: {
    borderTopRightRadius: 27,
  },
});

export default BottomTabNavigator;
