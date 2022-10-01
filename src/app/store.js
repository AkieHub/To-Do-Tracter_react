import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './featurs/mode';

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})