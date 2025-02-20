import {createSlice} from "@reduxjs/toolkit";

interface BurgerState {
    isOpen: boolean;
}

const initialState: BurgerState = {
    isOpen: false,
}


const burgerSlice = createSlice({
    name: "burger",
    initialState,
    reducers : {
        toggleBurger: (state, action) => {
            state.isOpen = action.payload;
            console.log("Burger State: ", state.isOpen);
        }
    },
})


export const {toggleBurger} = burgerSlice.actions;

export default burgerSlice.reducer;