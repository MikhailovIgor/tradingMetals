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
    // handleSubmit(values);
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('verificationComplete');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={'transparent'}
        />
        <View style={styles.multiStep}>
          <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={slides}
            renderItem={({item}) => (
              <SignUpItem item={item} handleSubmit={handleSubmit} />
            )}
            pagingEnabled
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
        </View>
        <View style={styles.footer}>
          <Paginator data={slides} currentSlide={currentIndex} />
          <MainButton title="Continue" onPress={scrollTo} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  multiStep: {
    flex: 0.8,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  footer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 38,
  },
});

export default SignUpScreen;
