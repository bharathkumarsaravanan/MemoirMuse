import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../../actions/authActions";
import { loginSuccess } from "../../store/slices/authSlice";
import "./auth.css";

export const Auth = () => {

    const dispatch = useDispatch();
    const val = useSelector(state => state.auth);
    console.log(val);


    return (
        <>
            <form className=" flex flex-col items-start gap-4" onSubmit={(param) => {
                param.preventDefault();
                console.log(param.target.phone.value);
                dispatch(login(param.target.phone.value));
            }}>
                <input 
                    type="number" 
                    name="phone" 
                    id="phone" 
                    className="py-3 px-5 bg-transparent border-2 rounded-md text-white font-semibold"
                    />
                <button 
                    type="submit"
                    className="bg-blue-400 text-white font-bold py-2 px-3.5 rounded"
                    >Login</button>
            </form>
        </>
    )
}