import { SafeAreaView } from 'react-native'
import React from 'react'
import QuestionPage from './src/components/pages/questionPage/questionPage'
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'
import Navigation from './src/navigation/navigation'

const App = () => {
  return (
    <Provider store={Store}>
        <SafeAreaView style={{ flex: 1 }}>
          <QuestionPage />
        </SafeAreaView>
    </Provider>

  )
}

export default App