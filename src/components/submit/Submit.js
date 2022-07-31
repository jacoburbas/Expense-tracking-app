import React, { useEffect } from "react";
import SubmitAfter from "./SubmitAfter";
import SubmitBefore from "./SubmitBefore";
import "../../style/submit/submit.css";

const Submit = ({ records, setRecords, setResBtn }) => {
  useEffect(() => {
    if (records[records.length - 1].isInitialized) setResBtn(true);
  });

  if (records[records.length - 1].isInitialized) {
    return (
      <div className="SubmitContainer">
        <SubmitAfter records={records} setRecords={setRecords} />
      </div>
    );
  } else {
    return (
      <div className="SubmitContainer">
        <SubmitAfter records={records} setRecords={setRecords} />
        <SubmitBefore setRecords={setRecords} />
      </div>
    );
  }
};

export default Submit;
