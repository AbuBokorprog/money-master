function getNumberOf(field) {
  const incomeField = document.getElementById(field);
  const incomeFieldTypeString = incomeField.value;
  const incomeFieldTypeNumber = parseInt(incomeFieldTypeString);
  return incomeFieldTypeNumber;
}

function setTotalExpenses(id, value) {
  const setExpenses = document.getElementById(id);
  setExpenses.innerText = value;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodField = getNumberOf("food");
  const rentField = getNumberOf("rent");
  const clothField = getNumberOf("clothes");
  const incomeField = getNumberOf("income");
  if (foodField > 0 || rentField > 0 || clothField > 0 || incomeField > 0) {
    const total = foodField + rentField + clothField;
    const totalBalance = incomeField - total;
    setTotalExpenses("total-expense", total);
    setTotalExpenses("balance", totalBalance);
  } else {
    alert("please, type income, food, rent, cloth");
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const savingsFieldElement = document.getElementById("save-field").value;
  const incomeField = getNumberOf("income");
  const balanceTotal = document.getElementById("balance").innerText;
  if (savingsFieldElement > 0) {
    const savingMultiple = savingsFieldElement / 100;
    const savingPercent = incomeField * savingMultiple;
    setTotalExpenses("saving-amount", savingPercent);
    const remainingOfBalance = balanceTotal - savingPercent;
    setTotalExpenses("remaining-balance", remainingOfBalance);
  } else {
    alert("please, type saving percent");
  }
});
