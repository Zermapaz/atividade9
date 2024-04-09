function verificarTipo() {
  const letter = document.getElementById("letter").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (letter.length !== 1 || !/[a-z]/.test(letter)) {
    resultDiv.textContent = "Por favor, insira uma única letra válida.";
    return;
  }

  if (/[aeiou]/.test(letter)) {
    resultDiv.textContent = `${letter} é uma vogal.`;
  } else {
    resultDiv.textContent = `${letter} é uma consoante.`;
  }
}