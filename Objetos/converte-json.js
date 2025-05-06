const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante);

console.log(stringEstudante.nome); //Não consegue acessar o nome, pois o objeto foi convertido em string

const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante);
console.log(typeof objetoEstudante);

console.log(objetoEstudante.nome); //Agora consegue acessar o nome, pois o objeto foi convertido de volta para JSON