import React from "react";

export const DateContainer = ({children, className}) => {
    return (
        <div className={`m-10 border-box-border rounded-lg flex ${className}`}
            style={{backgroundImage: "linear-gradient(168deg, rgba(60,60,60,0.5047268907563025) 0%, rgba(18,18,18,1) 60%)"}}>
            {children}       
        </div>
    )
}