import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { UImages } from '../../../assets/uImages/uImages'
import { Style } from './style'
import UText from '../../atoms/uText/uText'
import { UDevice } from '../../../assets/uMetarial/uDevice'

const UBackImage = ({text,height,width}) => {
  return (
    <View style={[Style.viewStyle,{height:height,width:width}]}>
      <ImageBackground resizeMode="contain" style={[Style.imageBackStyle,{height:height,width:width}]} source={UImages.backImage}>
        <UText fontSize={UDevice.height*.035} text={text.toLocaleUpperCase()}/>
      </ImageBackground>
    </View>
  )
}

export default UBackImage