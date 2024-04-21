import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import { UImages } from '../../../assets/uImages/uImages'
import { useDispatch, useSelector } from 'react-redux'
import { increaseOrder } from '../../../redux/slice'

const UImage = ({onPress,source}) => {
  return (
    <TouchableOpacity
      onPress={onPress }
      style={Style.touchableStyle}>
      <Image
        style={Style.imageStyle}
        source={source} />
    </TouchableOpacity>
  )
}

export default UImage