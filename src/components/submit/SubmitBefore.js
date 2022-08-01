import React, { useState } from "react";
import { formattedDate } from "../exports/dateVariables";

const SubmitBefore = ({ setRecords }) => {
  const [amount, setAmount] = useState(0);

  const handleInitSubmit = (e) => {
    e.preventDefault();

    if (parseInt(amount)) {
      const InitRecord = {
        checked: true,
        amount: parseInt(amount),
        accState: parseInt(amount),
        type: "Starting amount",
        date: formattedDate,
        note: "Your starting point",
        isInitialized: true,
      };
      const jsonRecord = JSON.stringify(InitRecord);

      localStorage.setItem("json", "[" + jsonRecord + "]");

      setRecords(JSON.parse(localStorage.getItem("json")));
      setAmount(0);
    } else {
      document.querySelector(".amountBefore").classList.add("error");
      setTimeout(
        () => document.querySelector(".amountBefore").classList.remove("error"),
        2000
      );
    }
  };

  return (
    <div className="Submit SubmitBefore">
      <div id="name">Let's start</div>
      <div className="info-text">
        This is example data. <br />
        You can add new or delete previous records and play with charts. To
        start, enter your current account state:
      </div>

      <form onSubmit={handleInitSubmit}>
        <div className="input-box">
          <input
            className="amountBefore good"
            type="number"
            name="amount"
            value={amount}
            onBlur={(e) => {
              !e.target.value
                ? setAmount(0)
                : setAmount(Math.abs(e.target.value));
            }}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          Pln
        </div>
        <button id="btn">Start</button>
      </form>
    </div>
  );
};

export default SubmitBefore;
