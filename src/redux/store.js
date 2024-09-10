import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './features/signUpSlice'
const store = configureStore({
    reducer:{
        signup:signupReducer
    }
})

export default store