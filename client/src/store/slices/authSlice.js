import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_details: [],
    authentication: false,
    success: false,
    message: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.message = action.payload;
        }
    }
});

export default authSlice.reducer
export const {loginSuccess} = authSlice.actions;