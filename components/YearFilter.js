import { View, Text, TextInput } from 'react-native'
import React from 'react'

const YearFilter = ( { setFilterMinYear, setFilterMaxYear} ) => {
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
          Model Year Range
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
                backgroundColor: 'white',}}
              placeholder='MIN YEAR'
              onChangeText={(text) => { setFilterMinYear(text) }}
            />
          </View>
          <View
            style={{
              width: '35%',
            }}>
            <TextInput 
              style={{
                backgroundColor: 'white',}}
              placeholder='MAX YEAR'
              onChangeText={(text) => { setFilterMaxYear(text) }}
            />
          </View>
        </View>
    </View>
  )
}

export default YearFilter;