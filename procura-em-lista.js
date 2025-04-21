const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`A nota de ${aluno} é ${mediaAluno}`);
    }else{
        console.log('Aluno nao encontrado');
    }
}

exibeNomeENota('Caio');
exibeNomeENota('Guilherme');