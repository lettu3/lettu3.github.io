import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WindowState {
    width: number;
    height: number;
};

const initialState : WindowState = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        setWindowSize: (state, action: PayloadAction<WindowState>) => {
            state.width = action.payload.width;
            state.height = action.payload.height;
        }
    },
});

export const {setWindowSize} = windowSlice.actions;

export default windowSlice.reducer;