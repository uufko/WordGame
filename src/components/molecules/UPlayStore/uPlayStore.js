import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import { UImages } from '../../../assets/uImages/uImages'
import { Style } from './style'

const UPlayStore = () => {
  return (
    <TouchableOpacity onPress={()=>{Linking.openURL("https://play.google.com/store/apps/dev?id=4639435798280910983")}} style={Style.touchable}>
      <Image style={Style.image} source={UImages.store} resizeMode="contain"/>
      <Text style={Style.text}>uApp</Text>
    </TouchableOpacity>
  )
}

export default UPlayStore