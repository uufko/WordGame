import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import { UseAnimatedShake } from '../../../../hooks/useAnimatedShake'
import Animated from 'react-native-reanimated'

const UButton = ({onPress,text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Style.viewStyle]}>
      <Text style={Style.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default UButton