const animais = require ('./animais.json');
console.log(`Imprimindo o arquivo JSON:`);
console.log(animais);

const stringAnimais = JSON.stringify(animais);
console.log(`Imprimindo o arquivo JSON convertido para string:`);
console.log(stringAnimais);

const objetoAnimais = JSON.parse(stringAnimais);
console.log(`Imprimindo o arquivo JSON convertido de volta para objeto:`);
console.log(objetoAnimais);

const novoAnimal = {
    id: 4,
    nome: 'Cachorro',
    idade: 5,
    especie: 'Canis lupus familiaris'
};

objetoAnimais.animais.push(novoAnimal);

const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if(animalParaModificar) {
    animalParaModificar.especie = 'Vira-lata';
}

const animalParaRemover = objetoAnimais.animais.find(animal => animal.id === 3);
if(animalParaRemover !== -1) {
    objetoAnimais.animais.splice(animalParaRemover, 1);
}

console.log(`Imprimindo o arquivo JSON modificado:`);
console.log(objetoAnimais);
