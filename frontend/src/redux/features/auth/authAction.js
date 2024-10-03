import { createAsyncThunk } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
import API from "../../../services/API"


export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ role, email, password }, { rejectWithValue }) => {
      try {
  
        const {data}= await API.post("/auth/login", { role, email, password });
        
        //store token
        if (data.success) {
         
          alert(data.message);
          localStorage.setItem("token", data.token);
          window.location.replace("/");
        }
        
        return data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  

export const userRegister = createAsyncThunk(
    'auth/register',
    async({ e,
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website}, {rejectWithValue}) => {
        try{
          const {data} = await API.post("/auth/register", {
            name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website
          })
        // store token

        if (data.success){
            
            toast.success(data.message)
            window.location.replace('/login')
        }
        return data
        }
        catch (error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)



export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue}) => {
        try{
          const res= await API.post("/auth/current-user")
        // store token

        if (res.data){
            
           return res?.data;
        }
     
        }
        catch (error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)