function concatArrays(...arrays) {
  return [].concat(...arrays);
}   

console.log(concatArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));

/////////

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaValores = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somaValores); 

/////////

const coresLista1 = ['azul', 'verde', 'vermelho', 'laranja'];
const coresLista2 = ['amarelo', 'roxo', 'laranja', 'azul'];

const coresUnicas = [...new Set(coresLista1.concat(coresLista2))];
console.log(coresUnicas);

/////////

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(numeros){
    return numeros.filter(numero => numero % 2 === 0);
}

console.log(filtrarPares(numeros));


/////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarNums(nums){
    return nums.filter(num => num % 3 === 0 && num > 5);
}

console.log(filtrarNums(nums));

/////////

function somaDeTodosNumeros(arrayNumeros){
    return arrayNumeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

}

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somaDeTodosNumeros(numerosArray));
