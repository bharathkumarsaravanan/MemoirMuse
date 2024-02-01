import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeLink: false,
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        showHomeLink: (state, action) => {
            state.homeLink = true;
        },
        hideHomeLink: (state, action) => {
            state.homeLink = false;
        }
    }
})

export const {showHomeLink, hideHomeLink} = headerSlice.actions;
export default headerSlice.reducer;