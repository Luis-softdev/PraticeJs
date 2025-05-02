const pessoa = {
    nome: String,
    idade: Number,
    solteiro: Boolean,
    hobbies: [Array],
};

pessoa.nome = 'Lucas';
pessoa.idade = 20;
pessoa.solteiro = true;
pessoa.hobbies = ['jogar', 'estudar', 'ler'];

pessoa.endereco = {
    rua: 'Rua dos banzero',
    numero: 45,
    complemento: 'Apto 101',
};

mostrarInfoPessoa = (pessoa) => {
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
    console.log(`Endereço: ${pessoa.endereco.rua}, Numero ${pessoa.endereco.numero} Complemento: ${pessoa.endereco.complemento} (Tipo: ${typeof pessoa.endereco})`);
    
}

mostrarInfoPessoa(pessoa);


const listaPessoas = [
    { nome: 'Lucas', idade: 20, cidade: 'Belo Horizonte'},
    { nome: 'Ana', idade: 25, cidade: 'São Paulo'},
    { nome: 'Carlos', idade: 30, cidade: 'Rio de Janeiro'},
];

function mostrarListaPessoas(lista) {
    lista.forEach((pessoa) => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}   


function mostrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

mostrarListaPessoas(listaPessoas);

listaPessoas.push({ nome: 'Mariana', idade: 28, cidade: 'Belo Horizonte'});
mostrarListaPessoas(listaPessoas);

const pessoasBH = mostrarPorCidade(listaPessoas, 'Belo Horizonte');
console.log('Pessoas de Belo Horizonte:');
mostrarListaPessoas(pessoasBH);


const calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtracao: function(a, b){
        return a - b;
    },
    multiplicacao: function(a, b){
        return a * b;
    },
    divisao: function(a, b){
        if (b!==0){
            return a / b;
        }else{
            return 'Divisão por zero não é permitida!';
        }
    },
    calcularMedia: function(numeros){
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
}

console.log(calculadora.soma(10, 5)); 
console.log(calculadora.subtracao(10, 5)); 
console.log(calculadora.multiplicacao(10, 5)); 
console.log(calculadora.divisao(10, 5)); 
console.log(calculadora.divisao(10, 0)); 
console.log(calculadora.calcularMedia([10, 8, 6, 4, 2])); 



const contaBancaria = {
    titular: 'Lucas',
    saldo: 1000,
    depositar: function(valor) {
        return this.saldo += valor;
    },
    sacar: function(valor){
        if (valor > this.saldo) {
            return 'Saldo insuficiente!';
        } else {
            return this.saldo -= valor;
        }
    }
}

const cliente = {
    nome: 'Lucas',
    conta: contaBancaria,
};

function mostrarSaldo(cliente){
    console.log(`Cliente: ${cliente.nome}, Saldo: ${cliente.conta.saldo}`);	
}

contaBancaria.depositar(500);
console.log(`Depósito: 500, Novo Saldo: ${contaBancaria.saldo}`);
contaBancaria.sacar(200);
console.log(`Saque: 200, Novo Saldo: ${contaBancaria.saldo}`);

mostrarSaldo(cliente);







