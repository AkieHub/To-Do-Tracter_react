import { createSlice } from "@reduxjs/toolkit";
 export const loginStatus=createSlice({
    name:'status',
    initialState:{ value:false},
    reducers:{
        login: (state) => {
        state.value =true
      },
        islogin: (state) => {
        state.value =false
      },
    },
 });
 export const {login,islogin}=loginStatus.actions;
 export default loginStatus.reducer