import { View, Text } from 'react-native'
import React from 'react'
import UImage from '../../atoms/uImage/uImage'
import { UImages } from '../../../assets/uImages/uImages'
import { useDispatch, useSelector } from 'react-redux'
import { increaseOrder, setTrueFalseControl } from '../../../redux/slice'
import { UseAnimatedShake } from '../../../../hooks/useAnimatedShake'
import Animated from 'react-native-reanimated'
import ScorePage from '../../pages/scorePage/scorePage'
import { useNavigation } from '@react-navigation/native'

const UControlImages = () => {
  const navigation = useNavigation()
  const {shake,rShakeStyle} = UseAnimatedShake()
  const { trueFalseControl,order } = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  return (
    <Animated.View style={rShakeStyle}>
      {trueFalseControl == "false" ? <UImage source={UImages.false} onPress={() => { dispatch(setTrueFalseControl()), shake() }} /> : <></>}
      {trueFalseControl == "true" ? <UImage source={UImages.next} onPress={() => { order == 10 ?  navigation.navigate(ScorePage) : dispatch(increaseOrder()) }} /> : <></>}
      {trueFalseControl == "" ? <UImage source={UImages.check} onPress={() => { dispatch(setTrueFalseControl()) }} /> : <></>}
    </Animated.View>
  )
}

export default UControlImages