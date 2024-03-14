var result = 0;

for(let i = 1; i <= 10; i++) {
    let userInput = prompt('Digite um valor a ser somado: ');
    result += parseInt(userInput);
}

alert(result);
console.log(result);

// Escreva um algoritmo que receba 10 valores e no final exiba a soma; (No máximo 3 variáveis)