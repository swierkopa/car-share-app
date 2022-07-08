import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CarInfo from './CarInfo'
import CarPrice from './CarPrice'

const CarDetails = ( { detailsData } ) => {
  let availabilityStatement;

  return (
    <>
      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <CarInfo data={detailsData}/>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeMedium',
            fontSize: 15,
          }}>
          COLOR: {detailsData.car_color}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'ManropeMedium',
            fontSize: 15,
          }}>
          {detailsData.availability ? "AVAILABLE NOW" : "UNAVAILABLE AT THIS TIME"}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 20,
          justifyContent: "flex-end",
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            bottom: -10,
          }}>
          <CarPrice data={detailsData}/>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#7b68ee',
              borderRadius: 25,
              height: 50,
              width: 150
            }}
          >
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
                }}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default CarDetails