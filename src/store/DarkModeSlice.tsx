import { createSlice } from '@reduxjs/toolkit';

type DarkModeState = {
    isDarkMode: boolean;
}

const initialDarkModeState: DarkModeState = {isDarkMode: false}

const darkModeSlice = createSlice({
    name : 'darkModeName',
    initialState: initialDarkModeState,
    reducers: {
        toggleDarkMode(state) {
            state.isDarkMode= !state.isDarkMode
        }
    }
})

export const darkModeActions = darkModeSlice.actions

export default darkModeSlice