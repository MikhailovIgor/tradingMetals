import React, { useRef, useState } from 'react'
import { Animated, FlatList, TouchableOpacity, View, ViewToken } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import { Button, Paginator, Text } from '@/components'
import { OnboardingItem } from './components/OnboardingItem'
import { styles } from './styles'
import { Slide, slides } from './onboardingData'

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef<FlatList<Slide> | null>(null)

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index!)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 })
    } else {
      navigation.navigate('welcome')
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#3081ee', '#205eb1']} style={styles.linearGradient}>
        {/* <LinearGradientStatusBar backgroundColor='transparent' barStyle='light-content' translucent /> */}
        <TouchableOpacity style={styles.skipContainer} onPress={() => navigation.navigate('welcome')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          data={slides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          bounces={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </LinearGradient>
      <View>
        <Paginator amount={slides.length} current={currentIndex} />
        <Button onPress={scrollTo}>Next</Button>
      </View>
    </View>
  )
}
