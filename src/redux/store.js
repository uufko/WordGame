import {configureStore} from '@reduxjs/toolkit'
import AnswerSlice from './slice'

export const Store = configureStore({
    reducer:{
        answers: AnswerSlice.reducer,
    }
})