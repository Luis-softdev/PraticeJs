const dados = require('./dados.json');

console.log(dados);

const chaves = Object.keys(dados);
console.log(chaves);

const produto = {
    id: 1,
    nome: 'Camiseta',
    preco: 10.0,
    quantidade: 5
}

const produtoString = JSON.stringify(produto);
console.log(produtoString); 