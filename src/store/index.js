import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalState";
import { dataSlice } from "./manageData";
import { authSlice } from "./auth";


const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        data:dataSlice.reducer,
        modal:modalSlice.reducer
    }
})

export default store;