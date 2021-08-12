import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export type DividerProps = {
  color?: string
  height?: string | number
  width?: string | number
}

export const Divider: React.FC<DividerProps> = ({
  color,
  width,
  height,
}) => (
  <View
    style={[
      styles.divider,
      {
        width: width,
        height: height,
        backgroundColor: color,
      }
    ]}
  />
)
