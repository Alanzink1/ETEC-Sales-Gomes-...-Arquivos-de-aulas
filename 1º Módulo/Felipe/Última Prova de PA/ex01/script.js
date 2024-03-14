// Definindo algumas váriaveis
var base;
var altura;
var soPositivos = false;

do {

    // Perguntando ao usuário a base e altura do triâgulo
    base = parseInt(prompt("Digite a base do triângulo desejado: "));
    altura = parseInt(prompt("Digite a altura do triângulo desejado: "));
    
    // Se a base e a altura forem positivos
    if(base >= 0 && altura >= 0) {
        soPositivos = true;

    // Senao...
    } else {
        alert("Inválido! Reiniciando...")
    }

        // Se não forem positivos, loop again!
} while(soPositivos == false);

// Calcula a area do triangulo
var areaDoTriangulo = (base*altura) / 2;

// Exibe para o usuário
alert(`A área do triângulo informado é ${areaDoTriangulo}`);

// Faça um programa para calcular a área de um triângulo (Area = base * altura / 2) e
// que não permita a entrada de dados inválidos, ou seja, medidas menores ou iguais a
// 0. (do .. while)