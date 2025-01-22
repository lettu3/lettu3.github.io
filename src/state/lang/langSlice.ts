import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface LangState {
    value : string;
}

const initialState: LangState = {
    value : "en",
};

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers : {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    },
})

export const {setLanguage} = langSlice.actions;

export default langSlice.reducer;