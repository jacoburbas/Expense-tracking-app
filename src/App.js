import React, { useState, useEffect } from "react";
import BalanceHistory from "./components/balanceHistory/BalanceHistory";
import Submit from "./components/submit/Submit";
import ResetButton from "./components/resetButton/ResetButton";
import History from "./components/recordHistory/RecordHistory";
import RightCharts from "./components/rightCharts/Charts";
import DateBox from "./components/date/DateBox";
import BottomCharts from "./components/bottomCharts/BottomCharts";
import Footer from "./components/footer/Footer";
import updateAccBal from "./components/exports/updateBalanceFunc";
import { exampleData } from "./components/exports/exampleData";
import "../src/components/exports/chartJSLibs";

const App = () => {
  useEffect(() => {
    updateAccBal(records);
  }, []);

  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("json") || "[]")
  );
  const [resBtn, setResBtn] = useState(false);

  if (!records.length) {
    localStorage.setItem("json", JSON.stringify(exampleData));
    setRecords(JSON.parse(localStorage.getItem("json") || "[]"));
  }

  return (
    <div className="App">
      <div className="section">
        <DateBox />
        <BalanceHistory records={records} />
        <Submit
          records={records}
          setRecords={setRecords}
          setResBtn={setResBtn}
        />
        {resBtn ? <ResetButton /> : ""}
        <History records={records} setRecords={setRecords} />
        <RightCharts records={records} />
      </div>
      <div className="section" id="sec2">
        <BottomCharts records={records} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
