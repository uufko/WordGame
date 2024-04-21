import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import UBackImage from '../../molecules/uBackImage/uBackImage'
import { useDispatch, useSelector } from 'react-redux'
import {setScore } from '../../../redux/slice'
import UTextInput from '../../atoms/uTextInput/uTextInput'
import { UDevice } from '../../../assets/uMetarial/uDevice'
import { Style } from './style'

const UWordList = () => {
  const { hiddenAnswer } = useSelector((state) => state.answers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setScore())
  })
  return (
    <View style={Style.viewStyle} >
      <FlatList
        data={hiddenAnswer} numColumns={10}
        renderItem={({ item }) => {
          return (
            <View style={{}}>
              <UBackImage text={item} />
            </View>
          )
        }} />
      <UTextInput />
    </View>
  )
}

export default UWordList