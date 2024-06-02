import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Feature/ProductSlice";
import cartSlice from "../Feature/cartSlice";


export default configureStore({
  reducer: {
    product: ProductSlice,
    cart: cartSlice,
  },
});
