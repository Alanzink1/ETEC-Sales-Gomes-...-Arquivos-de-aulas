// Definindo algumas variáveis base
var idade = 1;
var somaIdade = 0;
var quantidadeDeIdades = 0;

// Enquanto idade cadastrada for diferente de 0
while(idade != 0) {
    
    // Pergunta a idade a cadastrar ao usuário
    idade = parseInt(prompt("Digite a idade: "));

    // Soma a idade cadastrada com as já cadastradas
    somaIdade += idade;
    
    // Aumenta o número de idades cadastradas
    quantidadeDeIdades++;
}

// Faz a média das Idades dividindo pela quantidade de idades cadastradas
var mediaIdade = somaIdade / quantidadeDeIdades;

// Exibe o resultado ao usuário
alert(`A média calculada de todas as idades cadastradas é ${mediaIdade.toFixed(2)}`);

// Faça um programa que receba várias idades, calcule e mostre a média das idades
// digitadas. Finalize digitando idade igual a zero. (while)