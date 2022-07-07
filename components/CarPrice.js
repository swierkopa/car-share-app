import { View, Text } from 'react-native'
import React from 'react'

const CarPrice = ({ data }) => {
  return (
    <View style ={{
      position: 'absolute',
      bottom: 10,
      right: 10,
      
    }}>
      <Text style={{
        color: 'white',
        fontFamily: 'ManropeExtraBold',
        fontSize: 20,
      }}
      >
        US${Math.floor(Number(data.price.slice(1)))} a day
      </Text>
    </View>
  )
}

export default CarPrice