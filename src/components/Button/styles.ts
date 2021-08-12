import { Colors } from '../../constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
  },
  disabledButton: {
    backgroundColor: Colors.grey,
    borderColor: Colors.grey,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    lineHeight: 22,
  },
  disabledText: {
    color: Colors.white,
  },
  outlinedButton: {
    backgroundColor: Colors.white,
  },
  outlinedText: {
    color: Colors.primary,
  },
  disabledOutlinedButton: {
    backgroundColor: Colors.white,
  },
  disabledOutlinedText: {
    color: Colors.grey,
  },
})
