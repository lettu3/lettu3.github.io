import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    value: string;
}

const initialState : ThemeState = {
    value: "dark",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "dark" ? "light" : "dark";
            console.log("Theme changed to: ", state.value);
        }
    }
})

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;