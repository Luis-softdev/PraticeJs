const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript',
    bolsista: true,
    telefones: ['11999999999', '11999999998'],
    media: 8.5,
    estaAprovado: (mediaBase) =>{
        return this.media >= mediaBase ? true : false;
    }
  };

  console.log(estudante.estaAprovado(7));
  

