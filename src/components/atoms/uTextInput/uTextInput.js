import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Style } from './style'
import { UColors } from '../../../assets/uMetarial/uColors'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from '../../../redux/slice'

const UTextInput = () => {
  const {inputValue} = useSelector((state)=>state.answers)
  const dispatch = useDispatch()
  return (
    <View style={Style.viewStyle}>
      <TextInput 
      placeholder='Cevabı Giriniz' 
      placeholderTextColor={UColors.lightTextColor}
      value={inputValue}
      onChangeText={(e)=>{
        dispatch(setInputValue(e))}}
      style={Style.textInputStyle}/>
    </View>
  )
}

export default UTextInput