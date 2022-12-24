


const numero = 35;

const numeroPar = (numero % 5) === 0;
// console.log(numeroPar);

if (numero === 0) {

    console.log('O numero é invalido');

} else {

    if (numeroPar) {
        console.log('Sim')
    } else {
        console.log('Nao')
    }
}