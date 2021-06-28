import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import Divider from './Divider';

const RecentActivityList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
  },
});

export default RecentActivityList;
