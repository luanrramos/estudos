// Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.
function clicar() {
  let cf = document.getElementById("rad1");
  let fc = document.getElementById("rad2");
  let valor = parseInt(document.getElementById("val").value);
  let resp = document.getElementById("resp");
  if (cf.checked === false && fc.checked === false) {
    alert("Preencha os campos corretamente!");
  } else {
    if (cf.checked) {
      celFah(valor);
    } else if (fc.checked) {
      fahCel(valor);
    }
  }
}
function celFah(valor) {
  let nvalor = valor * (9 / 5) + 32;
  resp.innerText = `Aqui está: ${nvalor}`;
}

function fahCel(valor) {
  let nvalor = ((valor - 32) * 5) / 9;
  resp.innerText = `Aqui está: ${nvalor}`;
}
