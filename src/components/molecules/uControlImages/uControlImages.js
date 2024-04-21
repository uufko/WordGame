import { View, Text } from 'react-native'
import React from 'react'
import UImage from '../../atoms/uImage/uImage'
import { UImages } from '../../../assets/uImages/uImages'
import { useDispatch, useSelector } from 'react-redux'
import { increaseOrder, setTrueFalseControl } from '../../../redux/slice'

const UControlImages = () => {
  const { trueFalseControl } = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  return (
    <View>
      {trueFalseControl == "false" ? <UImage source={UImages.false} onPress={() => { dispatch(setTrueFalseControl()) }} /> : <></>}
      {trueFalseControl == "true" ? <UImage source={UImages.next} onPress={() => { dispatch(increaseOrder()) }} /> : <></>}
      {trueFalseControl == "" ? <UImage source={UImages.check} onPress={() => { dispatch(setTrueFalseControl()) }} /> : <></>}
    </View>
  )
}

export default UControlImages