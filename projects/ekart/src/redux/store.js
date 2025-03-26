import { configureStore } from "@reduxjs/toolkit";
import WishList from "./wishlistSlice";
import CartData from './cartSlice'
const store = configureStore({
    reducer: {
        wishListItems: WishList,
        cartItems: CartData
    }
})
export default store;