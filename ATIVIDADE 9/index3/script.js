let earningsTotal = 0;
let expensesTotal = 0;

function calculateBalance() {
  const month = document.getElementById("month").value;
  const earnings = parseFloat(document.getElementById("earnings").value);
  const expenses = parseFloat(document.getElementById("expenses").value);

  earningsTotal += earnings;
  expensesTotal += expenses;

  const balance = earningsTotal - expensesTotal;

  displayResults(month, earnings, expenses, balance);
}

function displayResults(month, earnings, expenses, balance) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML += `<p>${getMonthName(month)}:</p>`;
  resultsDiv.innerHTML += `<p>Ganho Bruto: R$ ${earnings.toFixed(2)}</p>`;
  resultsDiv.innerHTML += `<p>Gastos: R$ ${expenses.toFixed(2)}</p>`;
  resultsDiv.innerHTML += `<p>Saldo: R$ ${balance.toFixed(2)}</p>`;
  resultsDiv.innerHTML += `<hr>`;
}

function getMonthName(month) {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return months[month - 1];
}