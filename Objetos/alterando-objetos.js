const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript'
  };

estudante.telefone = '11999999999';
console.log(estudante.telefone);
  
estudante.nome = 'Lucas Silva';
console.log(estudante.nome);

const estudante2 = {}
estudante2.nome = 'Ana Silva';
console.log(estudante2);

delete estudante2.nome;
console.log(estudante2.nome);
