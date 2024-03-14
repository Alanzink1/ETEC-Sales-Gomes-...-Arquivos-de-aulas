var somaPar = 0;
var quantidadePar = 0;
var mediaPar = 0;

var somaImpar = 0;
var quantidadeImpar = 0;
var mediaImpar = 0;

for(let i = 1; i <= 100; i++) {
    let userInput = prompt(i + ' Digite o Valor: ');
    userInput = parseInt(userInput);
    
    if(userInput > 0) {
        if(userInput % 2 == 0) {
            alert('É par');
            somaPar += userInput;
            quantidadePar++;
        } else {
            alert('É impar');
            somaImpar += userInput;
            quantidadeImpar++;
        }
    }
}

mediaPar = somaPar / quantidadePar;
mediaImpar = somaImpar / quantidadeImpar;

alert(`A soma dos pares é: ${somaPar}`);
alert(`A média dos Pares é: ${mediaPar.toFixed(2)}`);

alert(`A soma dos impares é: ${somaImpar}`);
alert(`A média dos Impares é: ${mediaImpar.toFixed(2)}`);


// (Considerar somente valores positivos) 
// Desenvolva um programa que receba 100 valores, cada vez que o usuário digitar um valor, 
// exibir se ele é par ou ímpar. No final exibir:
// *soma dos valores pares
// *média dos valores pares
// *soma dos valores ímpares
// *média dos valores ímpares.