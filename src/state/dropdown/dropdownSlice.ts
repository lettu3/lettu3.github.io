import {createSlice} from "@reduxjs/toolkit";

interface DropdownState {
    isOpen: boolean;
    selectedItem: number | null;
}

const initialState : DropdownState = {
    isOpen: false,
    selectedItem: 1,
};

const dropdownSlice = createSlice({
    name : "dropdown",
    initialState,
    reducers : {
        toggleDropdown: (state, action) => {
            state.isOpen = action.payload;
            console.log('State: ', state.selectedItem);
        },
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
})

export const {toggleDropdown, selectItem} = dropdownSlice.actions;

export default dropdownSlice.reducer;