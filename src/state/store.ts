import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import langReducer from "./lang/langSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        lang : langReducer,
        theme: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
