var userVetor = [];
var newVetor = [];

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 16);

var firstsValues = userVetor.slice(0, 8);
var secondsValues = userVetor.slice(-8);

newVetor.push(secondsValues);
newVetor.push(firstsValues);

alert(`Trocando os 8 primeiros valores pelos 8 últimos e vice-e-versa,\n ficaria: ${newVetor}`);

//      Leia um vetor de 16 posições e troque
// os 8 primeiros valores pelos 8 últimos e vice-e-versa.
//         Escreva ao final o vetor obtido.