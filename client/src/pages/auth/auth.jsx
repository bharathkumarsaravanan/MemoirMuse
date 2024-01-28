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
        <div className="bg-black h-screen bg-auth">
            <form className=" flex flex-col items-center gap-4 justify-center h-full rotate-6" onSubmit={(param) => {
                param.preventDefault();
                console.log(param.target.phone.value);
                dispatch(login({phone:param.target.phone.value}));
            }}>
                <input 
                    type="number" 
                    name="phone" 
                    id="phone" 
                    className="py-3 px-5 bg-transparent border-2 rounded-md text-white font-semibold w-1/4"
                    />
                <button 
                    type="submit"
                    className="bg-btnOrange text-white font-bold py-2 px-3.5 rounded w-40"
                    >Login</button>
            </form>
        </div>
    )
}