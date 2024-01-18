const botao = document.querySelector("button");
function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (div.innerText < 10) {
    div.innerText = total;
    console.log(total);
  }
}

if (document.querySelector(".btn")) {
  botao.addEventListener("click", somar);
}
