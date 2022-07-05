import { View, Text } from 'react-native'
import React from 'react'

const CarInfo = ({ data }) => {
  return (
    <View>
      <Text style={{
        color: 'white'
      }}>
        {data.car} {data.car_model}, {data.car_model_year}
      </Text>
    </View>
  )
}

export default CarInfo