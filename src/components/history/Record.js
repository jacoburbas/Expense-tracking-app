import React from "react";
import "../../style/history/record.css";

const Record = ({ records, record, id, updateAccBal, setRecords }) => {
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
        {record.type === "Transport" ? (
          <i className="fa-solid fa-bus"></i>
        ) : record.type === "Food & Drinks" ? (
          <i className="fa-solid fa-utensils"></i>
        ) : record.type === "Clothes" ? (
          <i className="fa-solid fa-shirt"></i>
        ) : record.type === "Hobbys" ? (
          <i className="fa-solid fa-camera-retro"></i>
        ) : record.type === "Health" ? (
          <i className="fa-solid fa-pills"></i>
        ) : record.type === "Electronics" ? (
          <i className="fa-solid fa-computer"></i>
        ) : record.type === "Home & Utilities" ? (
          <i className="fa-solid fa-house-chimney"></i>
        ) : record.type === "Other" ? (
          <i className="fa-solid fa-circle-question"></i>
        ) : record.type === "Paycheck" ? (
          <i className="fa-solid fa-money-check-dollar"></i>
        ) : record.type === "Investments" ? (
          <i className="fa-solid fa-chart-line"></i>
        ) : record.type === "Taxrefund" ? (
          <i className="fa-solid fa-file-invoice-dollar"></i>
        ) : record.type === "Rent" ? (
          <i className="fa-solid fa-file-invoice-dollar"></i>
        ) : record.type === "Starting amount" ? (
          <i className="fa-solid fa-flag-checkered"></i>
        ) : (
          ""
        )}
      </div>
      <div className="text-box">
        {record.note ? <div className="note-box">{record.note}</div> : ""}

        <div className="type-date-box">
          {record.type} <span>&#183;</span> {record.date}
        </div>
      </div>
      {record.checked ? (
        <span className="green record-amount"> {"+ " + record.amount}</span>
      ) : (
        <span className="red record-amount">{"- " + record.amount}</span>
      )}
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
export default Record;
