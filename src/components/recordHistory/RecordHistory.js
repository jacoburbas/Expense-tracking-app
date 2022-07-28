import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import updateAccBal from "../exports/updateBalanceFunc";
import Record from "./Record";
import "../../style/history/history.css";

const History = ({ records, setRecords }) => {
  const numberOfRecords = 10;
  let [i, setI] = useState(1);
  let numberToShow = i * 10;

  if (records) {
    function hasMore() {
      if (i * numberOfRecords - records.length >= 0) return true;
      else return false;
    }

    function fetchData() {
      setI(i + 1);
    }

    return (
      <div id="infScrollParent" className="history">
        <InfiniteScroll
          scrollableTarget="infScrollParent"
          dataLength={records.length}
          hasMore={hasMore()}
          endMessage={
            <div id="endBtn">
              <button onClick={fetchData}>Load More records</button>
            </div>
          }
        >
          {records
            .filter((e, indx) => {
              return indx < numberToShow;
            })
            .map((record, index) => (
              <Record
                updateAccBal={updateAccBal}
                key={index}
                id={index}
                record={record}
                records={records}
                setRecords={setRecords}
              />
            ))}
        </InfiniteScroll>
      </div>
    );
  }
};
export default History;
