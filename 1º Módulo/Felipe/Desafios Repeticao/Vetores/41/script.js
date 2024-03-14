var userVetor = [];
var multiplosNumber = [];

do {
    userVetor.push(parseInt(prompt('Digite valor: ')));
} while(userVetor.length != 10);

var numberChoosed = parseInt(prompt('Qual valor cê quer saber o ultimo?'));

for(let i = 1; i <= numberChoosed; i++) {
    if(numberChoosed % i == 0) {
        multiplosNumber.push(i);
    }
}

alert(`Os múltiplos de ${numberChoosed} são: ${multiplosNumber}`);

//      Faça um programa que leia um vetor de 10 número. 
// Leia um número X. Conte os múltiplos de um número inteiro X 
//         com base no Vetor e mostre-os na tela.