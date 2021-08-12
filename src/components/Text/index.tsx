import React from 'react'
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native'
import { styles } from './styles'

export type TextProps = {
  style?: StyleProp<TextStyle>
} & RNTextProps

export const Text: React.FC<TextProps> = ({ children, style, ...rest }) => (
  <RNText
    style={[
      styles.text,
      style,
    ]}
    {...rest}
  >
    { children }
  </RNText>
)
