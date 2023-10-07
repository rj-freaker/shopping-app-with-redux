import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlicse";

export const reduxStore = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});

export default reduxStore;
