import React from "react";
import { icons } from "../exports/recordsIcons";
import "../../style/history/record.css";

const RecordHistory = ({ records, record, id, updateAccBal, setRecords }) => {
  const deleteRecord = () => {
    const newjson = records.filter((e, index) => id !== index);
    updateAccBal(newjson);
    localStorage.setItem("json", JSON.stringify(newjson));
    setRecords(newjson);
  };

  return (
    <div
      className={
        record.amount >= 1000
          ? "record size-3"
          : record.amount >= 100
          ? "record size-2"
          : "record size-1"
      }
    >
      <div id="icon-box">
        {icons.filter((e) => e.name === record.type).map((e) => e.icon)}
      </div>
      <div className="text-box">
        {record.note ? <div className="note-box">{record.note}</div> : ""}

        <div className="type-date-box">
          {record.type} <span>&#183;</span> {record.date}
        </div>
      </div>
      <span
        className={record.checked ? "green record-amount" : "red record-amount"}
      >
        {(record.checked ? "+" : "-") + record.amount}
      </span>

      {/*hide delete button on starting record*/}
      {id === records.length - 1 ? (
        <button className="hide"></button>
      ) : (
        <button className="delete-button" onClick={deleteRecord}>
          x
        </button>
      )}
    </div>
  );
};
export default RecordHistory;
