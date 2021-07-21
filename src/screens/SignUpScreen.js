/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Animated,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import slides from '../utils/mockData/signUpData';
import MainButton from '@components/MainButton';
import SignUpItem from '@components/SignUpItem';
import Paginator from '@components/Paginator';
import {COLORS} from '../constants/colors';

const SignUpScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const handleSubmit = values => {
    console.log('name is ', values);
  };

  const scrollTo = values => {
    handleSubmit(values);
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('verificationComplete');
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={'transparent'}
        />
        <View style={styles.containerInner}>
          <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={slides}
            renderItem={({item}) => (
              <SignUpItem item={item} handleSubmit={handleSubmit} />
            )}
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
          <View style={styles.footer}>
            <Paginator data={slides} currentSlide={currentIndex} />
            <MainButton title="Continue" onPress={scrollTo} />
          </View>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  containerInner: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 38,
  },
  footer: {
    // flex: 0.2,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 38,
  },
});

export default SignUpScreen;
