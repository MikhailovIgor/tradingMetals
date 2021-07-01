import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import recentActivityData from '../../utils/mockData/recentActivityData';
import ViewMore from './ViewMore';
import {CoinsIcon, DollarArrowDown, ThreeBullionsIcon} from '../svgComponents';

const RecentActivityList = ({onPress}) => {
  const size = 5;
  const items = recentActivityData.slice(0, size);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      {items.map((item, index) => (
        <View
          key={item.id}
          style={
            index < 4
              ? [styles.itemContainer, styles.divider]
              : styles.itemContainer
          }>
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
      ))}
      <View style={styles.footer}>
        <ViewMore onPress={onPress} />
      </View>
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
    paddingVertical: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(47, 128, 237, 0.3)',
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
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
});

export default RecentActivityList;
