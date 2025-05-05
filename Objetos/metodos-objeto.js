const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript',
    bolsista: true,
    telefones: ['11999999999', '11999999998'],
    // enderecos: [{
    //     rua: 'Rua dos bobos',
    //     numero: '45',
    //     complemento: 'Apto 101',
    //     },
    //     {
    //     rua: 'Rua dos estrondos',
    //     numero: '45',
    //     complemento: null,
    // }]
  };


  const chavesObjeto = Object.keys(estudante);

  if(!chavesObjeto.includes('enderecos')){
    console.error('Endereços não existe no objeto estudante');
  }