import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../constants/colors';
import slides from '../utils/mockData/onBoardData';
import CustomStatusBar from '@components/CustomStatusBar';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import MainButton from '../components/MainButton';

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('welcome');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3081ee', '#205eb1']}
        style={styles.linearGradient}>
        <CustomStatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <View style={{flex: 0.15}}>
          <TouchableOpacity
            style={styles.skipContainer}
            onPress={() => navigation.navigate('welcome')}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.85}}>
          <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={slides}
            renderItem={({item}) => <OnboardingItem item={item} />}
            bounces={false}
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
      </LinearGradient>
      <View style={styles.footer}>
        <Paginator data={slides} currentSlide={currentIndex} />
        <MainButton title="Next" onPress={scrollTo} width={320} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 0.85,
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  skipButton: {
    color: COLORS.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  footer: {
    flex: 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default OnboardingScreen;
