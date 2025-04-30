const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript'
  };

  function exibeInfoEstudante(objetoEstudante, infoEstudante){
    return objetoEstudante[infoEstudante];
  }

  console.log(exibeInfoEstudante(estudante, 'nome'));
  console.log(exibeInfoEstudante(estudante, 'cpf'));
  