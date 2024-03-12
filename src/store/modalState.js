import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        resultModal:false
    },
    reducers:{
        handleResultModal:(state)=>{
            state.resultModal = !state.resultModal
        }
    }
})

export const {handleResultModal} = modalSlice.actions;