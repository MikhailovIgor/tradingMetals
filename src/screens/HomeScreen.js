import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';

import HomeBlueHeader from '../components/HomeScreenComponents/HomeBlueHeader';
import MetalPersonalInfoCard from '../components/HomeScreenComponents/MetalPersonalInfoCard';
import ColoredCard from '../components/HomeScreenComponents/ColoredCard';
// import RecentActivityList from '../components/HomeScreenComponents/RecentActivityList';
import Divider from '../components/HomeScreenComponents/Divider';
import recentActivityData from '../utils/mockData/recentActivityData';
import ArrowRight from '../components/svgComponents/ArrowRight';
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
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            borderRadius: 5,
            borderColor: 'rgba(47, 128, 237, 0.3)',
            borderWidth: 1.5,
            width: '88%',
            marginTop: 30,
            marginBottom: 130,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#050f19',
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 26,
            }}>
            Recent Activity
          </Text>
          {/* <FlatList
            keyExtractor={item => item.id}
            data={recentActivityData}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({item}) => (
              <View>
                <Text>{item.action}</Text>
              </View>
            )}
          /> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: COLORS.primary}}>View more</Text>
            <ArrowRight color={COLORS.primary} />
          </View>
        </View>
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
