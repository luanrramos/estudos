// 1. Em que posição está a Ferrari?
let x = 1;
let carros = ["BMW", "Ferrari", "Mercedes"];

console.log("1. " + carros[x]);

// 2. Troque a Ferrari por audi

carros[1] = "Audi";
console.log(carros);

// 3. Adicione volvo a lista

carros[3] = "Volvo";
console.log(carros);
 
// 4. Exibir a quantidade de itens na lista

qntLista = carros.length;
console.log("4. Quantidade de itens no array: " + qntLista);
