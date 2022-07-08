import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchButton = ( { onSearch } ) => {
  return (
    <View>
      <View 
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7b68ee',
            borderRadius: 25,
            height: 50,
            width: 150,
          }}
          onPress={onSearch}>
          <View 
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'ManropeExtraBold',
                fontSize: 15,
              }}>
              SEARCH
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchButton;