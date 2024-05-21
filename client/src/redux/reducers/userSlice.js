import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    currentUser: null
}
export const UserSlice =  createSlice({
    name: 'user',
    initialState,
    reducers:{
        loginSuccess: (state, action) =>{
            state.currentUser = action.payload.user;
            localStorage.setItem('Fitapp-token', action.payload.token)
        },
        logout: (state, action)=>{
            state.currentUser = null;
            localStorage.removeItem('Fitapp-token');
        }
    }
})

export const {logout, loginSuccess } = UserSlice.actions;
export default UserSlice.reducer;