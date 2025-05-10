import { createSlice } from "@reduxjs/toolkit";

const getTheme = () : string => {
    let res : string = "dark";
    try {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            res = storedTheme
            return res;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        res = prefersDark.matches ? "dark" : "light";
    }
    catch {
        console.log("Error getting theme");
    }
    finally {
        return res;
    }
}

interface ThemeState {
    value: string;
}

const initialState : ThemeState = {
    value: getTheme(),
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "dark" ? "light" : "dark";
            localStorage.setItem("theme", state.value);
            console.log("Theme changed to: ", state.value);
        }
    }
})

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;