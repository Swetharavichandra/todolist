import { configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "./reducers";

const store=configureStore({
    reducer:todoreducer 
})

export default store;