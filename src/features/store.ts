import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './characters/slice';

export const store = configureStore({
    reducer: {
        stateCaharacters: characterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch