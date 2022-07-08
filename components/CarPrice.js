import { Text } from 'react-native'
import React from 'react'

const CarPrice = ({ data }) => {
  return (
      <Text style={{
        color: 'white',
        fontFamily: 'ManropeExtraBold',
        fontSize: 20,
      }}
      >
        US${Math.floor(Number(data.price.slice(1)))} a day
      </Text>
  )
}

export default CarPrice