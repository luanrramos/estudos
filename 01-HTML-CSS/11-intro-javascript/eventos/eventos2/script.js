var agora = new Date();
var anoA = agora.getFullYear();

function livro(nome, ano, autor) {
  const nomeM = nome.toUpperCase();
  const totAno = anoA - ano;
  const frase = nome + " por " + autor;

  return {
    nomeM,
    totAno,
    frase,
  };
}

livro("O senhor dos anéis", 1954, "J. R. R. Tolkien");
const retorno = livro("O senhor dos anéis", 1954, "J. R. R. Tolkien");
console.log(retorno);
