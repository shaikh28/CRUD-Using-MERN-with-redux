import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
    'signup/signupuser',
    async (formData,{rejectWithValue})=>{
        try {
            const response = await axios.post('http://localhost:3000',formData)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.msg)
        }
    }
)

const signupSlice = createSlice({
    name:'signup',
    initialState:{
        userInfo:null,
        isLoading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(signUpUser.pending,(state)=>{
            state.isLoading=true,
            state.error=null
        })
        builder.addCase(signUpUser.fulfilled,(state)=>{
            state.isLoading=false
            state.userInfo= action.payload
        })
        builder.addCase(signUpUser.rejected,(state)=>{
            state.isLoading=false
            state.error=action.payload
        })
    }

})

export default signupSlice.reducer