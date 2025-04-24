const itens = [12, 'maçã', 3.14, 'banana', 42, 'laranja', 7.5, 'uva', 100, 'abacaxi'];

for (let i = 0; i < itens.length; i++) {
    console.log(itens[i]);
}

/////////////////////


const nomes = ['João', 'Juliana', 'Ana', 'Caio'];
const idades = [10, 8, 15, 12];

const lista = [nomes, idades];

function exibeNomeEIdade(nome){
    if(lista[0].includes(nome)){
        const indice = lista[0].indexOf(nome);
        const idadeNome = lista[1][indice];
        console.log(`A idade de ${nome} é ${idadeNome}`);
    }else{
        console.log('Nome nao encontrado');
    }
}

exibeNomeEIdade('Ana');
exibeNomeEIdade('Luis');

/////////////////////

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somaNumeros = 0;
for (let numero of numerosInteiros) {
    somaNumeros += numero;

}

console.log(`A soma dos números inteiros é:`, somaNumeros);

/////////////////////

const numerosAleatorios = [10, 5, 8, 12, 3, 7, 15, 2, 9, 4];

function imprimeMaiorEMenor(numerosAleatorios) {
    let maior = numerosAleatorios[0];
    let menor = numerosAleatorios[0];

    for(let i = 0; i < numerosAleatorios.length; i++) {
        if(numerosAleatorios[i] > maior) {
            maior = numerosAleatorios[i];
        }
        if(numerosAleatorios[i] < menor) {
            menor = numerosAleatorios[i];
        }
    }

    console.log(`O maior número é: ${maior}`);
    console.log(`O menor número é: ${menor}`);
}

imprimeMaiorEMenor(numerosAleatorios);

/////////////////////

const outrosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Os números pares são:`);
for(i = 0; i < outrosNumeros.length; i++) {
    if(outrosNumeros[i] % 2 === 0) {
        console.log(outrosNumeros[i]);
    }
}

/////////////////////

const numerosFinais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < numerosFinais.length; i++) {
    soma += numerosFinais[i];
  }
  
const media = soma / numerosFinais.length;
  
console.log(`A média das notas é:`, media);