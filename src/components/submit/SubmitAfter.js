import React, { useState } from "react";
import updateAccBal from "../exports/updateBalanceFunc";
import { formattedDate } from "../exports/dateVariables";
import {
  expenseOptions,
  incomeOptions,
  options,
} from "../exports/selectOptions";

const SubmitAfter = ({ records, setRecords }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Food & Drinks");
  const [note, setNote] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(amount)) {
      const newRecord = {
        checked: checked,
        amount: parseInt(amount),
        accState: null,
        type: type,
        date: formattedDate,
        note: note,
      };

      // updating local storage
      records.unshift(newRecord);
      updateAccBal(records);
      localStorage.setItem("json", JSON.stringify(records));
      setRecords(JSON.parse(localStorage.getItem("json")));
      setAmount("");
      setNote("");
    } else {
      // add error class to input
      document.querySelector(".amount").classList.add("error");
      setTimeout(
        () => document.querySelector(".amount").classList.remove("error"),
        2000
      );
    }
  };

  const handleCheckbox = () => {
    setChecked(!checked);
    if (checked) {
      setType("Food & Drinks");
      incomeOptions.forEach(() => {
        document.querySelector("select").remove(0);
      });
      expenseOptions.forEach((e, index) => {
        document.querySelector("select").add(expenseOptions[index]);
      });
    } else {
      setType("Paycheck");
      expenseOptions.forEach(() => {
        document.querySelector("select").remove(0);
      });
      incomeOptions.forEach((e, index) => {
        document.querySelector("select").add(incomeOptions[index]);
      });
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
            onChange={handleCheckbox}
          />
          <input
            placeholder="0"
            className="amount good"
            type="number"
            value={amount}
            onBlur={(e) => {
              !e.target.value
                ? setAmount()
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
          {options}
        </select>
        <label>Note</label>
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
};

export default SubmitAfter;
