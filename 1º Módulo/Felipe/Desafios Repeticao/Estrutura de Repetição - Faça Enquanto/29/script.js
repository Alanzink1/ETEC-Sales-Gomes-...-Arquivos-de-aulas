var contador = 1;
var somas = 0;

do {
    var userInput = parseFloat(prompt('Digite um valor: '));
    somas += userInput;

    contador++;

} while(contador <= 10);

var resultado = somas / 10;

alert(resultado.toFixed(2));

// Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.