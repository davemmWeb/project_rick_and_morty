import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { AtributesCharacter } from '../../components/vite-env'

// Define a type for the slice state
interface CharacterState {
    list: AtributesCharacter[];
    favorites: AtributesCharacter[]
}

// Define the initial state using that type
const initialState: CharacterState = {
    list: [],
    favorites: []
}

export const slice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        SET_ALL_CHARACTERS: (state, action: PayloadAction<AtributesCharacter[]>) => {
            state.list = action.payload
        },
        SET_FAVORITES: (state, action: PayloadAction<AtributesCharacter>) => {
            state.favorites.push(action.payload)
        }

    },
})

export const { SET_ALL_CHARACTERS, SET_FAVORITES } = slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCharacters = (state: RootState) => state.stateCaharacters

export default slice.reducer