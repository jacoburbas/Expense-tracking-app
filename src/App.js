import React, { useEffect } from "react";
import Balance from "./components/Balance";
import Submit from "./components/Submit";
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

let jsonRecords = JSON.parse(localStorage.getItem("json") || "[]");

if (!jsonRecords.length) {
  localStorage.setItem("json", JSON.stringify(exampleData));
}

jsonRecords = JSON.parse(localStorage.getItem("json") || "[0]");

//records without the initializer record
const jsonRecordsNoInit = jsonRecords.filter((e, index) => {
  return index !== jsonRecords.length - 1;
});

const App = () => {
  useEffect(() => {
    updateAccBal(jsonRecords);
  }, []);

  const todaysFullDate = new Date();
  const dd = String(todaysFullDate.getDate()).padStart(2, "0");
  const mm = String(todaysFullDate.getMonth() + 1).padStart(2, "0");
  const yyyy = String(todaysFullDate.getFullYear());
  const formattedDate = yyyy + "-" + mm + "-" + dd;

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
        <Balance records={jsonRecords} />
        <Submit
          records={jsonRecords}
          date={formattedDate}
          updateAccBal={updateAccBal}
        />
        <History records={jsonRecords} updateAccBal={updateAccBal} />
        <Charts records={jsonRecordsNoInit} />
      </div>

      <div id="sec2" className="section">
        <BottomCharts records={jsonRecordsNoInit} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
