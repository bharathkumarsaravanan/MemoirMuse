import React from "react";
import "./dateCells.css";
import camIcon from "../../assets/icons/cam.svg";
import { Link } from "react-router-dom";

export const DateCells = ({date, clickAction}) => {
  const calDate = new Date(date);
  const monthName = calDate.toLocaleString("default", { month: "short" });
  const dateStr = calDate.getDate();
  return (
    <Link
        className="dateCell border-box-border rounded-lg bg-tile-color w-48 text-center flex flex-col items-center py-5"
        to={{
          pathname: '/home/day',
          search: ('?date='+date)
        }}
    >
      <h3 className="text-2xl font-medium text-secondary-text">{monthName}</h3>
      <h1 className="text-6xl text-white font-semibold mt-3">{dateStr}</h1>
      <img src={camIcon} width="100" height="150" alt="camera icon" />
    </Link>
  );
};
