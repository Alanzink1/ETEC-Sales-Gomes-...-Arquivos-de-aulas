var somaDeTodos = 0;
var maiorDeTodos = 0;
var menorDeTodos = 0;

for(let i = 1; i <= 100; i++) {
    let userInput = prompt(i + ' Digite o Valor: ');
    userInput = parseInt(userInput);
    
    somaDeTodos += userInput;

    if(userInput > maiorDeTodos) {
        maiorDeTodos = userInput;
    } else if(userInput < menorDeTodos) {
        menorDeTodos = userInput;
    }

}

alert(`A soma de todos: ${somaDeTodos}`);
alert(`O maior valor digitado: ${maiorDeTodos}`);
alert(`O menor valor digitado: ${menorDeTodos}`);

console.log(`A soma de todos: ${somaDeTodos}`);
console.log(`O maior valor digitado: ${maiorDeTodos}`);
console.log(`O menor valor digitado: ${menorDeTodos}`);

// Desenvolva um programa que faça o usuário informar 100 valores. No final, o programa deverá exibir:
// a. a soma de todos os valores digitados
// b. maior valor digitado
// c. menor valor digitado