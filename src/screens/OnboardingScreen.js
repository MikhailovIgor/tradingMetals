import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

import {COLORS} from '../constants/colors';
import slides from '../utils/onBoardData';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';

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
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#3081ee', '#205eb1']}
        style={styles.linearGradient}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={'transparent'}
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
        <Button buttonStyle={styles.button} title="Next" onPress={scrollTo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 0.8,
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
    flex: 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 45,
    width: 300,
    marginTop: 20,
  },
});

export default OnboardingScreen;
