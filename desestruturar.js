const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`A nota de ${aluno} é ${mediaAluno}`);
    }else{
        console.log('Aluno nao encontrado');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Guilherme');