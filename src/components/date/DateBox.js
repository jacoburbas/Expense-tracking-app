import React from "react";
import { date } from "../exports/dateVariables";
import "../../style/timeDate/timeDate.css";

const DateBox = () => {
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthsNames[parseInt(date[1] - 1)];

  return (
    <div className="timeDate">
      <div id="day-month">
        {date[0]} {month},
      </div>
      <div id="year">{date[2]}</div>
    </div>
  );
};

export default DateBox;
