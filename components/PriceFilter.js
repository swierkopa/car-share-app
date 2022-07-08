import { View, TextInput, Text } from 'react-native'
import React from 'react'

const PriceFilter = ( { setFilterMinPrice, setFilterMaxPrice } ) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
      }}>
      <View
        style={{
          flex: 4,
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeExtraBold',
          }}>
          Price Range
        </Text>
      </View>
      <View
        style={{
          flex: 6,
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <View
          style={{
            width: '35%',
          }}>
          <TextInput 
            style={{
              backgroundColor: 'white',
            }}
            placeholder='MIN PRICE'
            onChangeText={(text) => { setFilterMinPrice(text) }}
          />
        </View>
        <View
          style={{
            width: '35%',
          }}>
          <TextInput 
            style={{
              backgroundColor: 'white',
            }}
            placeholder='MAX PRICE'
            onChangeText={(text) => { setFilterMaxPrice(text) }}
          />
        </View>
      </View>
    </View>
  )
}

export default PriceFilter