import { configureStore, Store } from "@reduxjs/toolkit";
import weatherReducer from '../features/weather/weather-slice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
})

export type AppDispatch = typeof store.dispatch
/**
 * * RootState type if infered by typescript
 * */
export type RootState = ReturnType<typeof store.getState>