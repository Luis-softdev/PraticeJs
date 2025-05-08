const livros = [
    {
        id: 1,
        titulo: "Harry Potter e a pedra filosofal",
        autor: "J.K. Rowling",
        ano: 1997,
    },
    {
        id: 2,
        titulo: "Harry Potter e a câmara secreta",
        autor: "J.K. Rowling",
        ano: 1998,
    },
    {
        id: 3,
        titulo: "Harry Potter e o prisioneiro de Azkaban",
        autor: "J.K. Rowling",
        ano: 1999,
    }
]

// Função para encontrar um livro pelo ID
function encontrarLivroPorId(id) {
    return livros.find(livro => livro.id === id || null);
}

console.log(encontrarLivroPorId(1));

//////////////////////

const filmes = [
    {
        id: 1,
        titulo: "Homem-Aranha",
        autor: "Sam Raimi",
        ano: 2002
    }, 
    {
        id: 2,
        titulo: "Batman",
        autor: "Christopher Nolan",
        ano: 2005
    },
    {
        id: 3,
        titulo: "Superman",
        autor: "Richard Donner",
        ano: 1978
    }
]

// Função para encontrar filtrar filmes por ano

function filtrarFilmesPorAno(ano) {
    return filmes.filter(filme => filme.ano === ano);
}

console.log(filtrarFilmesPorAno(2002));


const roupas = [
    {
        id: 1,
        tipo: "camiseta",
        cor: "azul",
        tamanho: "M",
        preco: 29.90
    },
    {
        id: 2,
        tipo: "calça",
        cor: "preta",
        tamanho: "G",
        preco: 79.90
    },
    {
        id: 3,
        tipo: "jaqueta",
        cor: "vermelha",
        tamanho: "P",
        preco: 129.90
    }
]

// Função para filtrar e ordenar roupas por preço


function filtrarEOrdenarRoupasPorPreco(precoMaximo) {
    const produtosFiltrados = roupas.filter(roupa => roupa.preco <= precoMaximo);
    return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const resultado = filtrarEOrdenarRoupasPorPreco(100);
console.log(resultado);



/////////////////


const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        gerente: "Carlos",
        funcionarios: [
            { id: 1, nome: "Ana", cargo: "Vendedora" },
            { id: 2, nome: "Pedro", cargo: "Vendedor" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        gerente: "Mariana",
        funcionarios: [
            { id: 3, nome: "Lucas", cargo: "Desenvolvedor" },
            { id: 4, nome: "Julia", cargo: "Analista" }
        ]
    }
]

// Função para encontrar um funcionário pelo ID em qualquer departamento

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return null;
}    

console.log(encontrarFuncionarioPorId(1));
