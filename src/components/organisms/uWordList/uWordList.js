import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import UBackImage from '../../molecules/uBackImage/uBackImage'
import { useDispatch, useSelector } from 'react-redux'
import {changeAnswer, setScore } from '../../../redux/slice'
import UTextInput from '../../atoms/uTextInput/uTextInput'
import { UDevice } from '../../../assets/uMetarial/uDevice'
import { Style } from './style'
import { uFunction } from '../../../function/function'

const UWordList = () => {
  const { hiddenAnswer ,controlAnswer,changeAnswer} = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  const {listHeightFunc,listWidthFunc} = uFunction()
  

  useEffect(() => {
    dispatch(setScore())
  })
  return (
    <View style={Style.viewStyle} >
      <FlatList
        data={hiddenAnswer} numColumns={10}
        renderItem={({ item }) => {
          return (
            <View style={Style.listViewStyle}>
              <UBackImage 
              height={listHeightFunc()} 
              width={listWidthFunc()} text={item} />
            </View>
          )
        }} />
      <UTextInput />
    </View>
  )
}

export default UWordList