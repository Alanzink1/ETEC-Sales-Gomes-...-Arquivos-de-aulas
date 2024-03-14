var userVetor1 = [];
var userVetor2 = [];
var anotherVetor = [];

do {
    userVetor1.push(parseInt(prompt('Digite valor para o 1º vetor: ')));
} while(userVetor1.length != 20);

do {
    userVetor2.push(parseInt(prompt('Digite valor para o 2º vetor: ')));
} while(userVetor2.length != 20);

for(let i = 0; i <= 19; i++) {
    anotherVetor.push(userVetor1[i]);
    anotherVetor.push(userVetor2[i]);
}

alert('Organizando nas posições pares, os valores do primeiro vetor e, nas posições impares, os valores do segundo...')
alert(anotherVetor);

// 1º primeiro do userVetor2
// 2º primeiro do userVetor1
// 3º segundo do userVetor2

// Leia dois vetores de 20 posições e 
// calcule um outro vetor contendo, nas 
// posições pares, os valores do primeiro e, 
// nas posições impares, os valores do segundo.