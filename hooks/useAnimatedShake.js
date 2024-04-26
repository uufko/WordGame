import { useCallback } from "react"
import { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated"

export const UseAnimatedShake = () => {
    const shakeTranslateX = useSharedValue(0)
    const shake = useCallback(() => {
        const TranslationAmount = 5
        const timingConfig = {duration: 80}
        shakeTranslateX.value = withSequence(
            withTiming(TranslationAmount, timingConfig),
            withRepeat(withTiming(-TranslationAmount, timingConfig), 3, true),
            //withSpring(0, {mass: 0.5}),
            //withTiming(0)
        )
    }, [])


    const shake2 = useCallback(() => {
        const TranslationAmount = 10
        const timingConfig = {duration: 1500}
        shakeTranslateX.value = withSequence(
            withTiming(TranslationAmount, timingConfig),
            withRepeat(withTiming(-TranslationAmount, timingConfig), 10, true),
            withSpring(0, {mass: 0.5}),
            withTiming(0)
        )
    }, [])

    const rShakeStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: shakeTranslateX.value}]
        }
    })

    const rShakeStyle2 = useAnimatedStyle(() => {
        return {
            transform: [{  translateX:shakeTranslateX.value}]
        }
    })
    return {shake , rShakeStyle,shake2,rShakeStyle2}
}
