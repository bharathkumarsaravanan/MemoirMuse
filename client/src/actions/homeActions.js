import axios from "axios";
import { datesSuccess } from "../store/slices/homeSlice"; // Import the missing 'datesSuccess' function

export const dates = (date) => async dispatch => {
    try {
        const datePost = await axios.post(`http://localhost:4000/home`, {currentDate: date});
        dispatch(datesSuccess(datePost.data));
    } catch(e) {
        console.log(e);
    }
}