import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import LikeButton from './LikeButton';
import CarInfo from './CarInfo';
import CarPrice from './CarPrice';


const CarCard = ({ data }) => {
  const navigation = useNavigation();
  const imgUrl = `https://picsum.photos/id/${data.id}/200`;
  const detailsData = {...data, imgUrl: imgUrl} 

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsPage", { detailsData })}
    >
      <View style={{
      backgroundColor: '#383838',
      borderRadius: 14,
      marginBottom: 5,
      margin: 10,
    }}
    >
      <View style={{
        width: '100%',
        height: 300
      }}
      >
        <Image
          source={ { uri: imgUrl } }
          resizeMode='cover'
          style={{
            width: '100%',
            height: '60%',
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }} 
        />
        <LikeButton />
        <View
          style={{
            margin: 10,
          }}>
          <CarInfo data={ data }/>
        </View>

        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            right: 10,
            bottom: -30,
          }}>
          <CarPrice data={ data }/>
        </View>       
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default CarCard;