import { View, Text } from 'react-native'
import React from 'react'
import UText from '../../atoms/uText/uText'
import { Style } from './style'
import { UDevice } from '../../../assets/uMetarial/uDevice'
import { useDispatch, useSelector } from 'react-redux'
import UButton from '../../atoms/uButton/uButton'
import { addRandomArray, setAnswer } from '../../../redux/slice'
import { UseAnimatedShake } from '../../../../hooks/useAnimatedShake'
import Animated from 'react-native-reanimated'

const UPointArea = ({}) => {
  const { score, totalScore, answer, randomArray } = useSelector((state) => state.answers)
  const dispatch = useDispatch()
  return (
    <View style={[Style.container]}>
      <View style={[Style.viewStyle, {}]}>
        <UText fontSize={UDevice.height * .02} text={score} />
      </View>
      <UButton text={"Harf Al"} onPress={control = () => {
        if (score == 0) {
        } else {
          let random = Math.floor(Math.random() * answer.length)
          if (randomArray.find(x => x === random) == random) {
            return control()
          }
          else {
            dispatch(addRandomArray(random))
            dispatch(setAnswer(random))
          }
        } 
      }} />
      <View style={Style.viewStyle}>
        <UText fontSize={UDevice.height * .035} text={totalScore} />
      </View>
    </View>
  )
}

export default UPointArea