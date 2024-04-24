import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import QuestionPage from '../questionPage/questionPage'
import { UImages } from '../../../assets/uImages/uImages'
import UButton from '../../atoms/uButton/uButton'

const MainPage = ({navigation}) => {
  return (
    <View>
      <Image source={UImages.logo} resizeMode='contain' style={{height:400,width:400, alignSelf:"center"}}/>
      <UButton text={"Başla"} onPress={()=>{
        navigation.navigate(QuestionPage)
      }}/>
    </View>
  )
}

export default MainPage