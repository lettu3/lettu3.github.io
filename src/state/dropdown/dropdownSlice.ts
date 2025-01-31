import {createSlice} from "@reduxjs/toolkit";

interface DropdownState {
    isOpen: boolean;
    selectedItem: string | null;
}

const initialState : DropdownState = {
    isOpen: false,
    selectedItem: null,
};

const dropdownSlice = createSlice({
    name : "dropdown",
    initialState,
    reducers : {
        toggleDropdown: (state, action) => {
            state.isOpen = action.payload;
        },
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
})

export const {toggleDropdown, selectItem} = dropdownSlice.actions;

export default dropdownSlice.reducer;