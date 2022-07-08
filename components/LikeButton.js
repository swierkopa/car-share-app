import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const LikeButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        right: 10,
      }}
    >
      <Image 
        source={require('../assets/heart.png')}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24
        }}
      />

    </TouchableOpacity>
  )
}

export default LikeButton;