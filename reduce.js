const salaJS = [7, 5, 6.5, 10, 3];
const salaPython = [6, 5, 8, 9, 5, 7];
const salaJava = [8, 7, 6, 5, 9, 10];

function calculaMedia(listaNotas) {
    // const somaDasNotas = listaNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // }, 0);

    const somaDasNotas = listaNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaNotas.length;
    return media;

}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaPython));
console.log(calculaMedia(salaJava));
