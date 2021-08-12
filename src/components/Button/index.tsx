import React, { ReactNode } from 'react'
import { GestureResponderEvent, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'

import { Text } from '../index'
import { styles } from './styles'

export type ButtonProps = {
  children: ReactNode
  onPress: (event: GestureResponderEvent) => void
  disabled?: boolean
  outlined?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  outlined,
  buttonStyle,
  textStyle,
  disabled,
  loading,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled || loading}
    style={[
      styles.button,
      outlined && styles.outlinedButton,
      (disabled || loading) && styles.disabledButton,
      (disabled || loading) && outlined && styles.disabledOutlinedButton,
      buttonStyle,
    ]}
  >
    <Text
      style={[
        styles.text,
        outlined && styles.outlinedText,
        (disabled || loading) && styles.disabledText,
        (disabled || loading) && outlined && styles.disabledOutlinedText,
        textStyle,
      ]}
    >
      {loading ? 'Loading...' : children}
    </Text>
  </TouchableOpacity>
)
