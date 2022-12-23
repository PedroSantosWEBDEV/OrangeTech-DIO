
// Faça um programa para calcular o valor de uma viagem

// Voce tera 3 variaveis. Sendo elas:
//  1 - Preço do combustivel;
//  2 - Gasto medio de combustivel de carro por km;
//  3 - Distancia em km da viagem;

// Imprima no console o valor que sera gasto para realizar esta viagem.

// Primeira Solução

// const precoCombustivel = 5.79;
// const kmPorLitros = 12;
// const distancia = 1580;

// let valorGasto = ((distancia/kmPorLitros) * precoCombustivel);

// console.log(Math.round(valorGasto));

// Segunda Solução

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distancia = 1580;

const litrosConsumidos = distancia/kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));