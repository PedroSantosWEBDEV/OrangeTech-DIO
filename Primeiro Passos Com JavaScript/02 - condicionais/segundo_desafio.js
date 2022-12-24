
// Faça um programa para calcular o valor de uma viagem

// Voce tera 5 variaveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço da gasolina;
//  3 - O tipo de combustivel que está no seu carro;
//  2 - Gasto medio de combustivel de carro por km;
//  3 - Distancia em km da viagem;

// Imprima no console o valor que sera gasto para realizar esta viagem.

// Primeira Solução

const precoGasolina = 5.25;
const precoEtanol = 4.94;
const kmPorLitros = 30;
const distancia = 1580;
const tipoCombustivel = 'etanol';

if(tipoCombustivel == 'gasolina'){
const litrosConsumidos = distancia/kmPorLitros;
const valorGasto = litrosConsumidos * precoGasolina;
console.log(valorGasto.toFixed(2));
}else if(tipoCombustivel == 'etanol'){
    const litrosConsumidos = distancia/kmPorLitros;
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}