var userPrimosInput = [];
var somaPrimos = 0;

for(let i = 1; i <= 5; i++) {

    let divisores = 0;

    let userInput = parseInt(prompt('Digite os valores: '));
    for(let i = 1; i <= userInput; i++) {
        if(userInput % i == 0) {
            divisores++;
        }
    }

    if(divisores == 2) {
        userPrimosInput.push(userInput);
    }

}

for(let i = 0; i <= userPrimosInput.length-1; i++) {
    somaPrimos += userPrimosInput[i];
}

alert(`São primos ${userPrimosInput.length} deles`);
alert(`A soma dos primos é ${somaPrimos}`);
alert(`A média dos primos é ${(somaPrimos / userPrimosInput.length).toFixed(2)}`);

// Desenvolva um programa que receba 5 valores e no final exibir:
//              Quantos valores são primos
//               A soma dos valores primos
//              A média dos valores primos