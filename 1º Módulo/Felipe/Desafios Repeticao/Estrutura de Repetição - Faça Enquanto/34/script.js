var contador = 0;
var podeDividir = 0;

do {
    var userInput = parseInt(prompt("Digite o valor desejado: "));
    for(let i=1; i<= userInput; i++) {
        if(userInput % i == 0) {
            podeDividir++;
        }
    }
    if(podeDividir != 2) {
        alert("Não é Primo!");
    } else {
        alert("É Primo!");
    }

    contador++;

} while(contador <= 1);

// Desenvolva um algoritmo que receba um valor e exiba se ele é ou não primo