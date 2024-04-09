function toggleParidade() {
  const number = parseInt(document.getElementById("number").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(number)) {
    resultDiv.textContent = "Por favor, insira um número válido.";
    return;
  }

  const novoNumero = number % 2 === 0 ? number + 1 : number - 1;

  resultDiv.textContent = `Número original: ${number}. Número transformado: ${novoNumero}`;
}