import React from 'react';
import {ScrollView, StatusBar, Text, View, StyleSheet} from 'react-native';

import HomeBlueHeader from '../components/HomeScreenComponents/HomeBlueHeader';
import MetalPersonalInfoCard from '../components/HomeScreenComponents/MetalPersonalInfoCard';

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
