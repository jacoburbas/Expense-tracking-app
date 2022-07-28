const todaysFullDate = new Date();
const dd = String(todaysFullDate.getDate()).padStart(2, "0");
const mm = String(todaysFullDate.getMonth() + 1).padStart(2, "0");
const yyyy = String(todaysFullDate.getFullYear());

export const formattedDate = yyyy + "-" + mm + "-" + dd;

export const date = [dd, mm, yyyy];

export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
