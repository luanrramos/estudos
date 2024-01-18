// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.

let c = 0;
let lista = [];
let maior = 0,
  menor = 0;
let resp = document.querySelector("div#resp");

function clicar() {
  let numero = parseInt(document.querySelector("input#btn").value);

  if (c < 3) {
    lista[c] = numero;

    if (c === 0) {
      maior = numero;
      menor = numero;
    } else {
      if (numero > maior) {
        maior = numero;
      }
      if (numero < menor) {
        menor = numero;
      }
    }
    console.log(c, lista);
    c++;
  } else {
    alert("Refazer!");
  }

  if (c === 3) {
    resp.innerHTML = `<p>O maior número digitado entre os 3 foi ${maiorN()}</p>`;
    resp.innerHTML += `<p>O menor número digitado entre os 3 foi ${menorN()}</p>`;
  }
}

function reiniciar() {
  resp.innerHTML = "<p></p>";
  lista = [];
  c = 0;
}

function maiorN() {
  return maior;
}

function menorN() {
  return menor;
}
