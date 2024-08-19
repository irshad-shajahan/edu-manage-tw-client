import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name:"alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showloading:(state) =>{
            // eslint-disable-next-line no-param-reassign
            state.loading=true
        },
        hideLoading:(state)=>{
            // eslint-disable-next-line no-param-reassign
            state.loading=false
        }
    }
})

export const  {showloading, hideLoading} =  loaderSlice.actions

export default loaderSlice.reducer