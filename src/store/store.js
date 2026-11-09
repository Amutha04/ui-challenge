import { configureStore } from "@reduxjs/toolkit";
import ObjectReducer from "./Reducers/ObjectReducer";

export const store = configureStore({
    reducer : ObjectReducer
})