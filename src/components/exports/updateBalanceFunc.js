export default function updateAccBal(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (i !== array.length - 1) {
      array[i].checked
        ? (array[i].accState = array[i + 1].accState + array[i].amount)
        : (array[i].accState = array[i + 1].accState - array[i].amount);
    }
  }
}
