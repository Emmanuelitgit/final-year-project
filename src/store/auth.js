import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: localStorage.getItem("user"),
  };

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:()=>{
            localStorage.removeItem("user")
            localStorage.removeItem("role")
        }
    }
})

export const {logout} = authSlice.actions;