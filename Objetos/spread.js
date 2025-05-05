const estudante = {
    nome: 'Lucas',
    cpf: '12345678900',
    idade: 20,
    turma: 'Javascript',
    bolsista: true,
    telefones: ['11999999999', '11999999998'],
    enderecos: [{
        rua: 'Rua dos bobos',
        numero: '45',
        complemento: 'Apto 101',
        },
        {
        rua: 'Rua dos estrondos',
        numero: '45',
        complemento: null,
    }]
  };

  function exibirTelefone(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
  }

  // exibirTelefone(estudante.telefones[0], estudante.telefones[1]);
  exibirTelefone(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
}

console.log(dadosEnvio);