/*this assignment is meant to show a list of bills that are due and can be deleted once complete*/

//here is my submit button and the clear button for each row.
let id = 0;
let button = document.getElementById("add");

button.addEventListener("click", () => {
  let table = document.getElementById("table");
  let row = table.insertRow(1);

  row.id = `item-${id}`;
  row.insertCell(0).innerHTML = document.getElementById("business-bill").value;
  row.insertCell(1).innerHTML = document.getElementById("amount-due").value;
  row.insertCell(2).innerHTML = document.getElementById("due-date").value;
  row.insertCell(3).innerHTML = document.getElementById("payment-method").value;
  let actions = row.insertCell(4);
  let elementToClear = clearButton(id);
  console.log(row);
  actions.appendChild(elementToClear);
  //this clears the form once submit is pressed.
  document.getElementById("business-bill").value = "";
  document.getElementById("amount-due").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("payment-method").value = "";
});
//this is the button that appears next to every row to be able to clear it once complete.
function clearButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-secondary";
  btn.innerHTML = "Clear";
  btn.onclick = () => {
    console.log("Clearing row `item-${id}`");
    let elementToClear = document.getElementById(`item-${id}`);
    elementToClear.parentNode.removeChild(elementToClear);
  };
  return btn;
}
