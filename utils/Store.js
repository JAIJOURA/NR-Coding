import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartTotal from "./cartTotal";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        amount:cartTotal
    }

})

export default store