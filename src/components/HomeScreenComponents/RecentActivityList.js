import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import recentActivityData from '../../utils/mockData/recentActivityData';
import Divider from './Divider';

const RecentActivityItem = item => (
  <View style={{flexDirection: 'row'}}>
    <View>
      <Text>{item.action}</Text>
    </View>
  </View>
);

const RecentActivityList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      {/* <FlatList
        nestedScrollEnabled
        data={recentActivityData}
        renderItem={({item}) => <RecentActivityItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
        initialNumToRender={5}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderColor: 'rgba(47, 128, 237, 0.3)',
    borderWidth: 1.5,
    width: '88%',
    marginTop: 30,
    marginBottom: 130,
    paddingHorizontal: 20,
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
  },
});

export default RecentActivityList;
