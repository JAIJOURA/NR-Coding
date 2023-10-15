import { createSlice } from "@reduxjs/toolkit";

const cartTotal = createSlice({
    name:'amount',
    initialState:{
        amount:0
    },
    reducers:{
        addAmt:(state,action)=>{
            state.amount = state.amount + action.payload
        }
    }
})
export default cartTotal.reducer
export const { addAmt } = cartTotal.actions