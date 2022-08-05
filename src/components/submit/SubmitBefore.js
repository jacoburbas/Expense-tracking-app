import React, { useState } from "react";
import { formattedDate } from "../exports/dateVariables";

const SubmitBefore = ({ setRecords }) => {
  const [amount, setAmount] = useState("");

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
      setAmount("");
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
        You can add or delete records. To start, enter your current account
        state:
      </div>

      <form onSubmit={handleInitSubmit}>
        <div className="input-box">
          <input
            placeholder="0"
            className="amountBefore good"
            type="number"
            name="amount"
            value={amount}
            onBlur={(e) => {
              !e.target.value
                ? setAmount("")
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
