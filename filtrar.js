const alunos = ['Ana', 'Marcos', 'Pedro', 'João', 'Maria', 'Lucas'];
const medias = [7, 5, 8, 6, 9, 4];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;

});

console.log(reprovados);
