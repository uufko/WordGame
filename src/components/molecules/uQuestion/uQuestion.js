import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'
import UText from '../../atoms/uText/uText'
import { UDevice } from '../../../assets/uMetarial/uDevice'
import { useSelector } from 'react-redux'

const UQuestion = () => {
  const {question} = useSelector((state)=>state.answers)
  return (
    <View style={Style.viewStyle}>
      <UText fontSize={UDevice.height*.02} text={question.toLocaleUpperCase()}/>
    </View>
  )
}

export default UQuestion