import React from 'react'
import { Image, useWindowDimensions, View } from 'react-native'

import { Text } from '@/components'
import { Slide } from '../onboardingData'
import { styles } from './onboardingItemStyles'
import { IconLogo } from '@/assets/images/svg'

export type OnboardingItem = {
  item: Slide
}

export const OnboardingItem:React.FC<OnboardingItem> = ({ item }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}>
        <IconLogo />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.imageStyle}
        />
      </View>
    </View>
  )
}
