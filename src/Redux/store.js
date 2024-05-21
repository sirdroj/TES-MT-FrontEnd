import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./temp/test"
export default configureStore({
  reducer: {
    counter:counterReducer
  },
})