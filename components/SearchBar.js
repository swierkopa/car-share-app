import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchBar = ( { setFilterName } ) => {
  return (
      <View 
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeExtraBold',
          }}>
          What sort of car do you see yourself in?
        </Text>
        <View
          style={{
            width: '75%',
            margin: 8,
          }}>
          <TextInput 
            style={{
              backgroundColor: 'white',
            }}
            placeholder='Search by make or model'
            onChangeText={(text) => { setFilterName(text) }}
          />
        </View> 
      </View>
  )
}

export default SearchBar