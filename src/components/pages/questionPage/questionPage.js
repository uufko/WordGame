import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import UQuestion from '../../molecules/uQuestion/uQuestion'
import UPointArea from '../../molecules/uPointArea/uPointArea'
import UWordList from '../../organisms/uWordList/uWordList'
import { Style } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnswer, changeHiddenAnswer, changeQuestion, refreshOrder, setControlAnswer, setRandomNumber } from '../../../redux/slice'
import UControlImages from '../../molecules/uControlImages/uControlImages'
import { BannerAds } from '../../../ads/bannerAds/bannerAds'
import { UDatas } from '../../../assets/uMetarial/uDatas'

const QuestionPage = () => {
  const { order } = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setRandomNumber())
    dispatch(changeAnswer())
    dispatch(changeHiddenAnswer())
    dispatch(changeQuestion())
    dispatch(setControlAnswer())
    BannerAds()
  }, [order])
  return (
    <SafeAreaView style={Style.viewStyle}>
      <UQuestion />
      <UPointArea />
      <UWordList />
      <UControlImages />
      <BannerAds />
    </SafeAreaView>
  )
}

export default QuestionPage