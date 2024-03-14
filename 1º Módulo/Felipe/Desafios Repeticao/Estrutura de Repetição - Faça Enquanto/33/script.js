var isTrue = false;
var contador = 1;
var somas = 0;

do {
    
    let userInput = parseFloat(prompt('Digite um valor entre 0 e 10: '));
    if(userInput <= 10 && userInput >= 0) {
        somas += userInput;
        contador++;
    }
} while(contador <= 2);

var resultado = somas / 2;

alert(resultado);

// Desenvolva um algoritmo que calcule a média de dois valores. (Forçar o usuário a digitar duas notas entre 0 e 10).