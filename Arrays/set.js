const nomes = [ 'Lucas', 'João', 'Maria', 'Ana', 'Pedro', 'Lucas', 'João', 'Maria', 'Ana', 'Pedro' ];

//const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);