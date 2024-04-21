import {configureStore} from '@reduxjs/toolkit'
import AnswerSlice from './slice'
import ScoreSlice from './scoreSlice'

export const Store = configureStore({
    reducer:{
        answers: AnswerSlice.reducer,
        uScore:ScoreSlice.reducer
    }
})