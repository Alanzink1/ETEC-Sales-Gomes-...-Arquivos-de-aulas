var result = 0;

for(let i = 1; i <= 10; i++) {
    let userInput = prompt('Digite um valor a ser somado: ');
    userInput = parseInt(userInput);

    if(userInput < 40) {
        result += userInput;
    }
}

alert(result);
console.log(result);

// Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.