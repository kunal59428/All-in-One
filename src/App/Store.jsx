import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Feature/ProductSlice";
// import GetDataSlice from '../Fetures/GetDataSlice'
// import CartSlice from '../Fetures/CartSlice'

export default configureStore({
  reducer: {
    // products: GetDataSlice,
    //     // cart: CartSlice
    product: ProductSlice,
  },
});
