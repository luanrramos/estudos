var input = document.querySelector("input");
var num = Number(input.value);
var resp = parouimpar(num);

function parouimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
  var div = document.querySelector("div");
  div.innerHTML += `<p>O resultado foi ${resp}</p>`;
}
