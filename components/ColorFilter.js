import { View, TextInput, Text } from 'react-native'
import React from 'react'

const ColorFilter = ( { setFilterColor } ) => {
  return (
    <View
      style={{
        flexDirection:"row",
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
          Color
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
            width: '50%',
          }}>
          <TextInput 
            style={{
              backgroundColor: 'white',
            }}
            placeholder='Eg. Yellow'
            onChangeText={(text) => { setFilterColor(text) }}
          />
        </View>
      </View>
    </View>      
  )
}

export default ColorFilter