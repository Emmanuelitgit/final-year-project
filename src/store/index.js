import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalState";
import { dataSlice } from "./manageData";


const store = configureStore({
    reducer:{
        data:dataSlice.reducer
    }
})

export default store;