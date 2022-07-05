import { View, Image, Text } from 'react-native';
import { useNavigation, useState, useEffect } from '@react-navigation/core';
import LikeButton from './LikeButton';
import CarInfo from './CarInfo';
import CarPrice from './CarPrice';


const CarCard = ({ data }) => {
  const navigation = useNavigation();
  const imgUrl = `https://picsum.photos/id/${data.id}/200`; 

  return (
    <View style={{
      backgroundColor: '#383838',
      borderRadius: 14,
      marginBottom: 5,
      margin: 10,
    }}
    >
      <View style={{
        width: '100%',
        height: 250
      }}
      >
        <Image
          source={ { uri: imgUrl } }
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }} 
        />
        <LikeButton />
      </View>
      <View>
        <CarInfo data={ data }/>
      </View>
      <View>
        <CarPrice data={ data }/>
      </View>
    </View>
  )
}

export default CarCard;