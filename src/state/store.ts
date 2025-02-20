import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./window/windowSlice";   
import counterReducer from "./counter/counterSlice";
import langReducer from "./lang/langSlice";
import themeReducer from "./theme/themeSlice";
import dropdownReducer from "./dropdown/dropdownSlice";
import burgerReducer from "./burger/burgerSlice";

export const store = configureStore({
    reducer: {
        window: windowReducer,
        counter : counterReducer,
        lang : langReducer,
        theme: themeReducer,
        dropdown: dropdownReducer,
        burger: burgerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
