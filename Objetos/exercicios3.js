const pessoa = {
    nome: "Luis",
    notas: [7, 10, 10],
}

calcularMediaNotas = (notas) => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

const classificarDesempenho = (pessoa) => {
    const media = calcularMediaNotas(pessoa.notas);
    if (media >= 9) {
        return 'Desempenho Excelente';
    } else if (media >= 7.6 && media < 8.9) {
        return 'Desempenho Bom';
    } else if (media >= 6 && media < 7.5) {
        return 'Desempenho Regular';
    } else {
        return 'Desempenho insuficiente';
    }
}
console.log(calcularMediaNotas(pessoa.notas));
console.log(classificarDesempenho(pessoa));

//////////////////

const carro = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2020,
    cor: 'preto',
    placa: 'ABC-1234',
};

for (let i in carro) {
    const tipo = typeof carro[i];
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${i} tem o valor ${carro[i]}`); ;
        
    }
  }

  carro.ligado = true;
    carro.ligar = function() {
        this.ligado = true;
        console.log('Carro ligado!');
    };

    carro.desligar = function() {
        this.ligado = false;
        console.log('Carro desligado!');
    };

    carro.obterDetalhes = function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Ligado: ${this.ligado}`;
    }

console.log(carro.obterDetalhes());
carro.ligar();
console.log(carro.obterDetalhes());
carro.desligar();
console.log(carro.obterDetalhes());


Object.defineProperty(carro, 'placa', {enumerable: false});

console.log(`Propriedades enumeráveis do carro:`);
for (let prop in carro) {
    console.log(`${prop}: ${carro[prop]}`);
}


const carroNovo = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2021,
    cor: 'branco'
}

const carroNovoComDetalhes = {
    ...carro,
    ...carroNovo,
}

console.log(`Propriedades do carro novo:`);
console.log(carroNovoComDetalhes);

carroNovoComDetalhes.modelo = 'Onix Plus';
carroNovoComDetalhes.ano = 2022;

console.log(`Propriedades do carro novo atualizado:`);
console.log(carroNovoComDetalhes);
