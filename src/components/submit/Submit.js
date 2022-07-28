import React, { useEffect } from "react";
import SubmitAfter from "./SubmitAfter";
import SubmitBefore from "./SubmitBefore";
import "../../style/submit/submit.css";

const Submit = ({ records, setRecords, setResBtn }) => {
  useEffect(() => {
    if (records[records.length - 1].isInitialized) setResBtn(true);
  });

  if (records[records.length - 1].isInitialized) {
    return <SubmitAfter records={records} setRecords={setRecords} />;
  } else {
    return <SubmitBefore setRecords={setRecords} />;
  }
};

export default Submit;
