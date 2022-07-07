import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const FilterModal = ( {
  onSearch,
  setFilterName,
  setFilterMinYear,
  setFilterMaxYear,
  setFilterColor,
  setFilterMinPrice,
  setFilterMaxPrice,
  setFilterAvailable,
  setIsModalOpen, 
  filterName,
  filterMinYear,
  filterMaxYear,
  filterColor,
  filterMinPrice,
  filterMaxPrice,
  filterAvailable,
  isModalOpen
}) => {
  return (
    <TouchableOpacity
    style={{
      height: '65%',
      width: '100%',
      paddingTop: 10,
      backgroundColor: '#101010',
      borderRadius: 10,
    }}
    disabled={true}
    >
    <View>
      <View
        style={{
          margin: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeExtraBold',
          }}>
          What sort of car do you see yourself in?
        </Text>
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Search by make or model'
          onChangeText={(text) => { setFilterName(text) }}
        />
      </View>
      <View 
        style={{
          margin: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeExtraBold',
          }}>
          Other criteria
        </Text>
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Minimum model year'
          onChangeText={(text) => { setFilterMinYear(text) }}
        />
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Maximum model year'
          onChangeText={(text) => { setFilterMaxYear(text) }}
        />
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Color'
          onChangeText={(text) => { setFilterColor(text) }}
        />
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Minimum price'
          onChangeText={(text) => { setFilterMinPrice(text) }}
        />
      </View>
      <View 
        style={{
          justifyContent: 'center',
          margin: 10,
        }}>
        <TextInput 
          style={{
            backgroundColor: 'white',
          }}
          placeholder='Maximum price'
          onChangeText={(text) => { setFilterMaxPrice(text) }}
        />
      </View>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -45,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7b68ee',
            borderRadius: 25,
            height: 50,
            width: 150,
          }}
          onPress={onSearch}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'ManropeExtraBold',
                fontSize: 15,
              }}>SEARCH</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default FilterModal;
