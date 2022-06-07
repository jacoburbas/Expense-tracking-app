import React, { useState, useEffect } from "react";
import "../style/submit/submit.css";

const Submit = ({ records, date, updateAccBal }) => {
  const [type, setType] = useState("Food & Drinks");
  const [note, setNote] = useState("");
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  if (records[records.length - 1].isInitialized === true) {
    useEffect(() => {
      expenseOptions.forEach((e, index) => {
        document.querySelector("select").add(expenseOptions[index]);
      });
    }, [0]);

    const expenseOptions = [
      new Option("Food & Drinks", "Food & Drinks"),
      new Option("Transport", "Transport"),
      new Option("Clothes", "Clothes"),
      new Option("Home & Utilities", "Home & Utilities"),
      new Option("Hobbys", "Hobbys"),
      new Option("Health", "Health"),
      new Option("Electronics", "Electronics"),
      new Option("Rent", "Rent"),
      new Option("Other", "Other"),
    ];
    const incomeOptions = [
      new Option("Paycheck", "Paycheck"),
      new Option("Investments", "Investments"),
      new Option("Taxrefund", "Taxrefund"),
      new Option("Hobbys", "Hobbys"),
      new Option("Other", "Other"),
    ];

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
        document.location.reload(true);
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
          ></select>
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
        console.log(jsonRecord);
        localStorage.setItem("json", "[" + jsonRecord + "]");
        document.location.reload(true);
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
