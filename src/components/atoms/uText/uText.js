import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'

const UText = ({text,fontSize}) => {
  return (
    <View>
      <Text style={[Style.textStyle,{fontSize:fontSize}]}>{text}</Text>
    </View>
  )
}

export default UText