import React from 'react';
import {ScrollView, StatusBar, View, StyleSheet} from 'react-native';

import HomeBlueHeader from '../components/HomeScreenComponents/HomeBlueHeader';
import MetalPersonalInfoCard from '../components/HomeScreenComponents/MetalPersonalInfoCard';
import ColoredCard from '../components/HomeScreenComponents/ColoredCard';
import RecentActivityList from '../components/HomeScreenComponents/RecentActivityList';
import Divider from '../components/HomeScreenComponents/Divider';
import recentActivityData from '../utils/mockData/recentActivityData';
import ViewMore from '../components/HomeScreenComponents/ViewMore';
import {COLORS} from '../constants/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <HomeBlueHeader />
        <MetalPersonalInfoCard />
        <MetalPersonalInfoCard />
        <MetalPersonalInfoCard />
        <MetalPersonalInfoCard />
        <ColoredCard
          title="Set Up Auto Buy"
          description="Start building your wealth with automated purchases"
          backgroundColor="rgba(255, 189, 0, 0.3)"
          buttonTitle="Start Now"
          buttonWidth={300}
          onPress={() => console.log('start now auto buy!')}
        />
        <ColoredCard
          title="Start Trading"
          description="Build Your portfolio with GoldX"
          backgroundColor="rgba(47, 128, 237, 0.3)"
          buttonTitle="Buy Now"
          buttonWidth={300}
          onPress={() => console.log('start trading now!')}
        />
        <RecentActivityList onPress={() => null} />
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