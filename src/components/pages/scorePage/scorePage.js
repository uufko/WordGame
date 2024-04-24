import { View, Text } from 'react-native'
import React from 'react'
import UButton from '../../atoms/uButton/uButton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import MainPage from '../mainPage/mainPage'
import { refreshOrder } from '../../../redux/slice'
import { UColors } from '../../../assets/uMetarial/uColors'
import { UDevice } from '../../../assets/uMetarial/uDevice'

const ScorePage = () => {
  const navigation = useNavigation()
  const { totalScore } = useSelector((state) => state.answers)
  const dispath = useDispatch()
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:UColors.lightTextColor,fontSize:UDevice.size, fontFamily:"bont"}}>{totalScore}</Text>
      <UButton text={"Ana Sayfa"} onPress={()=>{navigation.navigate(MainPage),dispath(refreshOrder())}}/>
    </View>
  )
}

export default ScorePage