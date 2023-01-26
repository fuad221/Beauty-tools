import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./DarkModeSlice"; 
import cartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;