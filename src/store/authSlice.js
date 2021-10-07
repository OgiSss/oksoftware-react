import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isLogin: false,
    email: '',
    lastLogin: Date()
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isLogin = true;
            state.email = action.payload.email;
            state.lastLogin = Date();

        },
        signOut: (state) => {
            state.isLogin = false;
            state.email = '';
            state.lastLogin = Date();

        }
    }
})


// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;