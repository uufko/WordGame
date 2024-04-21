import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import QuestionPage from '../components/pages/questionPage/questionPage'
import { NavigationContainer } from '@react-navigation/native'

const Navigation = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='QuestionPage' component={QuestionPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
