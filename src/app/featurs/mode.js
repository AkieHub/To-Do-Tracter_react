import { createSlice } from '@reduxjs/toolkit'

export const mode = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    open: (state) => {
      state.value =true
    },
    close: (state) => {
      state.value =false
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, close} = mode.actions

export default mode.reducer