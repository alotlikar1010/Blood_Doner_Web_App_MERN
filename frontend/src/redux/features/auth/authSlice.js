import {createSlice} from '@reduxjs/toolkit'
import { getCurrentUser, userLogin, userRegister} from './authAction';

const token = localStorage.getItem('token') ? localStorage.getItem('token'):null
const initialState ={
    loading: false,
    user:null,
    token,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => { //pending
            state.loading = true;
            state.error =null
        })
        
        builder.addCase(userLogin.fulfilled, (state, {payload}) => { //success
            state.loading = false;
            state.user =payload.user;
            state.token =payload.token
        })

                
        builder.addCase(userLogin.rejected, (state, {payload}) => { //rejected
            state.loading = false;
            state.error =payload.user;
            
        })

        builder.addCase(userRegister.pending, (state) => { //pending
            state.loading = true;
            state.error =null
        })
        
        builder.addCase(userRegister.fulfilled, (state, {payload}) => { //success
            state.loading = false;
            state.user = payload.user;
        })

                
        builder.addCase(userRegister.rejected, (state, {payload}) => { //rejected
            state.loading = false;
            state.error = payload;
            
        })


        builder.addCase(getCurrentUser.pending, (state) => { //pending
            state.loading = true;
            state.error =null
        })
        
        builder.addCase(getCurrentUser.fulfilled, (state, {payload}) => { //success
            state.loading = false;
            state.user = payload.user;
        })

                
        builder.addCase(getCurrentUser.rejected, (state, {payload}) => { //rejected
            state.loading = false;
            state.error = payload;
            
        })
      }
})

export default authSlice;