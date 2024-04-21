import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import UQuestion from '../../molecules/uQuestion/uQuestion'
import UPointArea from '../../molecules/uPointArea/uPointArea'
import UWordList from '../../organisms/uWordList/uWordList'
import { Style } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, changeHiddenAnswer, changeQuestion, setControlAnswer, setRandomNumber } from '../../../redux/slice'
import UImage from '../../atoms/uImage/uImage'
import UControlImages from '../../molecules/uControlImages/uControlImages'
import { UDatas } from '../../../assets/uMetarial/uDatas'
import { BannerAds } from '../../../ads/bannerAds/bannerAds'

const QuestionPage = () => {
  const { order } = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeAnswer())
    dispatch(changeHiddenAnswer())
    dispatch(changeQuestion())
    dispatch(setControlAnswer())
    dispatch(setRandomNumber())
    BannerAds()
  },[order])
  return (
    <View style={Style.viewStyle}>
      <UQuestion />
      <UPointArea />
      <UWordList />
      <UControlImages/>
      <BannerAds/>
    </View>
  )
}

export default QuestionPage