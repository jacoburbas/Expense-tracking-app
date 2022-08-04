import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import DebitCard from "./DebitCard";
import "../../style/balance/balance.css";

const BalanceHistory = ({ records }) => {
  useEffect(() => {
    setCurrentBalance(records[0].accState);
  });

  const [currentBalance, setCurrentBalance] = useState();

  return (
    <div className="balance">
      <DebitCard currentBalance={currentBalance} />
      <div id="balance-box">
        <div id="name">Balance history</div>
        <LineChart records={records} />
      </div>
    </div>
  );
};

export default BalanceHistory;
