const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript',
    bolsista: true,
    telefones: ['11999999999', '11999999998'],
    endereco: [{
      rua: 'Rua dos bobos',
      numero: '45',
      complemento: 'Apto 101',
    }]
  };

  estudante.endereco.push({
      rua: 'Rua das flores',
      numero: '474',
      complemento: null,
    });


// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);


const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);
