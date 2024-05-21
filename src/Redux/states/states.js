import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'theam',
  initialState: {
    value: "light",
  },
  reducers: {
    setLogIn:(state)=>{
      state.value=1
    }

  },
})

// Action creators are generated for each case reducer function
export const {setLogIn } = counterSlice.actions

export default counterSlice.reducer