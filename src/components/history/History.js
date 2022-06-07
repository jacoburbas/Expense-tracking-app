import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Record from "./Record";
import "../../style/history/history.css";

const History = ({ records, updateAccBal }) => {
  if (records) {
    const numberOfRecords = 10;
    const [divs, setDivs] = useState(records.slice(0, numberOfRecords));
    let [i, setI] = useState(1);

    function hasMore() {
      if (i * numberOfRecords - records.length >= 0) {
        return true;
      } else {
        return false;
      }
    }

    function fetchData() {
      setDivs(
        [...divs].concat(
          [...records].slice(i * numberOfRecords, (i + 1) * numberOfRecords)
        )
      );

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
              <button onClick={fetchData}>Load More divs</button>
            </div>
          }
        >
          {divs.map((record, index) => (
            <Record
              updateAccBal={updateAccBal}
              key={index}
              id={index}
              record={record}
              records={records}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
};
export default History;
