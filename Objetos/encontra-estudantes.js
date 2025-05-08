const estudantes = require('./estudantes.json');

function buscaInfo (lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Izaak')
console.log(estudanteEncontrado)

const telefoneEstudante = buscaInfo(estudantes, 'telefone', '5193301028')
console.log(telefoneEstudante)