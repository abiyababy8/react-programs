import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeItemFromCart:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const { addToCart,removeItemFromCart,emptyCart } = cartSlice.actions; // known as 'named export'
export default cartSlice.reducer;  // known as 'default export'