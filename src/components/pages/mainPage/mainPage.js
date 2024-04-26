import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import QuestionPage from '../questionPage/questionPage'
import { UImages } from '../../../assets/uImages/uImages'
import UButton from '../../atoms/uButton/uButton'
import Animated from 'react-native-reanimated'
import { UseAnimatedShake } from '../../../../hooks/useAnimatedShake'
import UPlayStore from '../../molecules/UPlayStore/uPlayStore'
import { Style } from './style'

const MainPage = ({navigation}) => {
  const {rShakeStyle2,shake2} = UseAnimatedShake()
  useEffect(()=>{
    shake2()
  })
  return (
    <ImageBackground source={UImages.background2} resizeMode="cover" style={[{flex:1,justifyContent:"space-between"}]}>
      <Animated.Image source={UImages.logo} resizeMode='contain' style={[rShakeStyle2,Style.backgroundImage]}/>
      <View style={Style.view}>
      <UButton text={"Başla"} backgroundColor='#06aac2' onPress={()=>{
        navigation.navigate(QuestionPage)
      }}/>
      </View>
      
      <UPlayStore/>
      
    </ImageBackground>
  )
}

export default MainPage