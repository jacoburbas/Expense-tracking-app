import React from "react";
export const expenseOptions = [
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

export const incomeOptions = [
  new Option("Paycheck", "Paycheck"),
  new Option("Investments", "Investments"),
  new Option("Taxrefund", "Taxrefund"),
  new Option("Hobbys", "Hobbys"),
  new Option("Other", "Other"),
];

export const options = expenseOptions.map((e, index) => {
  return (
    <option key={index} value={e.value}>
      {e.text}
    </option>
  );
});
