const livro = {
    titulo: String,
    autor: String,
    anoPublicacao: Number,
    genero: String,
};

livro.titulo = "O Senhor dos Anéis";
livro.autor = "J.R.R. Tolkien";
livro.anoPublicacao = 1954;
livro.genero = "Fantasia";

console.log(livro);

//////////////
const anoAtual = new Date().getFullYear();

livro.titulo = "Harry Potter e a Pedra Filosofal";
livro.autor = "J.K. Rowling";
livro.anoPublicacao = 1997;
livro.genero = "Fantasia";

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = (livro) => {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    console.log(`Gênero: ${livro.genero}`);
    console.log(`Idade da Publicação: ${livro.idadePublicacao} anos`);
};

mostrarDetalhes(livro);

//////////////

const livro2 = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia",
    avaliacao: 5
};

const novaAvaliacao = {nota: 5, comentario: "Uma obra-prima!"};
if(livro2.avaliacao === null) {
    livro2.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");

}
    
console.log(livro2);