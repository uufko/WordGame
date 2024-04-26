import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import { UseAnimatedShake } from '../../../../hooks/useAnimatedShake'
import Animated from 'react-native-reanimated'
import { UDevice } from '../../../assets/uMetarial/uDevice'
import { UColors } from '../../../assets/uMetarial/uColors'

const UButton = ({onPress,text,backgroundColor=UColors.backColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Style.viewStyle,{backgroundColor:backgroundColor}]}>
      <Text style={Style.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default UButton