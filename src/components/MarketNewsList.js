import React from 'react';
import {Text, View, Platform, StyleSheet} from 'react-native';

import newsData from '@mockData/newsData';
import ViewMore from '@homeScreenComponents/ViewMore';

const RecentActivityList = ({onPress}) => {
  const size = 4;
  const items = newsData.slice(0, size);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market News</Text>
        <View style={{alignSelf: 'center', paddingTop: 8}}>
          <ViewMore onPress={onPress} />
        </View>
      </View>
      {items.map((item, index) => (
        <View
          key={item.id}
          style={
            index < 3
              ? [styles.itemContainer, styles.divider]
              : styles.itemContainer
          }>
          <Text>{item.newsTitle}</Text>
        </View>
      ))}
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
    marginBottom: 130,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Platform.OS === 'ios' ? '97%' : '95%',
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
    paddingVertical: 22,
  },
  itemContainer: {},
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(47, 128, 237, 0.3)',
  },
});

export default RecentActivityList;
