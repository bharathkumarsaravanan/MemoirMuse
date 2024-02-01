import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dates: [],
    success: false,
    message: ""
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        datesSuccess: (state, action) => {
            var { dates } = action.payload;
            state.dates = dates;
            state.success = true;
        }
    }

})


export default homeSlice.reducer
export const {datesSuccess} = homeSlice.actions;
