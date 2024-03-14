for(let i = 1; i <= 100; i++) {
    let userInput = prompt('Digite o Valor: ');
    userInput = parseInt(userInput);
    
    if(userInput % 2 == 0) {
        alert('É par');
    } else {
        alert('É impar');
    }

}

// Desenvolva um programa que receba 100 valores, cada vez que o usuário digitar um valor, exibir se ele é par ou ímpar.