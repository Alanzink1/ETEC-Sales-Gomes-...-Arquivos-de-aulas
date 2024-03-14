var i = 1;
var result = 0;

while (i <= 10) {
    let userInput = parseInt(prompt('Digite um valor: '));

    result += userInput;
    i++;
}

alert(`Media Aritmetica: ${(result / 10).toFixed(2)}`);

// Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.