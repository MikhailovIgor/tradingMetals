import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 0.85,
  },
  skipContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  skipButton: {
    color: Colors.white,
    fontSize: 18,
  },
  footer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingHorizontal: 38,
  },
})
