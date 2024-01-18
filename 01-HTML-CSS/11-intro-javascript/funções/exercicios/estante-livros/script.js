function livro(nome, ano, autor) {
  const nomeUpper = nome.toUpperCase();
  const anoAtual = 2023 - ano;
  const frase = nomeUpper + " por " + autor;
  const livroObjeto = {
    nome: nomeUpper,
    anoAtual,
    frase,
  };
  return livroObjeto;
}

const livroRetorno = livro("O senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase);
