import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import recentActivityData from '../../utils/mockData/recentActivityData';
import Divider from './Divider';
import ViewMore from './ViewMore';
import {CoinsIcon, DollarArrowDown, ThreeBullionsIcon} from '../svgComponents';

const RecentActivityItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={{width: '12%'}}>
      <CoinsIcon />
    </View>

    <View style={{width: '67%'}}>
      <Text style={styles.actionText}>{item.action}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>

    <View style={{width: '21%', alignItems: 'flex-end'}}>
      <Text style={styles.capitalization}>{item.capitalization}</Text>
      <Text>{item.amount}</Text>
    </View>
  </View>
);

const RecentActivityList = ({onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        style={{height: 470}}
        data={recentActivityData}
        renderItem={({item}) => <RecentActivityItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider width="100%" />}
        initialNumToRender={4}
        ListHeaderComponent={<Text style={styles.title}>Recent Activity</Text>}
        ListFooterComponent={<ViewMore onPress={onPress} />}
        ListFooterComponentStyle={{marginTop: 10, alignSelf: 'center'}}
      />
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
    width: '90%',
    marginTop: 30,
    // marginBottom: 130,
    paddingHorizontal: 20,
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
    paddingVertical: 22,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  actionText: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  date: {
    color: '#333',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  capitalization: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
});

export default RecentActivityList;
