import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage=() => {
    try{
const serializedUserState = localStorage.getItem('user');
const token = document.cookie.match(/token=([^;]+)/)?.[1];

if(serializedUserState == null ) return { user: null };

const user = JSON.parse(serializedUserState);
return { user, token };
    }catch(error){
return {user: null}
    }
}

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        setUser : (state,action) =>{
             const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('token', token);
            document.cookie = `token=${state.token}; path=/; max-age=3600`; // Set token in cookies for 1 hour
        },
        logout : (state) =>{
           state.user = null;
           state.token = null;
           localStorage.removeItem('user');
           localStorage.removeItem('token');
           document.cookie = "token=; path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"; // Clear token cookie
        }
    }
})

export const{setUser,logout} = authSlice.actions;
export default authSlice.reducer;