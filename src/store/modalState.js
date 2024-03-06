import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        updateModal:false
    },
    reducers:{
        handleUpdateModal:(state)=>{
            state.updateModal = !state.updateModal
        }
    }
})

export const modalActions = modalSlice.actions;