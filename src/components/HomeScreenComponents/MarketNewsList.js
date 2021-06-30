import React from 'react';
import {Text, View, FlatList, Platform, StyleSheet} from 'react-native';

// import newsData from '../../utils/mockData/newsData';
import Divider from './Divider';
import ViewMore from './ViewMore';

const RecentActivityList = ({onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        style={{height: 670}}
        data={[
          {id: 1, title: 'AAA'},
          {id: 2, title: 'bbb'},
          {id: 3, title: 'ccc'},
        ]}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider width="100%" />}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Market News</Text>
            <View style={{alignSelf: 'center', paddingTop: 8}}>
              <ViewMore onPress={onPress} />
            </View>
          </>
        }
        ListHeaderComponentStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Platform.OS === 'ios' ? '97%' : '95%',
        }}
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
    marginBottom: 130,
    paddingHorizontal: 20,
  },
  title: {
    color: '#050f19',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
    paddingVertical: 22,
  },
});

export default RecentActivityList;
