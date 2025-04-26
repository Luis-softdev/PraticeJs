const elementos  = ['20', 'arvore', '5241', 'cachorro'];

elementos.forEach((elemento, indice) => {
    console.log(`Elemento ${indice}: ${elemento}`);
});
    
////////////

function executaOperacaoEmArray (array, funcaoCallback){
    return array.map(funcaoCallback);
}

function dobraNumero(num){
    return num * 2;
}

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); 


////////////


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroProcurado = 30;
let posicao = -1;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === numeroProcurado){
        posicao = i;
        break;
    }
}

console.log(`O número ${numeroProcurado} foi encontrado na posição ${posicao}`);


////////////

const turmaA = [
    'Ana',
    'Luis',
    'Pedro',
    'Maria',
];

const turmaB = [
    'João',
    'Carla',
    'Lucas',
    'Fernanda',
];

const todasAsTurmas = turmaA.concat(turmaB);

const alunoProcurado = 'Josias'; 
const alunoEncontrado = todasAsTurmas.find(aluno => aluno === alunoProcurado);

if(alunoEncontrado){
    console.log(`O aluno ${alunoEncontrado} foi encontrado`);
}else{
    console.log(`O aluno ${alunoProcurado} não foi encontrado`);
}

////////////

const numerosAleatorios = [10, 5, 8, 12, 3, 7, 15, 2, 9, 4];

numerosAleatorios.forEach(numero => {
    const resultado = numero * 3;
    console.log(resultado);
});

const indiceDoNumero15 = numerosAleatorios.findIndex(numero => numero === 15);
console.log(`O índice do número 15 é: ${indiceDoNumero15}`);

////////////