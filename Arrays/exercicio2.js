const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function concatenaArray(array1, array2) {
    console.log(array1.concat(array2)); 
}

concatenaArray(array1, array2);

//////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const halfNumbers = numbers.slice(3, 8);

console.log(halfNumbers);

//////////////////

const frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Uva'];
frutas.splice(2, 2, 'Kiwi', 'Maca');

console.log(frutas);

//////////////////

const menuPrincipal = ['Arroz', 'Feijao', 'Macarrao', 'Ovo', 'Leite'];
const menuSobremesas = ['Pudim', 'Bolo', 'Torta'];

const menuCompleto = menuPrincipal.concat(menuSobremesas);

console.log(menuCompleto);

//////////////////

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(valorInicial++);
    }
    matriz.push(linha);
  }

console.log('Matriz de Duas dimensões:');
console.log(matriz);

matriz.forEach(row => console.log(row));


console.log('Elemento na segunda linha e terceira coluna', matriz[1][2]);

matriz[2][1] = 15;
console.log('Matriz após adicionar 15 na segunda linha e terceira coluna:', matriz);

//////////////////