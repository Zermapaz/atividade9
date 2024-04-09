function mostrarPreco() {
  const select = document.getElementById("flavor");
  const flavor = select.options[select.selectedIndex].value;
  const priceDiv = document.getElementById("price");

  let price;
  switch (flavor) {
    case "chocolate":
      price = 1.5;
      break;
    case "morango":
    case "creme":
      price = 2.5;
      break;
    case "manga":
      price = 3.2;
      break;
    case "melancia":
      price = 3.4;
      break;
    case "vanilla":
      price = 3;
      break;
    case "ceu-azul":
      price = 3.6;
      break;
    case "brownie":
      price = 4;
      break;
    case "hawaiano":
      price = 5;
      break;
    default:
      price = 0;
  }

  priceDiv.textContent = `O preço do picolé é R$ ${price.toFixed(2)}`;
}