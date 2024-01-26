import { loginSuccess } from "../store/slices/authSlice";
import axios from "axios";

export const login = (body) => async dispatch => {
    
    try {
        const authPost = await axios.post(`http://localhost:4000/auth`, body);
        console.log(authPost);
        // dispatch(loginSuccess("puck you") )
    } catch(e) {
        console.log(e);
    }
}