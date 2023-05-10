import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'


const initialState = {
    key: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('key') || false : false
  }

export const apiSlice = createSlice ({
    name: 'api',
    initialState,
    reducers: {
        setKey:(state, action) => {
            if(action.payload) {
                sessionStorage.setItem('myApiKey', action.payload)
            }else {
                sessionStorage.removeItem('myApiKey')
            }
            state.key = action.payload
        }
    }
})

export const {
    setKey
  } = apiSlice.actions;
  export default apiSlice.reducer;
  

