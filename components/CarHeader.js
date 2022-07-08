import { Image } from 'react-native'
import React from 'react'
import LikeButton from './LikeButton';


const CarHeader = ( { detailsData } ) => {
  return (
    <>
      <Image
        source={ { uri: detailsData.imgUrl } }
        resizeMode='cover'
        style={{
          width: '100%',
          height: '100%',
        }} 
      />
      <LikeButton />
    </>
  )
}

export default CarHeader