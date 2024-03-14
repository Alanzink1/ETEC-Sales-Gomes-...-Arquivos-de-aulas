var contador = 0;
var coletado = 0;

while(contador !== 2) {
    let userInput = parseFloat(prompt('Digite um valor de 0 a 10: '));

    if(userInput >= 0 && userInput <= 10) {
        coletado += userInput;
        contador++;
    }
}

var resultado = coletado / 2;

alert(`A Média dos Dois: ${resultado.toFixed(1)}`);

// Desenvolva um algoritmo que calcule a média de dois valores. (Forçar o usuário a digitar duas notas entre 0 e 10).