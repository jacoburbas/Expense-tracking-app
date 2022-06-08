import React, { useState } from "react";
import "../../style/submit/submit.css";
import { expenseOptions, incomeOptions } from "./selectOptions";

const Submit = ({ records, date, updateAccBal, setRecords }) => {
  const array = expenseOptions.map((e, index) => {
    return (
      <option key={index} value={e.value}>
        {e.text}
      </option>
    );
  });

  const [type, setType] = useState("Food & Drinks");
  const [note, setNote] = useState("");
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  if (records[records.length - 1].isInitialized) {
    const handleSubmit = (e) => {
      e.preventDefault();

      if (parseInt(amount)) {
        const newRecord = {
          checked: checked,
          amount: parseInt(amount),
          accState: null,
          type: type,
          date: date,
          note: note,
        };

        // updating local storage
        records.unshift(newRecord);
        updateAccBal(records);
        localStorage.setItem("json", JSON.stringify(records));
        setRecords(JSON.parse(localStorage.getItem("json")));
      } else {
        // add error class to input
        document.querySelector(".amount").classList.add("error");
        setTimeout(
          () => document.querySelector(".amount").classList.remove("error"),
          2000
        );
      }
    };
    return (
      <div className="Submit">
        <form onSubmit={handleSubmit}>
          <div id="name">New transaction</div>
          <label>Amount</label>
          <div className="box-1">
            <input
              className="checkbox"
              type="checkbox"
              value={checked}
              onChange={() => {
                setChecked(!checked);
                if (checked) {
                  setType("Food & Drinks");
                  incomeOptions.forEach((e, index) => {
                    document.querySelector("select").remove(0);
                  });
                  expenseOptions.forEach((e, index) => {
                    document.querySelector("select").add(expenseOptions[index]);
                  });
                } else {
                  setType("Paycheck");
                  expenseOptions.forEach((e, index) => {
                    document.querySelector("select").remove(0);
                  });
                  incomeOptions.forEach((e, index) => {
                    document.querySelector("select").add(incomeOptions[index]);
                  });
                }
              }}
            />

            <input
              className="amount good"
              type="number"
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
            <div className="currency-sign">Pln</div>
          </div>
          <label>Type</label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {array}
          </select>
          <label htmlFor="note">Note</label>
          <input
            type="text"
            placeholder="special note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button id="btn">Add</button>
        </form>
      </div>
    );
  } else {
    const handleInitSubmit = (e) => {
      e.preventDefault();

      if (parseInt(amount)) {
        const InitRecord = {
          checked: true,
          amount: parseInt(amount),
          accState: parseInt(amount),
          type: "Starting amount",
          date: date,
          note: "Your starting point",
          isInitialized: true,
        };
        const jsonRecord = JSON.stringify(InitRecord);

        localStorage.setItem("json", "[" + jsonRecord + "]");

        setRecords(JSON.parse(localStorage.getItem("json")));
        // document.location.reload(true);
      } else {
        document.querySelector(".amount").classList.add("error");
        setTimeout(
          () => document.querySelector(".amount").classList.remove("error"),
          2000
        );
      }
    };
    return (
      <div className="Submit">
        <div id="name">Let's start</div>
        <div className="info-text">
          This is example data. <br />
          In order to start, enter your current account state below
        </div>

        <form onSubmit={handleInitSubmit}>
          <div className="input-box">
            <input
              className="amount good"
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
  }
};

export default Submit;
