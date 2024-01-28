import React from "react";
import "./dateCells.css";
import camIcon from "../../assets/icons/cam.svg";

export const DateCells = ({date, clickAction}) => {
  const calDate = new Date(date);
  const monthName = calDate.toLocaleString("default", { month: "short" });
  const dateStr = calDate.getDate();
  return (
    <div 
        className="dateCell border-box-border rounded-lg bg-tile-color w-48 text-center flex flex-col items-center py-5"
        onClick={() => clickAction(date)}
    >
      <h3 className="text-2xl font-medium text-secondary-text">{monthName}</h3>
      <h1 className="text-6xl text-white font-semibold mt-3">{dateStr}</h1>
      <img src={camIcon} width="100" height="150" alt="camera icon" />
    </div>
  );
};
