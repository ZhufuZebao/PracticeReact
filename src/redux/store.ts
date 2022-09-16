import {configureStore} from "@reduxjs/toolkit";
import attributeGroupSlice from './attributeGroupReducer'
const store = configureStore({
  reducer:{
    attributeGroupSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export default store