import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'
import UNavigation from './src/navigation/uNavigation'

const App = () => {
  return (
    <Provider store={Store}>
      <UNavigation />
    </Provider>
  )
}

export default App