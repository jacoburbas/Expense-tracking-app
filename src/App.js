import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import Submit from "./components/submit/Submit";
import ResetButton from "./components/resetButton/ResetButton";
import History from "./components/history/History";
import Charts from "./components/rightCharts/Charts";
import TimeDate from "./components/TimeDate";
import BottomCharts from "./components/bottomCharts/BottomCharts";
import Footer from "./components/Footer";
import { exampleData } from "./components/exampleJsonData";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarElement,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  ChartDataLabels,
  Legend,
  Tooltip,
  Title,
  Filler
);

const App = () => {
  useEffect(() => {
    updateAccBal(records);
  }, []);

  const todaysFullDate = new Date();
  const dd = String(todaysFullDate.getDate()).padStart(2, "0");
  const mm = String(todaysFullDate.getMonth() + 1).padStart(2, "0");
  const yyyy = String(todaysFullDate.getFullYear());
  const formattedDate = yyyy + "-" + mm + "-" + dd;
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("json") || "[]")
  );
  const [resBtn, setResBtn] = useState(false);

  if (!records.length) {
    localStorage.setItem("json", JSON.stringify(exampleData));
    setRecords(JSON.parse(localStorage.getItem("json") || "[]"));
  }

  function updateAccBal(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (i !== array.length - 1) {
        array[i].checked
          ? (array[i].accState = array[i + 1].accState + array[i].amount)
          : (array[i].accState = array[i + 1].accState - array[i].amount);
      }
    }
  }
  return (
    <div className="App">
      <div className="section">
        <TimeDate date={[dd, mm, yyyy]} />
        <Balance records={records} />
        <Submit
          records={records}
          date={formattedDate}
          updateAccBal={updateAccBal}
          setRecords={setRecords}
          setResBtn={setResBtn}
        />
        {resBtn ? <ResetButton /> : ""}
        <History
          records={records}
          updateAccBal={updateAccBal}
          setRecords={setRecords}
        />
        <Charts records={records} />
      </div>

      <div id="sec2" className="section">
        <BottomCharts records={records} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
