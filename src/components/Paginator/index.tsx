import React from 'react'
import { View } from 'react-native'

import { Colors } from '../../constants'
import { styles } from './styles'

export type PaginatorProps = {
  amount: number
  current: number
}

export const Paginator: React.FC<PaginatorProps> =({ amount, current }) => {
  const amountArray = [...Array(amount)].map((_, index) => index)

  return(
    <View style={styles.container}>
      {amountArray.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dash,
            {
              backgroundColor: index === current ? Colors.primary : '#c8d4e5'
            }
          ]}
        />
      ))}
    </View>
  )
}
