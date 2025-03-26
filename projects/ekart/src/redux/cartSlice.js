import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addToCart } = cartSlice.actions; // known as 'named export'
export default cartSlice.reducer;  // known as 'default export'