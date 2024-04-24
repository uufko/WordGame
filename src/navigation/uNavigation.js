import React from 'react'
import QuestionPage from '../components/pages/questionPage/questionPage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../components/pages/mainPage/mainPage'
import ScorePage from '../components/pages/scorePage/scorePage'

const UNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainPage'>
                <Stack.Screen options={{ headerShown: false }} name='MainPage' component={MainPage} />
                <Stack.Screen options={{ headerShown: false }} name='QuestionPage' component={QuestionPage} />
                <Stack.Screen options={{ headerShown: false }} name='ScorePage' component={ScorePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default UNavigation
