import { loginSuccess } from "../store/slices/authSlice";
import axios from "axios";

export const login = () => async dispatch => {
    
    try {
        const authPost = await axios.get(`http://localhost:4000/auth`);
        console.log(authPost);
        // dispatch(loginSuccess("puck you") )
    } catch(e) {
        console.log(e);
    }
}