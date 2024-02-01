import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import avatar from "../../assets/images/boy-avatar.png";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
    
    const val = useSelector(state => state.header.homeLink);
    const [showHome, setShowHome] = useState(false);

    useEffect(() => {  
        if (val) {
            setShowHome(true);
        } else {
            setShowHome(false);
        }
        
     }, [val]);

    return (
        <>
            <div className={`ml-10 mr-10 mt-10 bg-tile-color border-box-border rounded-lg px-10 py-6 flex ${showHome ? "justify-between" : "justify-end"}`}>
                {
                    showHome &&(
                        <Link to={"/home/index"}>
                            <CalendarMonthRoundedIcon sx={{ fontSize: 30 }}  />
                        </Link>
                    )
                }
                <div className="flex items-center justify-center gap-4 font-semibold w-fit">
                    <img 
                        className="w-8 "
                        src={avatar} 
                        alt="avatar" />
                    <h1 className="text-white">Bharath Saravanan</h1>
                </div>
            </div>  
            <Outlet />      
        </>

    )
}