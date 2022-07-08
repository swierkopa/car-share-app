import { View, Text } from 'react-native'
import React from 'react'

const CarInfo = ({ data }) => {
  return (
      <Text style={{
        color: 'white',
        fontFamily: 'ManropeExtraBold',
        fontSize: 20,
      }}>
        {data.car} {data.car_model}, {data.car_model_year}
      </Text>
  )
}

export default CarInfo