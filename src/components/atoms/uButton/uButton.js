import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.viewStyle}>
      <Text style={Style.textStyle}>Harf Al</Text>
    </TouchableOpacity>
  )
}

export default UButton