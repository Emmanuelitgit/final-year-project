import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getStaff = createAsyncThunk("orders", async (role) => {
    try {
      const response = await axios.get(`http://localhost:5000/staff/${role.role}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  });

export const addStaff = createAsyncThunk("addStaff", async(staffData)=>{
    try {
      const response = await axios.post(`http://localhost:5000/staff`, staffData);
      return staffData;
    } catch (error) {
        console.log(error)
    }
})


export const dataSlice = createSlice({
    name:"data",
    initialState:{
        staff:[],
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
          .addCase(getStaff.fulfilled, (state,action)=>{
            state.staff = action.payload
          })
    }
})

