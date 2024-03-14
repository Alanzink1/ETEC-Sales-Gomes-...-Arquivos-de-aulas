var userInput = parseInt(prompt('Digite o valor: '));
var contador = 1;
var podemDividir = 0;

while(contador <= userInput) {

    if(userInput % contador == 0) {
        podemDividir++;
    }

    contador++;
}

if(podemDividir === 2) {
    alert('É Número Primo');
} else {
    alert('Não é Número Primo');
}

// Desenvolva um algoritmo que receba um valor e exiba se ele é ou não primo.