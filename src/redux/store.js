import { configureStore } from '@reduxjs/toolkit'
import universeReducer from "./slices/universeSlice";

export const store = configureStore({
    reducer: {
        universe: universeReducer
    },
})