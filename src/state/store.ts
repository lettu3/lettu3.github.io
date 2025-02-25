import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./window/windowSlice";   
import langReducer from "./lang/langSlice";
import themeReducer from "./theme/themeSlice";
import burgerReducer from "./burger/burgerSlice";

export const store = configureStore({
    reducer: {
        window: windowReducer,
        lang : langReducer,
        theme: themeReducer,
        burger: burgerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
