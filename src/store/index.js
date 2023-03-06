import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import users from "./slices/userSlice";

const store = configureStore({
  reducer: {
    // your reducers
    products: products,
    users: users
  }
});

export default store;
