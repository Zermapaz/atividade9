function sortValues() {
  const value1 = parseInt(document.getElementById("value1").value);
  const value2 = parseInt(document.getElementById("value2").value);
  const value3 = parseInt(document.getElementById("value3").value);
  const value4 = parseInt(document.getElementById("value4").value);

  const sortedValues = [value1, value2, value3, value4].sort((a, b) => b - a);

  displayResult(sortedValues);
}

function displayResult(values) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Valores em ordem decrescente: ${values.join(", ")}</p>`;
}