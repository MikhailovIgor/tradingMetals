import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.4,
    paddingHorizontal: 37,
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: Colors.white,
    fontFamily: Fonts.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19,
  },
  imageContainer: {
    flex: 0.6,
  },
  imageStyle: {
    bottom: -25,
    resizeMode: 'contain',
    height: 540,
  },
})
