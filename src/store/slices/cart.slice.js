import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        setCar: (currentValue, action) => action.payload,
    }
});

export const {setCar} = cartSlice.actions;

export default cartSlice.reducer;